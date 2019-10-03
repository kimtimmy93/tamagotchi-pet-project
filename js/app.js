$('#hunger').hide();
$('#boredom').hide();
$('#sleepiness').hide();
$('#level').hide();
$('#gameTimer').hide();
$('#name').hide();
$('#rick1').hide();

$('#start').on('click', () => {
    console.log('button works')
    game.setSleepiness();
    game.setBoredom();
    game.setHunger();
    game.setGameTimer();
    game.setLevel();

    const name = prompt("Enter your RickName!", "Your RickName here")
    const rick = new Tomagotchi(name);
    rick.setName();

    $('#hunger').show();
    $('#boredom').show();
    $('#sleepiness').show();
    $('#level').show();
    $('#gameTimer').show();
    $('#name').show();
    $('#rick1').show();
  });

//   $('#reset').on('click', () => {

//   });

$('#feed').on('click', () => {
    if(game.hunger > 0){
        game.hunger--
        $('#hunger').text(`Hunger: ${game.hunger}`)
    } 
});
$('#play').on('click', () => {
    if(game.boredom > 0){
        game.boredom--
        $('#boredom').text(`Boredom: ${game.boredom}`)
    } 
});
$('#lights').on('click', () => {
    if(game.sleepiness > 0){
        game.sleepiness--
        $('#sleepiness').text(`Sleepiness: ${game.sleepiness}`)
    } 
});
$('button').click(function() { 
    $('#feed').off('click');
    $('#play').off('click');
    $('#lights').off('click');
});


class Tomagotchi {
    constructor (name) {
        this.name = name;
    }
    setName () {
        const $name = $('#name')
        // $name.val(this.name);
        $name.text(`RickName: ${this.name}`)
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
            $('#rick1').attr('src', 'go.gif')
            $('#rick1').attr('id', 'gameover')
        } else if(this.hunger === 10) {
            $('#rick1').attr('src', 'ricktomb.png')
            $('#rick1').attr('id','deadrick')
            $('#rick2').attr('src', 'ricktomb.png')
            $('#rick2').attr('id','deadrick')
            $('#rick3').attr('src', 'ricktomb.png')
            $('#rick3').attr('id','deadrick')
            clearInterval(interval); 
        } else if(this.sleepiness === 10){
            $('#rick1').attr('src', 'ricktomb.png')
            $('#rick1').attr('id','deadrick')
            $('#rick2').attr('src', 'ricktomb.png')
            $('#rick2').attr('id','deadrick')
            $('#rick3').attr('src', 'ricktomb.png')
            $('#rick3').attr('id','deadrick')
            clearInterval(interval); 
        } else if(this.boredom === 10){
            $('#rick1').attr('src', 'ricktomb.png')
            $('#rick1').attr('id','deadrick')
            $('#rick2').attr('src', 'ricktomb.png')
            $('#rick2').attr('id','deadrick')
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
             } else if(this.gameTimer === 0) {
                clearInterval(int);
             }
        },Math.floor(Math.random()*(5000 - 1000 + 1) + 1000))   
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
              } else if(this.gameTimer === 0) {
                clearInterval(int);
             }
         },Math.floor(Math.random()*(5000 - 1000 + 1) + 1000));          
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
             } else if(this.gameTimer === 0) {
                clearInterval(int);
             }
        },Math.floor(Math.random()*(5000 - 1000 + 1) + 1000))         
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
                    alert(`Your Rick has died :(`)
                 } else if(this.boredom === 10){
                    clearInterval(int);
                    alert(`Your Rick has died :(`)
                 } else if(this.sleepiness === 10){
                    clearInterval(int);
                    alert(`Your Rick has died :(`)
                 } else if(this.gameTimer === 0){
                     clearInterval(int);
                 } else if(this.level < 5){
                    $('#rick1').attr('src', 'https://i.redd.it/93d8smnl64qx.gif')
                 } else if(this.level === 5){
                    $('#rick1').attr('src', 'https://media.giphy.com/media/5wFHChzgBtfANDa76U/giphy.gif')
                    $('#rick1').attr('id', 'rick2')
                 } else if(this.level === 10){
                    $('#rick2').attr('src', 'picklerick.gif')
                    $('#rick2').attr('id', 'rick3')
                 } else if(this.gameTimer === 0) {
                    clearInterval(int);
                 }
            },3000)
    }
}
console.log(game)


// deactivate buttons once pet dies
// once pet dies, start over after alert
// deactivate everything when timer hits 0





    
