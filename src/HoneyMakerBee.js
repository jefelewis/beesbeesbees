var HoneyMakerBee = function() {
  this.age = 10;
  this.job = "make honey";
  this.color = "yellow";
  this.food = "jelly"
  this.honeyPot = 0;
};


// METHODS
// Method: Eat
HoneyMakerBee.prototype.eat = function () {

};

// Method: Make Honey
HoneyMakerBee.prototype.makeHoney = function () {
  this.honeyPot += 1;
};

HoneyMakerBee.prototype.giveHoney = function () {
  this.honeyPot -= 1;
};
