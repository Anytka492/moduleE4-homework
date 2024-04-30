const obj = {a: 1, hello: 2, '': 3, eee: 4, var: 5,};

const printLogHasOwnObject = (a) => {
  for (let key in a) {
    if (a.hasOwnProperty(key)) {
        console.log(key);
    }
  }
}

printLogHasOwnObject(obj);
