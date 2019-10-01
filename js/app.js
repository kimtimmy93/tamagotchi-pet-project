class Tomagotchi {
    constructor (name, health, level, hunger, sleepiness, boredom) {
        this.name = name;
        this.health = health;
        this.level = level;
        this.hunger = hunger;
        this.sleepiness = sleepiness;
        this.boredom = boredom;
    }

}

class Character extends Tomagotchi {
    eat() {
        console.log('yum')
    }
    sleep() {
        console.log('zzZ')
    }
    play() {
        console.log('yay')
    }
    poo() {
        console.log('mmf')
    }

}