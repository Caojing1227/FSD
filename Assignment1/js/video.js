
document.addEventListener("DOMContentLoaded", function() { initial(); }, false);

var videoPlayer;
var muteUnmuteIcon;
var likeNum;
var unlikeNum;

function initial(){
    videoPlayer = document.getElementById("videoPlayer");
    muteUnmuteIcon = document.getElementById("mute_unmute_icon");

    videoPlayer.volume = 0.5;

    //add a listener for listen progressbar
    videoPlayer.addEventListener('timeupdate', updateProgress, false);

    //initial like and unlike values
    likeNum = document.getElementById("likeNum");
    unlikeNum = document.getElementById("unlikeNum");

    likeNum.innerHTML = localStorage.getItem('like');
    unlikeNum.innerHTML = localStorage.getItem('unlike');
}

function replaceButtonIcon(iconObj, newClass){
    iconObj.className = newClass;
}

function playAndPauseMedia(){
    let play_pause_icon = document.getElementById("play_pause_icon");
    
    //play
    if(videoPlayer.paused || videoPlayer.ended){
        replaceButtonIcon(play_pause_icon, "fas fa-pause");
        videoPlayer.play();
    }else{      //pause        
        replaceButtonIcon(play_pause_icon, "fas fa-play");
        videoPlayer.pause();
    }
}

function stopMidea(){
    videoPlayer.pause();
	videoPlayer.currentTime = 0;
}

function updateProgress(){
    let showPercent = Math.round((100 / videoPlayer.duration) * videoPlayer.currentTime);
    let progressBar = document.getElementById("progressBar");

    progressBar.setAttribute("aria-valuenow", showPercent);
    progressBar.setAttribute("style", "width:"+showPercent+"%;");
}

function voiceChange(operation){
    if(operation === "add"){        
        videoPlayer.volume += videoPlayer.volume == 1 ? 0 : 0.1;

        replaceButtonIcon(muteUnmuteIcon, "fas fa-volume-up");
        videoPlayer.muted = false;

    }else{
        videoPlayer.volume -= (videoPlayer.volume == 0 ? 0 : 0.1);

        if(videoPlayer.volume == 0){
            replaceButtonIcon(muteUnmuteIcon, "fas fa-volume-mute");
            videoPlayer.muted = true;
        }
    }

    videoPlayer.volume = parseFloat(videoPlayer.volume).toFixed(1);
    document.getElementById("volume_value").innerHTML = (videoPlayer.volume * 100)+"%";
}

function muteOrUnmute(){
    if(videoPlayer.muted){
        videoPlayer.muted = false;
        replaceButtonIcon(muteUnmuteIcon, "fas fa-volume-up");
    }else{
        videoPlayer.muted = true;
        replaceButtonIcon(muteUnmuteIcon, "fas fa-volume-mute");
    }
}

function like(){
    let tmpLikeNum = localStorage.getItem('like');
    tmpLikeNum = parseInt(tmpLikeNum) + 1;
    localStorage.setItem('like', tmpLikeNum);
    likeNum.innerHTML = tmpLikeNum;
}

function unlike(){
    let tmpUnlikeNum = localStorage.getItem('unlike');
    tmpUnlikeNum = parseInt(tmpUnlikeNum) + 1;
    localStorage.setItem('unlike', tmpUnlikeNum);
    unlikeNum.innerHTML = tmpUnlikeNum;
}

function playOtherMedias(mediaSrc){
    videoPlayer.src = "./media/video"+mediaSrc+".mp4";
    videoPlayer.load();
}

