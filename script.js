class Transport {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
  move() {
    console.log(`${this.name} движется со скоростью ${this.speed}км/час`);
  }
  stop() {
    console.log(`${this.name} остановаился`);
  }
}

class Car extends Transport {
  constructor(name, speed, numberWheels) {
    super(name, speed);
    this.numberWheels = numberWheels;
  }
  honk() {
    console.log("Beep Beep");
  }
}

let car = new Car("Tesls", 120, 4);
car.move();
car.honk();
car.stop();

console.log("----------------------------");

class Airplane extends Transport {
  constructor(name, speed, wingspan) {
    super(name, speed);
    this.wingspan = wingspan;
  }
  takeOff() {
    console.log(`Самолет ${this.name} взлетел.`);
  }
  lang() {
    console.log(`Самолет ${this.name} приземлился.`);
  }
}

let airplane = new Airplane("Boing313", 280, 2);
airplane.takeOff();
airplane.move();
airplane.lang();
airplane.stop();

console.log("----------------------------");

class Helicopter extends Transport {
  constructor(name, speed, rotorDiameter) {
    super(name, speed);
    this.rotorDiameter = rotorDiameter;
  }
  hover() {
    console.log(`Вертолет ${this.name} завис в воздухе`);
  }
}

let helicopter = new Helicopter("KA-35", 200, 250);

helicopter.move();
helicopter.hover();
helicopter.stop();
console.log("----------------------------");

class Scooter extends Transport {
  constructor(name, speed, numWheels) {
    super(name, speed);
    this.numWheels = numWheels;
  }
  ringBell() {
    console.log("Ring Ring");
  }
}
let scooter = new Scooter("Adiva", 150, 2);

scooter.move();
scooter.ringBell();
scooter.stop();
console.log("----------------------------");

class Ship extends Transport {
  constructor(name, speed, displacement) {
    super(name, speed);
    this.displacement = displacement;
  }
  anchor() {
    console.log(`Постановка корабля ${this.name} на якорь`);
  }
}

let ship = new Ship("Melisa", 200, 200);
ship.move();
ship.anchor();
ship.stop();
console.log("----------------------------");

class Rocket extends Transport {
  constructor(name, speed, fuelType) {
    super(name, speed);
    this.fuelType = fuelType;
  }
  launch() {
    console.log(`Запуск ${this.name}`);
  }
  land() {
    console.log(`Посадка  ${this.name}`);
  }
}
let rocket = new Rocket("Proton", 300, "Ракетное топливо");
rocket.launch();
rocket.move();
rocket.land();
rocket.stop();

console.log("----------------------------");
