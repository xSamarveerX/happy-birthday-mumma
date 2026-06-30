document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("surpriseBtn");

  btn.addEventListener("click", () => {
    alert("🎉 Surprise Mumma!! Happy Birthday 💖");

    document.body.style.background =
      "linear-gradient(135deg, #ff9a9e, #fad0c4)";

    document.querySelector("h1").innerText = "💖 Happy Birthday Mumma 💖";
    document.querySelector("p").innerText =
      "You are the best mom in the world 🌸 Love you forever ❤️";
  });
});
