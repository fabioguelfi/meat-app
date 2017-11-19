"use strict";
exports.__esModule = true;
var SpaceCraft = /** @class */ (function () {
    function SpaceCraft(proprusor) {
        this.proprusor = proprusor;
    }
    SpaceCraft.prototype.jumpIntoHyperSpace = function () {
        console.log("Entering HyperSpace with " + this.proprusor);
    };
    return SpaceCraft;
}());
exports.SpaceCraft = SpaceCraft;
