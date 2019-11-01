package com.fsd.salary.utils;


public class Deduction {
	
	interface DecreaseFunc {
		double decrease(double currentSalary, int count, double decreaseQuota);
	}

	private double operate(double currentSalary, int count, double decreaseQuota, DecreaseFunc fobj) {
		return fobj.decrease(currentSalary, count, decreaseQuota);
	}

	DecreaseFunc decreaseAmount = (double currentSalary, int count, double decreaseQuota) -> currentSalary
			* decreaseQuota/100 * count;

	public double decreaseAmount(double currentSalary, int count, double decreaseQuota) {

		Deduction tobj = new Deduction();
		return tobj.operate(currentSalary, count, decreaseQuota, decreaseAmount);
	}

}
