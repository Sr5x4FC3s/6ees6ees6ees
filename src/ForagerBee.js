class ForagerBee extends HoneyMakerBee {
  // TODO..
  constructor() {
  	super(Grub)
  	this.job = 'find pollen';
  	this.canFly = true;
  	this.treasureChest = [];
  }

  forage() {
  	this.treasureChest.push('treasure');
  }
};
