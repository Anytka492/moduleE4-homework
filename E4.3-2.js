const obj = {a: 1, hello: 2, '': 3, eee: 4, var: 5,};
let str = "hello";

const str_in_obj = (a, b) => {
  for (let key in a) {
    if (key == b) {
        return true;
    }
  }
  return false;
}

let result = str_in_obj(obj, str);
console.log(result);
