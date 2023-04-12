console.log('Задание №1');
var counter = (function(){
	var count = 0;
  return function(num){
  	count = num !== undefined ? num : count;
  	return count++;
  }
}());
console.log(counter());
console.log(counter());
console.log(counter(7));
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter(1));
console.log(counter());
console.log(counter());

console.log('Задание №2');
var greet = function() {
  return 'The max shoot range of ' +this.name+ ' relife'+' in caliber '+this.caliber +' is up '+ this.shootRange +'.';
};
var relife = {
  name: 'Barret M95',
  shootRange: '1800',
  caliber: '.50BMG',
  greet: greet
}
var anotherRelife = {
  name: 'VSSK Vyhlop',
  shootRange: '600',
  caliber: '12,7×55 мм',
  greet: greet
}
console.log(relife.greet());
console.log(anotherRelife.greet());

console.log('Задание №3');
var relife = {
  name: 'Barret M95',
  shootRange: '1800',
  caliber: '.50BMG',
  _numberOfShots: 180,
  get numberOfShots(){
    return this._numberOfShots;
  },
  set numberOfShots(value){
    this._numberOfShots = value < 0 ? 0 : value ;
  }
}
console.log(relife.numberOfShots);
relife.numberOfShots = -5;
console.log(relife.numberOfShots);
relife.numberOfShots = 10;
console.log(relife.numberOfShots);
relife.numberOfShots = 300;
console.log(relife.numberOfShots);