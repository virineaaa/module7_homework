//Модуль 7. Задание 1. Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

const person = {
  name: "Kate",
  age: 25,
  city: "Moscow",
}

function getOwnProperties(person) {
  for (let key in person) {
    if (person.hasOwnProperty(key)) {
      console.log(`ключ: ${key}, значение свойства: ${person[key]}`);
    }
  }
}

getOwnProperties(person);