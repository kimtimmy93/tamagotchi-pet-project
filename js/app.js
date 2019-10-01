class Tomagotchi {
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.level = 0;
        this.hunger = 0;
        this.sleepiness = 0;
        this.boredom = 0;
    }
    setHunger() {
        console.log('grrr')
    }
    setSleepiness() {
        console.log('zzZ')
    }
    setBoredom() {
        console.log('yawn')
    }
    
}

const tommy = new Tomagotchi('tommy');
console.log(tommy, 'tommy')


    
