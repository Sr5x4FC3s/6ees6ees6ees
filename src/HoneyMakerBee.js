class HoneyMakerBee extends Bee {
  // TODO..
  constructor() {
    super(Grub)
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  }

  makeHoney() {
  	this.honeyPot++;
  }

  giveHoney() {
  	this.honeyPot--;
  }
};
