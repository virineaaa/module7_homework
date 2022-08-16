/*Модуль 7. Задание 4. Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент). 

Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.
*/

function HomeAppliance(name) {
  this.type = 'smallAppliance',
  this.name = name
}

HomeAppliance.prototype.getPower = function(currentState, power) {
    console.log(`The appliance is ${currentState}. Power: ${power}  W`)
}

function BeveragemakingAppliance (name, timeOfWork) {
  this.name = name,
  this.timeOfWork = timeOfWork
}

BeveragemakingAppliance.prototype = new HomeAppliance();

BeveragemakingAppliance.prototype.getPower = function(currentState, power) {
    console.log(`The beverage-making appliance is ${currentState}. Power: ${power}  W`)
}

const electricKettle = new BeveragemakingAppliance('electricKettle', '3 hours') 
electricKettle.temperature = '100 degrees'

const vacuumCleaner = new HomeAppliance('vacuumCleaner')
vacuumCleaner.volume = 'low'
vacuumCleaner.checkStateOfBag = function (stateOfBag) {
    console.log(`The bag of the vacuum cleaner is ${stateOfBag}`) 
}

const coffemaker = new BeveragemakingAppliance('coffemaker', '3 hours')
coffemaker.mode = 'Americano'
coffemaker.checkReaddiness = function (readdiness) {
  console.log(`The coffee is ${readdiness}`)
}


electricKettle.getPower('plugged', 1500);
vacuumCleaner.getPower('unplugged', 1000);
coffemaker.getPower('plugged', 2000);

vacuumCleaner.checkStateOfBag('full');
coffemaker.checkReaddiness('ready');

console.log(electricKettle);
console.log(vacuumCleaner);
console.log(coffemaker);