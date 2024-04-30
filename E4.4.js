function Electrodevices(name) { // родительская функция
  this.voltage = 220;
  this.deviceTurned = false // по умолчанию при создании экземпляров они будут выключены
}
Electrodevices.prototype.deviceSwitch = function(deviceSwitch) { // метод для включения/выключения прибора
  if (deviceSwitch === 'on') {
    this.deviceTurned = true;
  } else {
    this.deviceTurned = false;
  }
}
Electrodevices.prototype.energyConsumption = function(time) { // Считаем потребленную энергию и переводим в кВт
  let сonsumption = this.devicePower * time * 0.01;
  console.log(`Электроприбор ${this.name} за время работы ${time} (час/часов) потратил ${сonsumption} кВт*ч `);
}


function Lamp(name, amperage, luminous) { // подкласс конструктор осветительных приборов
  this.name = name;
  this.luminous = luminous;
  this.amperage = amperage;
  this.devicePower = Math.round(this.voltage * amperage)
}
Lamp.prototype = new Electrodevices() // делегирующая связь подкласса
Lamp.prototype.getInfo = function() { // метод для вывода в консоль всех параметров прибора
  console.log(`Параметры осветительного прибора ${this.name}`);
  for (const key in this) {
    if (typeof this[key] !== "function") { // чтобы вместе с параметрами не выводил методы экземпляра
      console.log(`${key}: ${this[key]}`);
    }
  }
  console.log('\n'); // для читабельности данных в консоли
}

function Computing(name, amperage, size) { // подкласс конструктор компьютеров
  this.name = name;
  this.size = size + " Дюймов";
  this.amperage = amperage;
  this.devicePower = Math.round(this.voltage * amperage)
}
Computing.prototype = new Electrodevices(); // делегирующая связь подкласса
Computing.prototype.getInfo = function() { // метод для вывода в консоль всех параметров прибора
  console.log(`Параметры компьютера ${this.name}`);
  for (const key in this) {
    if (typeof this[key] !== "function") { // чтобы вместе с параметрами не выводил методы экземпляра
      console.log(`${key}: ${this[key]}`);
    }
  }
  console.log('\n'); // для читабельности данных в консоли
}

/* Создаем экземпляры электроприборов */
const tableLamp = new Lamp('My tableLamp', 0.06, 100); // Имя, ток (в амперах), световой поток (Люмен)
const laptop = new Computing('HP laptop', 0.4, 14); // Имя, ток (в амперах), диагональ экрана

tableLamp.getInfo(); // Выводим параметры настольной лампы
laptop.getInfo(); // Выводим параметры ноутбука

tableLamp.deviceSwitch('on'); // Включаем прибор ('on') или выключаем (любое значение, отличное от 'on')
tableLamp.getInfo(); // Снова выводим параметры, чтобы убедиться что прибор теперь включен

tableLamp.energyConsumption(4); // Запрашиваем сколько прибор потратит энергии за переданное в запросе кол-во часов
laptop.energyConsumption(4);
