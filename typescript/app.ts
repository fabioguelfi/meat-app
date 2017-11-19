let message: string  = "Help me, Obi-Wan Kenobi, you are my only hope"
console.log(message)

let episode: number = 4
console.log(`This is episode: ` + episode)
episode = episode + 1
console.log(`The next episode is: ` + episode)

let favoriteDroid: string 
favoriteDroid = "BB-8"
console.log(`My favorite Droid is: ` + favoriteDroid)

let isEnoughToBeatMF = function (parsecs: number) : boolean {
    return parsecs < 12
}
// normaly function //
let distance = 14
console.log(`Is ${distance} parsecs enough to beat Millenium Falcon ? ${isEnoughToBeatMF(distance)? 'Yes' : 'No'}`)

// arrow functions //
let call = (name:string) => console.log(`Do you copy, ${name}?`)
call('Fabio Guelfi')

// parameters default ts //
function inc (speed:number, inc:number = 1) : number {
    return speed + inc
}

console.log(`inc (5,1) = ${inc(5,1)}`)
console.log(`inc (5) = ${inc(5)}`)

// parameters default ts //
const incrementar = (speed:number, inc:number = 1) : number => {
    return speed + inc
}
console.log(`inc (5,1) = ${incrementar(5,1)}`)
console.log(`inc (5) = ${incrementar(5)}`)
