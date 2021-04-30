const setup = document.getElementById("setup");
const punchline = document.getElementById("punchline");

const punchlineBtn = document.getElementById("punchline-btn");
const newJokeBtn = document.getElementById("new-joke-btn");
const lolBtn = document.getElementById("lol-btn");
const jokeBtn = document.getElementById("joke-btn");
const returnBtn = document.querySelector(".return");

const instruction = document.querySelector(".instruction");
const rooms = document.querySelector(".rooms");
const singleRoom = document.querySelector(".single-room");
const tellJoke = document.getElementById("tell-joke");
const iDontKnow = document.getElementById("i-dont-know");
const lol = document.getElementById("lol");
const newJoke = document.getElementById("new-joke");
const enterRoom  = document.getElementById("room-one");

let punchline_joke;

jokeBtn.addEventListener("click", getJoke);
punchlineBtn.addEventListener("click", getPunchline);
newJokeBtn.addEventListener("click", getJoke);
lolBtn.addEventListener("click", getLol);
returnBtn.addEventListener("click", returnFrontPage);
enterRoom.addEventListener("click", enterRooms);


async function getJoke() {
    const jokePromise = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');
    const joke = await jokePromise.json();
    setup.textContent = joke[0].setup;

    console.log(joke);

    instruction.style.display = "none"
    setup.style.display = "none"
    iDontKnow.style.display = "none";
    punchline.style.display = "none";
    lol.style.display = "none";
    jokeBtn.style.display = "none";
    lolBtn.style.display = "none";
    punchlineBtn.style.display = "block";
    
    tellJoke.style.display = "block";
    punchline_joke = joke[0].punchline;

    setTimeout(() => setup.style.display = "block", 1000);
}

function getPunchline(){
    iDontKnow.style.display = "block";
    setTimeout(() => punchline.style.display = "block", 1000);

    lolBtn.style.display = "block";
    jokeBtn.style.display = "block";

    punchline.textContent = punchline_joke;
    punchlineBtn.style.display = "none";
}

function getLol(){
    lol.style.display= "block";
}

function returnFrontPage(){
    singleRoom.style.display = "none";
    rooms.style.display = "block";
} 

function enterRooms(){
    singleRoom.style.display = "block";
}