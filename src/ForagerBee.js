var ForagerBee = function() {
  this.age = 10;
  this.job = "find pollen";
  this.color = "yellow";
  this.food = "jelly";
  this.canFly = true;
  this.treasureChest = [];
};


// METHODS
// Method: Eat
ForagerBee.prototype.eat = function () {

};

// Method: Eat
ForagerBee.prototype.forage = function (treasure) {
  this.treasureChest.push(treasure)
};
