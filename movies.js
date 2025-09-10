// Movies data and functionality
const movies = [
  {
    title: "Scream",
    poster: "Scream.jpg",
  },
  {
    title: "Terrifier",
    poster: "Terrifier.jpg",
  },
  {
    title: "Jennifer's Body",
    poster: "Jennifer.jpg",
  },
  {
    title: "Final Destination 5",
    poster: "Final.jpg",
  },
  {
    title: "Conjuring",
    poster: "Conjuring.jpg",
  },
  {
    title: "Insidious",
    poster: "Insidious.jpg",
  },
  {
    title: "World War Z",
    poster: "World.jpg",
  },
  {
    title: "Resident Evil",
    poster: "Residentt.jpg",
  },
  {
    title: "Twilight",
    poster: "Twilight.jpg",
  },
  {
    title: "Harry Potter",
    poster: "Harry.jpg",
  },
  {
    title: "Avengers",
    poster: "Avengers.jpg",
  },
  {
    title: "2 Fast 2 Furious",
    poster: "Fast.jpg",
  },
  {
    title: "Dead Poets Society",
    poster: "Poets.jpg",
  },
  {
    title: "Mean Girls",
    poster: "Mean.jpg",
  },
  {
    title: "Bride Wars",
    poster: "Bride.jpg",
  },
  {
    title: "Clueless",
    poster: "Clueless.jpg",
  },
  {
    title: "13 Going On 30",
    poster: "Going.jpg",
  },
  {
    title: "How to Lose a Guy in 10 Days",
    poster: "Lose.jpg",
  },
  {
    title: "Notting Hill",
    poster: "Notting.jpg",
  },
  {
    title: "White Chicks",
    poster: "Chicks.jpg",
  },
  {
    title: "16 Wishes",
    poster: "Wishes.jpg",
  },
  {
    title: "Friends with Benefits",
    poster: "Fwb.jpg",
  },
  {
    title: "Not Another Teen Movie",
    poster: "Teen.jpg",
  },
  {
    title: "The Devils Wear Prada",
    poster: "Prada.jpg",
  },
  {
    title: "Spy Kids",
    poster: "Spy.jpg",
  },
  {
    title: "Home Alone",
    poster: "Alone.jpg",
  },
  {
    title: "Baby's Day Out",
    poster: "Baby.jpg",
  },
  {
    title: "Zathura",
    poster: "Zathura.jpg",
  },
  {
    title: "101 Dalmations",
    poster: "Damations.jpg",
  },
  {
    title: "Rio",
    poster: "Rio.jpg",
  },
  {
    title: "Up",
    poster: "Up.jpg",
  },
  {
    title: "Toy Story",
    poster: "Toy.jpg",
  },
  {
    title: "Nemo",
    poster: "Nemo.jpg",
  },
  {
    title: "Cars",
    poster: "Cars.jpg",
  },
  {
    title: "Bad Genius",
    poster: "BadGenius.jpg",
  },
  {
    title: "The Paradise of Thorns",
    poster: "Paradise.jpg",
  },
];

// Render movies grid
function renderMovies() {
  const moviesGrid = document.getElementById("movies-grid");
  if (!moviesGrid) return;

  moviesGrid.innerHTML = "";

  movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.className = "poster-card";

    movieCard.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}" loading="lazy">
    `;

    moviesGrid.appendChild(movieCard);
  });
}

// Initialize movies page
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("movies-grid")) {
    renderMovies();
  }
});
