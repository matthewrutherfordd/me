// TV Series data and functionality
const series = [
  {
    title: "The Vampire Diaries",
    poster: "tvd.jpg",
  },
  {
    title: "Pretty Little Liars",
    poster: "pll.jpg",
  },
  {
    title: "Teen Wolf",
    poster: "tw.jpg",
  },
  {
    title: "From",
    poster: "from.jpg",
  },
  {
    title: "The Walking Dead",
    poster: "twd.jpg",
  },
  {
    title: "Z Nation",
    poster: "zn.jpg",
  },
  {
    title: "The Last of Us",
    poster: "tlou.jpg",
  },
  {
    title: "All of Us Are Dead",
    poster: "aouad.jpg",
  },
  {
    title: "Weak Hero",
    poster: "weak.jpg",
  },
  {
    title: "Light Shop",
    poster: "light.jpg",
  },
  {
    title: "Study Group",
    poster: "study.jpg",
  },
  {
    title: "Moving",
    poster: "moving.jpg",
  },
  {
    title: "Hotel Del Luna",
    poster: "hotel.jpg",
  },
  {
    title: "While You Were Sleeping",
    poster: "while.jpg",
  },
  {
    title: "Goblin",
    poster: "goblin.jpg",
  },
  {
    title: "Resident Playbook",
    poster: "resident.jpg",
  },
  {
    title: "Gossip Girl",
    poster: "gg.jpg",
  },
  {
    title: "Girl from Nowhere",
    poster: "girl.jpg",
  },
  {
    title: "Gossip Girl",
    poster: "gossip.jpg",
  },
  {
    title: "The Summer I Turned Pretty",
    poster: "tsitp.jpg",
  },
  {
    title: "Kakegurui",
    poster: "kakegurui.jpg",
  },
  {
    title: "Alice In Borderland",
    poster: "aib.jpg",
  },
  {
    title: "The Gifted",
    poster: "gifted.jpg",
  },
  {
    title: "Pyramid Game",
    poster: "piramid.jpg",
  },
  {
    title: "Bitch x Rich ",
    poster: "bitch.jpg",
  },
  {
    title: "Dark Blue Kiss",
    poster: "dbk.jpg",
  },
  {
    title: "Love by Chance",
    poster: "love.jpg",
  },
  {
    title: "TharnType",
    poster: "tt.jpg",
  },
];

// Render series grid
function renderSeries() {
  const seriesGrid = document.getElementById("series-grid");
  if (!seriesGrid) return;

  seriesGrid.innerHTML = "";

  series.forEach((show) => {
    const seriesCard = document.createElement("div");
    seriesCard.className = "poster-card";

    seriesCard.innerHTML = `
      <img src="${show.poster}" alt="${show.title}" loading="lazy">
    `;

    seriesGrid.appendChild(seriesCard);
  });
}

// Initialize series page
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("series-grid")) {
    renderSeries();
  }
});
