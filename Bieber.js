// Check if the user is ready to play!
confirm("I am ready to play!")
var age = prompt("What's your age");
if(age<13){
    console.log("play are your own risk")
}
else
{
    console.log("Have fun!")
}
console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'")

console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'")

var userAnswer = prompt("Do you want to race Bieber on stage?")
if(userAnswer === "yes"){
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!")
}
else
{
    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'")
}

var feedback = prompt("on a scale of 1 to 10 please rate game")

if(feedback > 8){
    console.log("Thank you! We should race at the next concert!")
}
else
{
    console.log("I'll keep practicing coding and racing.")
}
