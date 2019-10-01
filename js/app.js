class Tomagotchi {
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.level = 0;
        this.hunger = 0;
        this.sleepiness = 0;
        this.boredom = 0;
        this.gameTimer = 59;
    }
    setGameTimer () {
        const $gameTimer = $('#gameTimer')

        const interval = setInterval(() => {
            if(this.time === 0){
                clearInterval(interval); //stops the interval
            } else {
                this.time--
            }
            $gameTimer.text(`timer: ${this.time}sec`)
        }, 59000)
    }
    setHunger(hunger) {
        
        console.log('grrr')
    }
    setSleepiness(sleepiness) {
        
        console.log('zzZ')
    }
    setBoredom(boredom) {
        
        console.log('yawn')
    }
}

const rick = new Tomagotchi('tommy');
console.log(rick, 'rick')


    
