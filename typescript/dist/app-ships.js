"use strict";
exports.__esModule = true;
var base_ships_1 = require("./base-ships");
var starfighters_1 = require("./starfighters");
var ship = new base_ships_1.SpaceCraft('hyperdrive');
ship.jumpIntoHyperSpace();
var falcon = new starfighters_1.MillenniumFalcon();
falcon.jumpIntoHyperSpace();
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is falcon good for the job " + (goodForTheJob(falcon) ? 'yes' : 'no'));
