var RetiredForagerBee = function() {
  Grub.call(this);
  this.age = 40;
  this.job = "gamble";
  this.canFly = false;
  this.color = "grey";
  this.treasureChest = [];
};

// Inherit properties from previous Object
RetiredForagerBee.prototype = Object.create(Grub.prototype);

// Overrides the inherited prototypes to be RetiredForagerBee.prototype instead of Grub.prototype
RetiredForagerBee.prototype.constructor = RetiredForagerBee;


// METHODS
// Method: Forage
RetiredForagerBee.prototype.forage = function () {
  return "I am too old, let me play cards instead"
};


// Method: Gamble
RetiredForagerBee.prototype.gamble = function (treasure) {
  this.treasureChest.push(treasure);
};
