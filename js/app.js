$('#start').on('click', () => {
    console.log('button works')
    game.setSleepiness();
    game.setBoredom();
    game.setHunger();
    game.setGameTimer();
    game.setLevel();
    // Tomagotchi.setName();

    const name = prompt("Enter your pet's name!", "Your pet name here")

  });

$('#feed').on('click', () => {
    game.hunger--
    $('#hunger').text(`Hunger: ${game.hunger}`)
});
$('#play').on('click', () => {
    game.boredom--
    $('#boredom').text(`Boredom: ${game.boredom}`)
});
$('#lights').on('click', () => {
    game.sleepiness--
    $('#sleepiness').text(`Sleepiness: ${game.sleepiness}`)
});


class Tomagotchi {
    constructor (name) {
        this.name = name;
    }
    setName () {
        const $name = $('#name')
        // $name.val(this.name);
        $name.text(`Name: ${this.name}`)
        }
}
console.log(Tomagotchi); 


const game = {
gameTimer: 59,
hunger: 0,
sleepiness: 0,
boredom: 0,
level: 0,
setGameTimer () {
    const $gameTimer = $('#gameTimer')

    const interval = setInterval(() => {
        
        if(this.gameTimer === 0){
            clearInterval(interval); //stops the interval
        } else if(this.hunger === 10) {
            console.log('rick dies')
            $('#rick3').attr('src', 'ricktomb.png')
            $('#rick3').attr('id','deadrick')
            clearInterval(interval); 
        } else if(this.sleepiness === 10){
            console.log('rick dies')
            $('#rick3').attr('src', 'ricktomb.png')
            $('#rick3').attr('id','deadrick')
            clearInterval(interval); 
        } else if(this.boredom === 10){
            console.log('rick dies')
            $('#rick3').attr('src', 'ricktomb.png')
            $('#rick3').attr('id','deadrick')
            clearInterval(interval); 
        } else {
            this.gameTimer--
        }
        $gameTimer.text(`Timer: ${this.gameTimer}s`)

        }, 1000) 
    },
    setHunger() {
        const $hunger = $('#hunger')
    
       const int = setInterval(() => {
        this.hunger++
        $hunger.text(`Hunger: ${this.hunger}`)
            if(this.hunger === 10){
                clearInterval(int);
             } else if(this.boredom === 10){ 
                clearInterval(int);
             } else if(this.sleepiness === 10){
                clearInterval(int);
             }
        },3000)   
    },
    setSleepiness() {
        const $sleepiness = $('#sleepiness')
    
        const int = setInterval(() => {
         this.sleepiness++
         $sleepiness.text(`Sleepiness: ${this.sleepiness}`)
             if(this.sleepiness === 10){
                 clearInterval(int);
              } else if(this.hunger === 10) {
                clearInterval(int);
              } else if(this.boredom === 10) {
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
             } else if(this.hunger === 10){
                clearInterval(int);
             } else if(this.sleepiness === 10){
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
                 } else if(this.hunger === 10){
                    clearInterval(int);
                 } else if(this.boredom === 10){
                    clearInterval(int);
                 } else if(this.sleepiness === 10){
                    clearInterval(int);
                 } else if(this.gameTimer === 0){
                     clearInterval(int);
                 } else if(this.level < 2){
                    $('#rick1').attr('src', 'https://i.redd.it/93d8smnl64qx.gif')
                 } else if(this.level === 2){
                    $('#rick1').attr('src', 'https://media.giphy.com/media/5wFHChzgBtfANDa76U/giphy.gif')
                    $('#rick1').attr('id', 'rick2')
                 } else if(this.level === 3){
                    $('#rick2').attr('src', 'picklerick.gif')
                    $('#rick2').attr('id', 'rick3')
                 }
            },2000)

    }
    
        
}
console.log(game)
// const rick = new Tomagotchi('rick');
// console.log(rick, 'rick')



    
