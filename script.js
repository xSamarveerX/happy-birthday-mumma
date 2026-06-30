/* Button click surprise */

function showSurprise() {
  alert("🎉 Surprise!! Happy Birthday 🎂💖 Hope you have an amazing day!");

  // Extra fun effect: change background after click
  document.body.style.background =
    "linear-gradient(135deg, #a18cd1, #fbc2eb)";

  // Change text after click
  document.querySelector("h1").innerText = "🎉 Surprise Unlocked!";
  document.querySelector("p").innerText =
    "Wishing you endless happiness and joy 💖";
}
