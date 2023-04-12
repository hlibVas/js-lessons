console.log('Задание №1');

let string1 = 'Lorem ipsum dolor sit.',
string2 = '',
newString1 = string1 || 'Default text',
newString2 = string2 || 'Default text';

console.log(newString1);
console.log(newString2);

console.log('Задание №2');

let browsers = {
  name: 'Chrome',
  engine: 'chromium',
  say: function () {
    console.log('Название: '+this.name+'. Движок: '+this.engine);
  }
};
console.log(browsers.name);
console.log(browsers.engine);

console.log('Задание №3');
browsers.say();

console.log('Задание №4');
let n;
for(n = 2; n < 20;n += 2){
  console.log(n);
};

console.log('Задание №5');
let browser = 'Opera',
Status;
switch(browser) {
case 'Chrome': Status = 'browser'; break;
case 'Opera': Status = 'browser'; break;
case 'Mozilla': Status = 'browser'; break;
case 'Safary': Status = 'browser'; break;
case 'EnternetExplorer': Status = 'not browser'; break;
default: Status = 'less popular browser';
}
console.log(browser + ' is ' + Status);

console.log('Задание №6');
let x = Math.round(Math.random()*100);
x > 50?console.log('Х больше 50'):x < 50?console.log('Х меньше 50'):console.log('Х равен 50');

console.log('Задание №7');
let y = 1;
while (y < 8) {
  console.log(y++);
};

console.log('Задание №8');
let arg1 = 2,
arg2 = 4;
function funk() {
  console.log('Число '+arg1+' в степени '+arg2+'.');
  console.log('Результат '+arg3());
  function arg3() {
    return arg3 = Math.pow(arg1,arg2);
  }
};
funk()