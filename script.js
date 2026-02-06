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
  const counterEl = document.getElementById("counter");

  function updateCounter() {
    // Set your anniversary date
    const startDate = new Date("2025-10-31T00:00:00"); // YYYY-MM-DD format
    const now = new Date();

    const diffMs = now - startDate; // difference in milliseconds

    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
    const diffMinutes = Math.floor((diffMs / (1000 * 60)) % 60);

    counterEl.textContent = `We’ve been together for ${diffDays} days, ${diffHours} hours, and ${diffMinutes} minutes 💕`;
  }

  updateCounter(); // run immediately
  setInterval(updateCounter, 60 * 1000); // update every minute
}

// Call this after showing the mainCard

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

