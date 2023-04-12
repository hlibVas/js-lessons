console.log('Задание №1'); 
var arrayFilter = ['Lorem ipsum', 'Blanditiis, eaque', 'Iure, quis', 'Iure, voluptatum', 'Maxime, veniam', 'Inventore, a', 'Eius, qui', 'Accusantium, amet', 'Nemoeos', 'Vero, quos'];
function filterLetter (query) {
  return arrayFilter.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
};
console.log(filterLetter('o')); 

console.log('Задание №2 A'); 
var	ourDate = new Date();
var	curr_date = ourDate.getDate() < 10 ? '0' + ourDate.getDate() : ourDate.getDate();
var	curr_month = (ourDate.getMonth() + 1) < 10 ? '0' + (ourDate.getMonth() + 1) : ourDate.getMonth() + 1;
var	curr_year = ourDate.getFullYear();
var	curr_hour = ourDate.getHours() < 10 ? '0' + ourDate.getHours() : ourDate.getHours();
var	curr_minute = ourDate.getMinutes() < 10 ? '0' + ourDate.getMinutes() : ourDate.getMinutes();
console.log( curr_year + '-' + curr_month + '-' + curr_date + ', ' + curr_hour + ':' + curr_minute );

console.log('Задание №2 B'); 
var	ourDate = new Date();
var	curr_date = ourDate.getDate() < 10 ? '0' + ourDate.getDate() : ourDate.getDate();
var	curr_month = (ourDate.getMonth() + 1) < 10 ? '0' + (ourDate.getMonth() + 1) : ourDate.getMonth() + 1;
var	curr_year = ourDate.getFullYear();
var	curr_hour = ourDate.getHours() < 10 ? '0' + ourDate.getHours() : ourDate.getHours();
var	curr_minute = ourDate.getMinutes() < 10 ? '0' + ourDate.getMinutes() : ourDate.getMinutes();
var	curr_second = ourDate.getSeconds() < 10 ? '0' + ourDate.getSeconds() : ourDate.getSeconds();
console.log( curr_date + '.' + curr_month + '.' + curr_year + ', ' + curr_hour + ':' + curr_minute + ':' + curr_second );

console.log('Задание №3'); 
function getWeekDay (date) {
	let weekDays = ['Воскресенье', 'Понедельник', 'Вторнsик', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
	return weekDays[date.getDay()];
}
var date = new Date('2019-02-15');
console.log( getWeekDay(date) );


console.log('Задание №4'); 
function getLocaleDay(date) {
	let numOfDate = date.getDay();
	if (numOfDate == 0) { 
		numOfDate = 7;
	}
	return numOfDate;
}
var date = new Date('2019-02-15');
console.log( getLocaleDay(date) ); 

console.log('Задание №5'); 
function getDateAgo(date, days) {
	let ourDate = new Date(date); 
	ourDate.setDate(date.getDate() - days);
  return ourDate.getDate();
}
var date = new Date('2019-02-15');
console.log(getDateAgo(date, 1)); 
console.log(getDateAgo(date, 2)); 
console.log(getDateAgo(date, 365));