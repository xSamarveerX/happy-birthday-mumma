document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("surpriseBtn");
  const music = document.getElementById("bgMusic");

  let heartInterval;

  function createHeart() {
    const heart = document.createElement("div");
    heart.innerText = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.animation = "floatUp 4s linear forwards";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);
  }

  // Add animation style dynamically (no CSS needed)
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes floatUp {
      from {
        transform: translateY(0);
        opacity: 1;
      }
      to {
        transform: translateY(-110vh);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  btn.addEventListener("click", () => {
    alert("🎉 Surprise Mumma!! Happy Birthday 💖");

    // Change background
    document.body.style.background =
      "linear-gradient(135deg, #ff9a9e, #fad0c4)";

    // Change text
    document.querySelector("h1").innerText = "💖 Happy Birthday Mumma 💖";
    document.querySelector("p").innerText =
      "You are the best mom in the world 🌸 Love you forever ❤️";

    // Play music
    if (music) {
      music.play().catch(() => {});
    }

    // Prevent multiple intervals
    if (!heartInterval) {
      heartInterval = setInterval(createHeart, 200);
    }

    // Stop hearts after some time (optional safety)
    setTimeout(() => {
      clearInterval(heartInterval);
    }, 15000);
  });
});
