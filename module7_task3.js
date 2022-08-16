//Модуль 7. Задание 3. Написать функцию, которая создает пустой объект, но без прототипа.

function createEmptyObj () {
  const emptyObj = Object.create(null);
  return emptyObj;
}
console.log(createEmptyObj());