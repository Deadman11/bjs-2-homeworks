function getArrayParams(...arr) {
	let min = Math.min(...arr);
	let max = Math.max(...arr);
	let avg = arr.reduce((accumulator, currentValue) => accumulator +currentValue) / arr.length;
	avg = avg.toFixed(2)

	return {min: min, max: max, avg: +avg};
}

function summElementsWorker(...arr) {
	let count = 0;

	for (let i = 0; i < arr.length; i++) {
		count += arr[i];
	}
	return count
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0){
		return 0
	}
	let maxNum = Math.max(...arr);
	let minNum = Math.min(...arr);

	return maxNum - minNum;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0){
		return 0
	}
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
	if (arr.length === 0){
		return 0
	}
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
		let iterateArr = arrOfArr[i];
		let arrayFunc = func(...iterateArr);
		if (arrayFunc > maxWorkerResult) {
			maxWorkerResult = arrayFunc;
		}
	}
	return maxWorkerResult
}