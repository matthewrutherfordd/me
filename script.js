// Global JavaScript functionality
document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation toggle
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

  // Background Music persistence
  const backgroundMusic = document.getElementById("background-music");
  const musicToggle = document.getElementById("music-toggle");

  if (backgroundMusic) {
    let isPlaying = false;

    // Load waktu terakhir
    const savedTime = localStorage.getItem("musicTime");
    if (savedTime) {
      backgroundMusic.currentTime = parseFloat(savedTime);
    }

    // Load status terakhir
    const savedState = localStorage.getItem("musicState");
    if (savedState === "playing") {
      backgroundMusic.muted = false;
      backgroundMusic.volume = 0.3;
      backgroundMusic
        .play()
        .then(() => {
          isPlaying = true;
          musicToggle?.classList.add("playing");
        })
        .catch(() => {
          console.log("Autoplay diblokir, tunggu interaksi user...");
        });
    }

    function enableMusic() {
      if (!isPlaying) {
        backgroundMusic.muted = false;
        backgroundMusic.volume = 0.3;
        backgroundMusic.play().then(() => {
          isPlaying = true;
          localStorage.setItem("musicState", "playing");
          musicToggle?.classList.add("playing");
        });
      }
    }

    // Interaksi user → auto enable
    document.addEventListener("click", enableMusic, { once: true });
    document.addEventListener("scroll", enableMusic, { once: true });
    document.addEventListener("mousemove", enableMusic, { once: true });

    // Simpan waktu musik tiap detik
    setInterval(() => {
      if (isPlaying) {
        localStorage.setItem("musicTime", backgroundMusic.currentTime);
      }
    }, 1000);

    // Tombol toggle manual
    musicToggle?.addEventListener("click", () => {
      if (isPlaying) {
        backgroundMusic.pause();
        localStorage.setItem("musicState", "paused");
        musicToggle.classList.remove("playing");
        isPlaying = false;
      } else {
        backgroundMusic.play().then(() => {
          localStorage.setItem("musicState", "playing");
          musicToggle.classList.add("playing");
          isPlaying = true;
        });
      }
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Add scroll effect to navbar
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        navbar.style.background = "rgba(10, 10, 10, 0.98)";
      } else {
        navbar.style.background = "rgba(10, 10, 10, 0.95)";
      }
    });
  }

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  document.querySelectorAll(".card, .stat-item, .nav-card").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});

// Utility functions
function openSpotify(url, artistName) {
  window.open(url, "_blank", "noopener,noreferrer");
}

function createImageElement(src, alt, className = "") {
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  img.className = className;
  img.loading = "lazy";

  img.onerror = function () {
    this.src =
      "https://via.placeholder.com/300x300/1e1e1e/666666?text=" +
      encodeURIComponent(alt);
  };

  return img;
}

function showLoading(element) {
  element.classList.add("loading");
}
function hideLoading(element) {
  element.classList.remove("loading");
}
