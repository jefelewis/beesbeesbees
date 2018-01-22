var Bee = function() {
  Grub.call(this);
  this.age = 5;
  this.color = "yellow";
  this.job = "keep on growing"
};

// Inherit properties from previous Object
Bee.prototype = Object.create(Grub.prototype);

// Overrides the inherited prototypes to be Bee.prototype instead of Grub.prototype
Bee.prototype.constructor = Bee;
