package com.fsd.salary.controller;

import java.util.ArrayList;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fsd.salary.model.RspModel;
import com.fsd.salary.model.Salary;
import com.fsd.salary.utils.Deduction;
import com.fsd.salary.utils.Increment;
import com.fsd.salary.utils.Prediction;

@RestController
public class SalaryController {
	@CrossOrigin(origins = "http://localhost:8081")
	@PostMapping(path = "/increase", consumes = "application/json", produces = "application/json")
	public ResponseEntity<RspModel> increase(@RequestBody Salary salary) {

		ArrayList<Object> list = new ArrayList<Object>();

		ArrayList<Integer> years = new ArrayList<Integer>();
		years.add(5);
		years.add(10);
		years.add(20);
		years.add(30);
		years.add(50);

		Increment increasement = new Increment();

		Double increaseAmount = increasement.increaseAmount(salary.getSalary(), salary.getCount(), salary.getInquota());

		for (int year : years) {
			Salary empSalary = new Salary();
			empSalary.setYear(year);
			empSalary.setSalary(salary.getSalary());
			empSalary.setInquota(salary.getInquota());
			empSalary.setCount(salary.getCount() * year);
			empSalary.setAmount(increaseAmount * year);
			list.add(empSalary);
		}

		RspModel rsp = new RspModel();
		rsp.setCode(200);
		rsp.setMessage("ok");
		rsp.setData(list);

		return new ResponseEntity<RspModel>(rsp, HttpStatus.OK);

	}
	
	@CrossOrigin(origins = "http://localhost:8081")
	@PostMapping(path = "/decrease", consumes = "application/json", produces = "application/json")
	public ResponseEntity<RspModel> decrease(@RequestBody Salary salary) {

		ArrayList<Object> list = new ArrayList<Object>();

		ArrayList<Integer> years = new ArrayList<Integer>();
		years.add(5);
		years.add(10);
		years.add(20);
		years.add(30);
		years.add(50);

		Deduction decreasement = new Deduction();

		Double decreaseAmount = decreasement.decreaseAmount(salary.getSalary(), salary.getCount(), salary.getDequota());

		for (int year : years) {
			Salary empSalary = new Salary();
			empSalary.setYear(year);
			empSalary.setSalary(salary.getSalary());
			empSalary.setDequota(salary.getDequota());
			empSalary.setCount(salary.getCount() * year);
			empSalary.setAmount(decreaseAmount * year);
			list.add(empSalary);
		}

		RspModel rsp = new RspModel();
		rsp.setCode(200);
		rsp.setMessage("ok");
		rsp.setData(list);

		return new ResponseEntity<RspModel>(rsp, HttpStatus.OK);

	}
	@CrossOrigin(origins = "http://localhost:8081")
	@PostMapping(path = "/predict", consumes = "application/json", produces = "application/json")
	public ResponseEntity<RspModel> predict(@RequestBody Salary salary) {

		ArrayList<Object> list = new ArrayList<Object>();

		ArrayList<Integer> years = new ArrayList<Integer>();
		years.add(5);
		years.add(10);
		years.add(20);
		years.add(30);
		years.add(50);

		Prediction predictamount = new Prediction();

		Double predictAmount = predictamount.predictAmount(salary.getSalary(), salary.getCount(), salary.getInquota(), salary.getDequota());

		for (int year : years) {
			Salary empSalary = new Salary();
			empSalary.setYear(year);
			empSalary.setSalary(salary.getSalary());
			empSalary.setInquota(salary.getInquota());
			empSalary.setDequota(salary.getDequota());
			empSalary.setAmount(predictAmount * year);
			list.add(empSalary);
		}

		RspModel rsp = new RspModel();
		rsp.setCode(200);
		rsp.setMessage("ok");
		rsp.setData(list);

		return new ResponseEntity<RspModel>(rsp, HttpStatus.OK);

	}


}
