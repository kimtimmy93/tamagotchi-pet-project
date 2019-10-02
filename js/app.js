$('#start').on('click', () => {
    console.log('button works')
    game.setGameTimer();
  });

class Tomagotchi {
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.level = 0;
        this.hunger = 0;
        this.sleepiness = 0;
        this.boredom = 0;
        
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

const game = {
gameTimer: 59,
setGameTimer () {
    const $gameTimer = $('#gameTimer')

    const interval = setInterval(() => {
        
        if(this.gameTimer === 0){
            clearInterval(interval); //stops the interval
        } else {
            this.gameTimer--
        }
        $gameTimer.text(`timer: ${this.gameTimer}s`)

    }, 1000)
        // this.setGameTimer();
    }
}

const rick = new Tomagotchi('rick');
console.log(rick, 'rick')


    
