// Artists data and functionality
const artists = [
  {
    name: "Taylor Swift",
    image: "tloasg.jpg",
    spotifyUrl:
      "https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02?si=0Yk0sTkCQdWbdgD7Il2Ukw",
  },
  {
    name: "Lana Del Rey",
    image: "lana.jpg",
    spotifyUrl:
      "https://open.spotify.com/artist/00FQb4jTyendYWaN8pK0wa?si=dburJiRtTkG2WJFG_THMAQ",
  },
  {
    name: "Daniel Caesar",
    image: "daniel.jpg",
    spotifyUrl:
      "https://open.spotify.com/artist/20wkVLutqVOYrc0kxFs7rA?si=7cIbtlP-RL2WnvH95hv9rQ",
  },
  {
    name: "NIKI",
    image: "niki.jpg",
    spotifyUrl:
      "https://open.spotify.com/artist/2kxP07DLgs4xlWz8YHlvfh?si=XovdDRI8Sfy8peLdZZie9A",
  },
  {
    name: "Arctic Monkeys",
    image: "arctic.jpg",
    spotifyUrl:
      "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH?si=R3_jGhtFTxevDv7E00zUyA",
  },
  {
    name: "The Weeknd",
    image: "abel.jpg",
    spotifyUrl:
      "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ?si=if7tgMnnQPWgcYnau_YbXA",
  },
  {
    name: "Gracie Abrams",
    image: "gracie.jpg",
    spotifyUrl:
      "https://open.spotify.com/artist/4tuJ0bMpJh08umKkEXKUI5?si=oPYe0dJNTV6AKn6L6UDJhg",
  },
  {
    name: "Teddy Adhitya",
    image: "teddy.jpg",
    spotifyUrl:
      "https://open.spotify.com/artist/7dOswEYzOtTMECumrZ3NHY?si=BRZYTmTVR1-33vx4nJc9bg",
  },
  {
    name: "Juicy Luicy",
    image: "juicy.jpg",
    spotifyUrl:
      "https://open.spotify.com/artist/3tMTXQyRrPmMyHv5SoC0TV?si=2XSeIg5ORa2I6uH52zEwxQ",
  },
  {
    name: "Sabrina Carpenter",
    image: "sabrina.jpg",
    spotifyUrl:
      "https://open.spotify.com/artist/74KM79TiuVKeVCqs8QtB0B?si=wY9wRWceQR6Byupz66kdGA",
  },
  {
    name: "wave to earth",
    image: "w2e.jpg",
    spotifyUrl:
      "https://open.spotify.com/artist/5069JTmv5ZDyPeZaCCXiCg?si=mFHMOiwmRoyUnIVGnwW1uA",
  },
  {
    name: "Luke Chiang",
    image: "luke.jpg",
    spotifyUrl:
      "https://open.spotify.com/artist/1dPSMH55yhvjYIwqCP4iDj?si=oR8pEH0NRLWiHshVEc_AlQ",
  },
  {
    name: "Olivia Rodrigo",
    image: "olivia.jpg",
    spotifyUrl:
      "https://open.spotify.com/artist/1McMsnEElThX1knmY4oliG?si=TG3n2DvNQbCwSVaet3xsHA",
  },
  {
    name: "Payung Teduh",
    image: "payung.jpg",
    spotifyUrl:
      "https://open.spotify.com/artist/2Ooa3TrmlskyBftzenv6xQ?si=pFkW_Fu7T6KNj8yejboPeg",
  },
  {
    name: "Ariana Grande",
    image: "ariana.jpg",
    spotifyUrl:
      "https://open.spotify.com/artist/66CXWjxzNUsdJxJ2JdwvnR?si=2DcFSm1IT2WxwoWvvsl3wg",
  },
];

// Function to open Spotify
function openSpotify(url, name) {
  window.open(url, "_blank");
  console.log(`Opening Spotify for ${name}`);
}

// Render artists grid
function renderArtists() {
  const artistsGrid = document.getElementById("artists-grid");
  if (!artistsGrid) return;

  artistsGrid.innerHTML = "";

  artists.forEach((artist) => {
    const artistCard = document.createElement("div");
    artistCard.className = "artist-card";
    artistCard.onclick = () => openSpotify(artist.spotifyUrl, artist.name);

    artistCard.innerHTML = `
            <div class="card-image">
                <img src="${artist.image}" alt="${artist.name}" loading="lazy">
                <div class="card-overlay">
                    <div class="card-overlay-content">
                        <i class="fas fa-play"></i>
                        <div>Listen on Spotify</div>
                    </div>
                </div>
            </div>
            <div class="card-content">
                <h3>${artist.name}</h3>
            </div>
        `;

    artistsGrid.appendChild(artistCard);
  });
}

// Initialize artists page
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("artists-grid")) {
    renderArtists();
  }
});
