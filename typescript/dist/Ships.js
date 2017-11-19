var ship = new SpaceCraft('hyperdrive');
ship.jumpIntoHyperSpace();
var falcon = new MillenniumFalcon();
falcon.jumpIntoHyperSpace();
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is falcon good for the job " + (goodForTheJob(falcon) ? 'yes' : 'no'));
