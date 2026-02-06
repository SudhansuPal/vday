const PASSWORD = "Clavicle";

// 🔒 Password check
function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const error = document.getElementById("errorMsg");

  if (input === PASSWORD) {
    document.getElementById("loginCard").classList.add("hidden");
    document.getElementById("mainCard").classList.remove("hidden");
    startCounter();
  } else {
    error.textContent = "Wrong password 😛";
  }
}

function goYes() {
  window.location.href = "yay.html";
}

function doNothing() {
  // intentionally does nothing 😌
}


// 🎵 Music (iOS requires user interaction)
function playMusic() {
  const music = document.getElementById("bgMusic");
  music.play();
}

// ⏳ Relationship counter
function startCounter() {
  // CHANGE THIS DATE 👇 (YYYY, MM-1, DD)
  const startDate = new Date(2023, 5, 1);

  setInterval(() => {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    document.getElementById("counter").textContent =
      `We’ve been together for ${days} days, ${hours} hours, and ${minutes} minutes 💕`;
  }, 1000);
}

function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 2 + Math.random() * 3 + "s";
    heart.style.fontSize = 14 + Math.random() * 20 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }, 300);
}

