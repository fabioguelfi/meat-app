import {SpaceCraft,ContainerShip} from './base-ships'
import {MillenniumFalcon} from './starfighters'

import * as $ from 'jquery'

let ship = new SpaceCraft('hyperdrive')
ship.jumpIntoHyperSpace()

let falcon = new MillenniumFalcon()
falcon.jumpIntoHyperSpace()

let goodForTheJob = ( ship: ContainerShip ) => ship.cargoContainers > 2
console.log(`Is falcon good for the job ${goodForTheJob (falcon) ? 'yes': 'no'}`)