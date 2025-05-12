class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (time === null || callback === undefined) {
			throw new Error('Отсутствуют обязательные аргументы')
		}
		if (this.alarmCollection.some(callTime => callTime.time === time)) {
			console.warn('Уже присутствует звонок на это же время')
		}
		return this.alarmCollection.push({
			callback: callback,
			time: time,
			canCall: true
		});
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(delTime => delTime.time !== time);

	}

	getCurrentFormattedTime() {
		return new Date().toTimeString().slice(0, 5);
	}

	start() {
		if (this.intervalId != null) {
			return
		}
		this.intervalId = setInterval(() => {
			this.alarmCollection.forEach(startTime => {
				if (startTime.time === this.getCurrentFormattedTime() && startTime.canCall === true) {
					startTime.canCall = false;
					startTime.callback();
				}
			});
		}, 1000);
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach(canCallisTrue => canCallisTrue.canCall = true);
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}