function getArrayParams(...arr) {
	let min = {
		min: 0
	};
	let max = {
		max: 0
	};
	let avg = {
		avg: 0
	};


	min = Math.min(...arr);
	max = Math.max(...arr);
	avg = arr.reduce(function(a, b) {
		return a + b
	}) / arr.length;
	avg = avg.toFixed(2)

	console.log();

	return {
		min: min,
		max: max,
		avg: +avg
	};
}

function summElementsWorker(...arr) {
	count = 0;

	for (let i = 0; i < arr.length; i++) {
		count += arr[i];
	}

	return count
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) return 0
	maxNum = Math.max(...arr);
	minNum = Math.min(...arr);

	return maxNum - minNum;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) return 0
	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i]
		} else {
			sumOddElement += arr[i]
		}
	}
	return sumEvenElement - sumOddElement
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) return 0
	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i]
			countEvenElement++
		}
	}
	return sumEvenElement / countEvenElement
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity


	for (let i = 0; i < arrOfArr.length; i++) {
		let firstArr = arrOfArr[i];
		let arrayFunc = func(...firstArr);
		if (arrayFunc > maxWorkerResult) {
			maxWorkerResult = arrayFunc;
		}
	}
	return maxWorkerResult
}