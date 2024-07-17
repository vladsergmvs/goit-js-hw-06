class StringBuilder {
  #value;
  constructor(value){
      this.#value = value;
  }
  //повертає поточне значення приватної властивості value.
  getValue() {
    return this.#value;
  }

  //отримує параметр str (рядок) і додає його в кінець значення приватної властивості value об'єкта, який викликає цей метод.
  padEnd(str) {
    this.#value += str;
  }

  //отримує параметр str (рядок) і додає його на початок значення приватної властивості value об'єкта, який викликає цей метод.
  padStart(str) {
    this.#value = str + this.#value;
  }

  //отримує параметр str (рядок) і додає його на початок і в кінець значення приватної властивості value об'єкта, який викликає цей метод.
  padBoth(str) {
    this.#value = str + this.#value + str;
  }
}

console.log('//-----------------------TASK-3-------------------------------//-');

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
