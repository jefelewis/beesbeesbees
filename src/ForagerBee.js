var ForagerBee = function() {
  Grub.call(this);
  this.age = 10;
  this.job = "find pollen";
  this.color = "yellow";
  this.canFly = true;
  this.treasureChest = [];
};

// Inherit properties from previous Object
ForagerBee.prototype = Object.create(Grub.prototype);

// Overrides the inherited prototypes to be ForagerBee.prototype instead of Grub.prototype
ForagerBee.prototype.constructor = ForagerBee;


// METHODS
// Method: Eat
ForagerBee.prototype.forage = function (treasure) {
  this.treasureChest.push(treasure)
};
