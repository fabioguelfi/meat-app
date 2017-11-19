var message = "Help me, Obi-Wan Kenobi, you are my only hope";
console.log(message);
var episode = 4;
console.log("This is episode: " + episode);
episode = episode + 1;
console.log("The next episode is: " + episode);
var favoriteDroid;
favoriteDroid = "BB-8";
console.log("My favorite Droid is: " + favoriteDroid);
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
// normaly function //
var distance = 14;
console.log("Is " + distance + " parsecs enough to beat Millenium Falcon ? " + (isEnoughToBeatMF(distance) ? 'Yes' : 'No'));
// arrow functions //
var call = function (name) { return console.log("Do you copy, " + name + "?"); };
call('Fabio Guelfi');
// parameters default ts //
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc (5,1) = " + inc(5, 1));
console.log("inc (5) = " + inc(5));
// parameters default ts //
var incrementar = function (speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
};
console.log("inc (5,1) = " + incrementar(5, 1));
console.log("inc (5) = " + incrementar(5));
