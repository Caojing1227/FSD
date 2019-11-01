package com.fsd.salary.utils;

public class Increment {

	interface IncreaseFunc {
		double increase(double currentSalary, int count, double increaseQuota);
	}

	private double operate(double currentSalary, int count, double increaseQuota, IncreaseFunc fobj) {
		return fobj.increase(currentSalary, count, increaseQuota);
	}

	IncreaseFunc increaseAmount = (double currentSalary, int count, double increaseQuota) -> currentSalary
			* increaseQuota/100 * count;

	public double increaseAmount(double currentSalary, int count, double increaseQuota) {

		Increment tobj = new Increment();
		return tobj.operate(currentSalary, count, increaseQuota, increaseAmount);
	}

}
