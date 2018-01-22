var RetiredForagerBee = function() {
  this.age = 40;
  this.job = "gamble";
  this.canFly = false;
  this.color = "grey";
  this.food = "jelly";
  this.treasureChest = [];
};

// METHODS
// Method: Forage
RetiredForagerBee.prototype.forage = function () {
  return "I am too old, let me play cards instead"
};

// Method: Eat
RetiredForagerBee.prototype.eat = function () {

};

// Method: Gamble
RetiredForagerBee.prototype.gamble = function (treasure) {
  this.treasureChest.push(treasure);
};
