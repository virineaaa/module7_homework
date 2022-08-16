//Модуль 7. Задание 2. Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

const checkName = "name";

const person = {
  name: "Kate",
  age: 25,
  city: "Moscow",
};

function checkSimilarProperty(checkName, person) {
  if (checkName in person) {
    return true;
  } else {
    return false;
  }
}

console.log(checkSimilarProperty(checkName, person));