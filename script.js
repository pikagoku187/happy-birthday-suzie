// ===============================
// MUSIC SYSTEM
// ===============================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

// volume

music.volume = 0.4;

// autoplay after first interaction

function startMusic() {

    music.play()
        .then(() => {

            console.log("Music started");

            musicBtn.innerHTML = "⏸ Pause Music";

        })
        .catch((err) => {

            console.log(err);

        });

}

// mobile + desktop

document.addEventListener("click", startMusic, { once: true });

document.addEventListener("touchstart", startMusic, { once: true });


// manual button

musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        musicBtn.innerHTML = "⏸ Pause Music";

    } else {

        music.pause();

        musicBtn.innerHTML = "🎵 Play Music";

    }

});


// force loop

music.addEventListener("ended", () => {

    music.currentTime = 0;

    music.play();

});
