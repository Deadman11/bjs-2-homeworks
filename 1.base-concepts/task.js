"use strict"

function solveEquation(a, b, c) {
	let arr = [];

	let D = b ** 2 - 4 * a * c

	if (D > 0) {
		arr.push((-b + Math.sqrt(D)) / (2 * a), (-b - Math.sqrt(D)) / (2 * a))
	} else if (D == 0) {
		arr.push(-b / (2 * a))
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	let monthlyRate = (percent / 100) / 12
	let backToBank = amount - contribution
	let monthlyPayment = backToBank * (monthlyRate + (monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1)))
	let totalPayment = monthlyPayment * countMonths

	return Math.round(totalPayment * 100) / 100
}