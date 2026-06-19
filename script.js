```javascript
// ===============================
// Loading Screen
// ===============================

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.display = "none";

    }, 6000);

});


// ===============================
// Typing Effect
// ===============================

const text = "A magical birthday surprise just for you...";
const typingElement = document.querySelector(".typing-text");

let i = 0;

function typingEffect() {

    if (i < text.length) {

        typingElement.innerHTML += text.charAt(i);

        i++;

        setTimeout(typingEffect, 80);

    }

}

typingEffect();


// ===============================
// Music System
// ===============================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");


// Auto play after first click

document.addEventListener("click", () => {

    music.play()
        .then(() => {

            console.log("Music started");

            musicBtn.innerHTML = "⏸ Pause Music";

        })
        .catch((err) => {

            console.log(err);

        });

}, { once: true });


// Manual play / pause button

musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        musicBtn.innerHTML = "⏸ Pause Music";

    } else {

        music.pause();

        musicBtn.innerHTML = "🎵 Play Music";

    }

});


// ===============================
// Floating Hearts
// ===============================

function createHeart(x, y) {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = x + "px";
    heart.style.top = y + "px";

    heart.style.fontSize = Math.random() * 25 + 20 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 4000);

}


// ===============================
// Fireworks Canvas
// ===============================

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];


// ===============================
// Particle Class
// ===============================

class Particle {

    constructor(x, y, color) {

        this.x = x;
        this.y = y;

        this.color = color;

        this.radius = 2 + Math.random() * 3;

        this.speedX = (Math.random() - 0.5) * 8;
        this.speedY = (Math.random() - 0.5) * 8;

        this.alpha = 1;

    }

    update() {

        this.x += this.speedX;
        this.y += this.speedY;

        this.alpha -= 0.01;

    }

    draw() {

        ctx.save();

        ctx.globalAlpha = this.alpha;

        ctx.beginPath();

        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

        ctx.fillStyle = this.color;

        ctx.fill();

        ctx.restore();

    }

}


// ===============================
// Create Firework
// ===============================

function createFirework(x, y) {

    const colors = [
        "#ffd700",
        "#ff4d6d",
        "#ffffff",
        "#ff99c8"
    ];

    for (let i = 0; i < 80; i++) {

        particles.push(

            new Particle(
                x,
                y,
                colors[Math.floor(Math.random() * colors.length)]
            )

        );

    }

}


// ===============================
// Animate Fireworks
// ===============================

function animateFireworks() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle, index) => {

        particle.update();

        particle.draw();

        if (particle.alpha <= 0) {

            particles.splice(index, 1);

        }

    });

    requestAnimationFrame(animateFireworks);

}

animateFireworks();


// ===============================
// Click Effects
// ===============================

document.addEventListener("click", (e) => {

    for (let i = 0; i < 12; i++) {

        createHeart(e.clientX, e.clientY);

    }

    createFirework(e.clientX, e.clientY);

});


// ===============================
// Auto Fireworks
// ===============================

setInterval(() => {

    createFirework(

        Math.random() * window.innerWidth,
        Math.random() * (window.innerHeight / 2)

    );

}, 1200);


// ===============================
// Resize Canvas
// ===============================

window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});
```
