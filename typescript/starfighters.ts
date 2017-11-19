import { SpaceCraft, ContainerShip } from "./base-ships";

class MillenniumFalcon extends SpaceCraft implements ContainerShip{
    cargoContainers: number

    constructor(){
        super('hyperdrive')
        this.cargoContainers = 4
    }
    
    jumpIntoHyperSpace(){
        if(Math.random() >= 0.5){
            super.jumpIntoHyperSpace()
        } else {console.log(`Failed to jumpt into HyperSpace`)}
    }
}

export {MillenniumFalcon}