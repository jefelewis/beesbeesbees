var HoneyMakerBee = function() {
  Grub.call(this);
  this.age = 10;
  this.job = "make honey";
  this.color = "yellow";
  this.honeyPot = 0;
};

// Inherit properties from previous Object
HoneyMakerBee.prototype = Object.create(Grub.prototype);

// Overrides the inherited prototypes to be HoneyMakerBee.prototype instead of Grub.prototype
HoneyMakerBee.prototype.constructor = HoneyMakerBee;


// METHODS
// Method: Make Honey
HoneyMakerBee.prototype.makeHoney = function () {
  this.honeyPot += 1;
};

// Method: Give Honey
HoneyMakerBee.prototype.giveHoney = function () {
  this.honeyPot -= 1;
};
