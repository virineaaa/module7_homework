/*Модуль 7. Задание 5.  Переписать консольное приложение из предыдущего юнита на классы.

   Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео.

   Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент). 

   Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.
*/

class HomeAppliance {
  constructor(name) {
    this.name = name;
    this.type = 'smallAppliance';
  }
  
  getPower(currentState, power) {
    console.log(`The appliance is ${currentState}. Power: ${power}  W`)
  }
}

class BeveragemakingAppliance extends HomeAppliance {
  constructor(name, timeOfWork) {
    super(name);
    this.timeOfWork = timeOfWork;
  }
  
  getPower(currentState, power) {
    console.log(`The beverage-making appliance is ${currentState}. Power: ${power}  W`)
  }
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