// ==========================
// HAPPY BIRTHDAY SHONA ❤️
// Part 1
// ==========================

const countdown = document.getElementById("countdown");
const countdownSection = document.getElementById("countdownSection");
const birthdaySection = document.getElementById("birthdaySection");
const loveLetter = document.getElementById("loveLetter");
const loveButton = document.getElementById("loveButton");

const gallery = document.getElementById("gallery");
const song = document.getElementById("song");
const cake = document.getElementById("cakeSection");

let seconds = 10;

// -------------------------
// Countdown
// -------------------------

const timer = setInterval(() => {

    countdown.innerHTML = seconds;

    seconds--;

    if (seconds < 0) {

        clearInterval(timer);

        countdownSection.style.display = "none";

        birthdaySection.style.display = "block";

        gallery.style.display = "block";

        cake.style.display = "block";

        song.style.display = "block";

        startHearts();

        startPetals();

        createStars();

        launchFireworks();

    }

},1000);

// -------------------------
// Love Letter
// -------------------------

loveButton.addEventListener("click",()=>{

    loveLetter.style.display="block";

    loveLetter.scrollIntoView({

        behavior:"smooth"

    });

});

// -------------------------
// Blow Candle
// -------------------------

document
.getElementById("blowCandles")
.addEventListener("click",()=>{

    document.querySelector(".flame").style.display="none";

    alert("🎉 Happy Birthday My Shona ❤️");

});

// -------------------------
// Floating Hearts
// -------------------------

function startHearts(){

setInterval(()=>{

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=Math.random()>0.5?"❤️":"💕";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=
20+Math.random()*30+"px";

heart.style.animationDuration=
5+Math.random()*4+"s";

document
.getElementById("hearts")
.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

},180);

}

// -------------------------
// Rose Petals
// -------------------------

function startPetals(){

setInterval(()=>{

let petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌹";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=
6+Math.random()*5+"s";

document
.getElementById("petals")
.appendChild(petal);

setTimeout(()=>{

petal.remove();

},11000);

},500);

}

// -------------------------
// Stars
// -------------------------

function createStars(){

const sky=document.getElementById("stars");

for(let i=0;i<150;i++){

let star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=
Math.random()*2+"s";

sky.appendChild(star);

}

}
// ===============================
// FIREWORKS EFFECT
// ===============================

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let particles = [];

function createFirework(x, y) {

    for (let i = 0; i < 80; i++) {

        particles.push({

            x: x,
            y: y,

            dx: (Math.random() - 0.5) * 10,
            dy: (Math.random() - 0.5) * 10,

            life: 100,

            color:
                `hsl(${Math.random()*360},100%,60%)`

        });

    }

}

function animateFireworks(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach((p,index)=>{

        p.x += p.dx;
        p.y += p.dy;

        p.life--;

        ctx.beginPath();

        ctx.arc(p.x,p.y,3,0,Math.PI*2);

        ctx.fillStyle=p.color;

        ctx.fill();

        if(p.life<=0){

            particles.splice(index,1);

        }

    });

    requestAnimationFrame(animateFireworks);

}

animateFireworks();

function launchFireworks(){

    setInterval(()=>{

        createFirework(

            Math.random()*canvas.width,

            Math.random()*canvas.height/2

        );

    },700);

}

// ===============================
// PHOTO GLOW EFFECT
// ===============================

const photo = document.querySelector("#gallery img");

setInterval(()=>{

    photo.style.boxShadow =
    `0 0 ${
        30 + Math.random()*20
    }px hotpink`;

},800);

// ===============================
// TYPEWRITER EFFECT
// ===============================

const heading =
document.querySelector("#birthdaySection h1");

const originalText = heading.innerHTML;

heading.innerHTML="";

let index=0;

function typeWriter(){

    if(index < originalText.length){

        heading.innerHTML += originalText.charAt(index);

        index++;

        setTimeout(typeWriter,80);

    }

}

setTimeout(typeWriter,12000);

// ===============================
// SPARKLES
// ===============================

setInterval(()=>{

    const sparkle=document.createElement("div");

    sparkle.innerHTML="✨";

    sparkle.style.position="fixed";

    sparkle.style.left=Math.random()*100+"vw";

    sparkle.style.top=Math.random()*100+"vh";

    sparkle.style.fontSize=
        (15+Math.random()*20)+"px";

    sparkle.style.opacity="0.9";

    sparkle.style.pointerEvents="none";

    sparkle.style.transition="all 2s linear";

    document.body.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.style.opacity=0;
        sparkle.style.transform="translateY(-40px)";

    },100);

    setTimeout(()=>{

        sparkle.remove();

    },2200);

},300);

// ===============================
// FINAL MESSAGE
// ===============================

console.log("❤️ Happy Birthday Shona ❤️");

// ===============================
// PLAY OUR SONG
// ===============================

const playSongBtn = document.getElementById("playSongBtn");

playSongBtn.addEventListener("click", () => {
    window.open(
        "https://www.youtube.com/watch?v=IsaOXzb4Uh0",
        "_blank"
    );
});