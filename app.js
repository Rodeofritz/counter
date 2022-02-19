const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];
const weekdays = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

const giveaway = document.querySelector('.giveaway');
const items = document.querySelectorAll('.deadline-format h4');
const timer = document.querySelector('.deadline');

//dynamically adding the date
const futureDate = new Date(2024, 1, 19, 14, 10, 20, 500);
const future = futureDate.getTime();
const futYear = futureDate.getFullYear();
let futMonth = months[futureDate.getMonth()];
const futDate = futureDate.getDate();
let futDay = weekdays[futureDate.getDay()];
const futHours = futureDate.getHours();
const futMinutes = futureDate.getMinutes();
const futSeconds = futureDate.getSeconds();

giveaway.innerHTML = `give away ends on ${futDay}, ${futDate} ${futMonth} ${futYear} ${futHours}:${futMinutes}`;

// we want the difference between the future date end the current date
//then we want to transform that time into days, hours, minutes and getSeconds

const getRemainingTime = () => {
	const today = new Date().getTime();
	const time = future - today;
	//now we need to turn our ms into days, hours, minutes, seconds
	//1 day = 24hours
	//1 hour = 60 minutes
	//1 minute = 60 getSeconds
	//1 second = 1000 ms

	const oneDay = 24 * 60 * 60 * 1000;
	const oneHour = 60 * 60 * 1000;
	const oneMinute = 60 * 1000;
	const oneSecond = 1000;

	const days = Math.floor(time / oneDay);
	const hours = Math.floor((time % oneDay) / oneHour);
	const minutes = Math.floor((time % oneHour) / oneMinute);
	const seconds = Math.floor((time % oneMinute) / oneSecond);

	const counterArr = [days, hours, minutes, seconds];

	const formatNumbers = function (item) {
		if (item < 10) {
			return `0${item}`;
		}
		return item;
	};
	if (time < 0) {
		clearInterval(countdown);
		timer.innerHTML = `<h2 class="expires">The time has run out and the winner is...</h2>`;
	}

	items.forEach((item, index) => {
		item.textContent = formatNumbers(counterArr[index]);
	});
};

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
