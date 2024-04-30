function createObject () {
  return Object.create(null);
}

const obj = createObject();
console.log(obj);
console.log(Object.getPrototypeOf(obj));


/* Написать функцию, которая создает пустой объект, но без прототипа.*/
