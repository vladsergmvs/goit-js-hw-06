class Storage {
  #items = [];
   constructor(params) {
    for (const iterator of params) {
      this.#items.push(iterator);
    }
  }
  getItems() {
    return this.#items;
  }
  addItem(newItem) {
    this.#items.push(newItem);
  
}
  removeItem(itemToRemove) {
     this.#items.splice(this.#items.indexOf(itemToRemove), 1);
}
}


console.log("//-----------------------TASK-2-------------------------------//-");

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
