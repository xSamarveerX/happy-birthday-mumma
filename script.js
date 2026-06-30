html, body {
  width: 100%;
  overflow-x: hidden;
}
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("surpriseBtn");
  const music = document.getElementById("bgMusic");

  let heartInterval;
  let balloonInterval;

  // ===== CONFETTI (load-safe) =====
  function shootConfetti() {
    if (window.confetti) {
      confetti({
        particleCount: 180,
        spread: 100,
        origin: { y: 0.6 }
      });
    }
  }

  // ===== HEARTS =====
  function createHeart() {
    const heart = document.createElement("div");
    heart.innerText = "💖";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = Math.random() * 20 + 12 + "px";
    heart.style.pointerEvents = "none";
    heart.style.opacity = "0.8";

    document.body.appendChild(heart);

    let move = setInterval(() => {
      let top = parseFloat(heart.style.top);
      heart.style.top = top - 2 + "px";

      if (top < -50) {
        clearInterval(move);
        heart.remove();
      }
    }, 16);
  }

  // ===== BALLOONS =====
  function createBalloon() {
    const balloon = document.createElement("div");
    balloon.innerText = "🎈";

    balloon.style.position = "fixed";
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.bottom = "-50px";
    balloon.style.fontSize = "30px";
    balloon.style.pointerEvents = "none";

    document.body.appendChild(balloon);

    setTimeout(() => {
      balloon.style.transition = "transform 6s linear";
      balloon.style.transform = "translateY(-120vh)";
    }, 100);

    setTimeout(() => {
      balloon.remove();
    }, 7000);
  }

  // ===== CLICK EVENT =====
  btn.addEventListener("click", () => {

    alert("🎉 Surprise Mumma!! Happy Birthday 💖");

    // background change
    document.body.style.background =
      "linear-gradient(135deg, #ff9a9e, #fad0c4)";

    // text change
    const h1 = document.querySelector("h1");
    const p = document.querySelector("p");

    if (h1) h1.innerText = "💖 Happy Birthday Mumma 💖";
    if (p) p.innerText = "You are the best mom in the world 🌸 Love you forever ❤️";

    // music
    if (music) {
      music.play().catch(() => {});
    }

    // confetti burst
    shootConfetti();
    setTimeout(shootConfetti, 800);

    // hearts (continuous)
    if (!heartInterval) {
      heartInterval = setInterval(createHeart, 250);
    }

    // balloons (continuous)
    if (!balloonInterval) {
      balloonInterval = setInterval(createBalloon, 900);
    }

    // auto stop effects after 20 sec (clean finish)
    setTimeout(() => {
      clearInterval(heartInterval);
      clearInterval(balloonInterval);
    }, 20000);

  });

});
@media only screen and (max-width: 768px) {

  /* General spacing fix */
  body {
    overflow-x: hidden;
  }

  /* HERO SECTION */
  .hero-content {
    padding: 20px;
    text-align: center;
  }

  .hero h1 {
    font-size: 1.8rem;
    line-height: 2.2rem;
  }

  .hero h3 {
    font-size: 1rem;
  }

  .hero p {
    font-size: 0.9rem;
  }

  /* BUTTONS */
  button, a {
    font-size: 0.9rem;
    padding: 10px 16px;
  }

  /* SECTIONS */
  section {
    padding: 40px 15px;
    text-align: center;
  }

  /* MEMORY GRID */
  .gallery {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .card img {
    width: 100%;
    height: auto;
    border-radius: 12px;
  }

  /* LETTER BOX */
  .letter-box {
    padding: 15px;
    font-size: 0.9rem;
    line-height: 1.5rem;
  }

  /* CAKE */
  .cake {
    font-size: 3rem;
  }

  /* ENDING TEXT */
  #ending h1 {
    font-size: 1.6rem;
  }

  #ending h2 {
    font-size: 1.2rem;
  }

  /* MUSIC + GIFT spacing */
  #music, #gift {
    padding: 30px 15px;
  }
}
