$('#start').on('click', () => {
    console.log('button works')
    game.setSleepiness();
    game.setBoredom();
    game.setHunger();
    game.setGameTimer();
    game.setLevel();
  });

class Tomagotchi {
    constructor (name) {
        this.name = name;
    
    }
}
console.log(Tomagotchi); 

const game = {
gameTimer: 59,
hunger: 0,
sleepiness: 0,
boredom: 0,
level: 0,
health: 100,
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
    },
    setHunger() {
        const $hunger = $('#hunger')
    
       const int = setInterval(() => {
        this.hunger++
        $hunger.text(`Hunger: ${this.hunger}`)
            if(this.hunger === 10){
                clearInterval(int);
             } 
        },1000)   
    },
    setSleepiness() {
        const $sleepiness = $('#sleepiness')
    
        const int = setInterval(() => {
         this.sleepiness++
         $sleepiness.text(`Sleepiness: ${this.sleepiness}`)
             if(this.sleepiness === 10){
                 clearInterval(int);
              }
         },1500) 
                 
    },
    setBoredom() {
        const $boredom = $('#boredom')
    
       const int = setInterval(() => {
        this.boredom++
        $boredom.text(`Boredom: ${this.boredom}`)
            if(this.boredom === 10){
                clearInterval(int);
             }
        },2000) 
            
            
    },
    setLevel (){
        const $level = $('#level')
        const int = setInterval(() => {
            this.level++
            $level.text(`Level: ${this.level}`)
                if(this.level === 1000){
                    clearInterval(int);
                 }
            },2000)

    },
    
        
}
console.log(game)
const rick = new Tomagotchi('rick');
console.log(rick, 'rick')


    
