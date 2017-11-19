class SpaceCraft {
    
        constructor (public proprusor: string){}  
        
        jumpIntoHyperSpace() {
            console.log(`Entering HyperSpace with ${this.proprusor}`)
        }
    }
interface ContainerShip{
        cargoContainers: number
    }

    export {SpaceCraft, ContainerShip}