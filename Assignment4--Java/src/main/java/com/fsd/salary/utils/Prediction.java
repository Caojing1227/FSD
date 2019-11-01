package com.fsd.salary.utils;

public class Prediction {

	interface PredictionFunc {
		double predict(double currentSalary, int count, double increaseQuota, double decreaseQuota);
	}

	private double operate(double currentSalary, int count, double increaseQuota, double decreaseQuota,
			PredictionFunc fobj) {
		return fobj.predict(currentSalary, count, increaseQuota, decreaseQuota);
	}

	PredictionFunc predictAmount = (double currentSalary, int count, double increaseQuota,
			double decreaseQuota) -> currentSalary * (increaseQuota - decreaseQuota)/100 * count;

	public double predictAmount(double currentSalary, int count, double increaseQuota, double decreaseQuota) {

		Prediction tobj = new Prediction();
		return tobj.operate(currentSalary, count, increaseQuota, decreaseQuota, predictAmount);
	}

}
