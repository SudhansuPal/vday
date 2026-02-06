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
    const startDate = new Date("2025-10-31"); // YYYY-MM-DD
    const today = new Date();

    // Calculate difference in milliseconds
    const diffTime = today - startDate;

    // Convert to days
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    counterEl.textContent = `We’ve been together for ${diffDays} days 💖`;
  }

  updateCounter(); // Run once immediately
  setInterval(updateCounter, 1000 * 60 * 60); // Optional: update hourly
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

