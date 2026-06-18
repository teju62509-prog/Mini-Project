alert('JS is working');
let currentMovie = null;
const movieData = {

'Inception': {
    image: 'https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    desc: 'Inception follows a skilled thief who enters the dreams of others to steal secrets from their subconscious mind.\nHe is offered a chance to erase his criminal past by performing an impossible task called inception.\nThe mission involves planting an idea into someone’s mind without them realizing it.\nThis visually stunning film blends action, emotion, and complex storytelling.'
},

'Interstellar': {
    image: 'https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg',
    desc: 'Interstellar tells the story of a group of astronauts traveling through a wormhole in search of a new home for humanity.\nEarth is facing environmental collapse, forcing scientists to explore beyond our galaxy.\nThe film deeply explores themes of time, love, and sacrifice.\nIt is known for its emotional depth and scientifically accurate space visuals.'
},

'Avengers': {
    image: 'https://image.tmdb.org/t/p/original/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
    desc: 'The Avengers brings together superheroes like Iron Man, Thor, Hulk, and Captain America to save the world.\nThey must learn to work as a team despite their differences and egos.\nA powerful enemy threatens global destruction, forcing them into action.\nThe movie is packed with action, humor, and iconic superhero moments.'
},

'Spider-Man': {
    image: 'https://image.tmdb.org/t/p/original/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg',
    desc: 'Spider-Man follows a young teenager who gains spider-like powers after a scientific accident.\nHe struggles to balance school life with his responsibility as a superhero.\nAs threats rise in the city, he must protect innocent people.\nThe film captures the journey of growth, responsibility, and heroism.'
},

'Joker': {
    image: 'https://image.tmdb.org/t/p/original/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg',
    desc: 'Joker explores the psychological transformation of Arthur Fleck into a criminal mastermind.\nLiving in a broken society, he faces rejection, loneliness, and mental struggles.\nHis descent into chaos leads to a shocking rise as a symbol of rebellion.\nThe film delivers a powerful and haunting character study.'
},

'The Dark Knight': {
    image: 'https://image.tmdb.org/t/p/original/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg',
    desc: 'The Dark Knight follows Batman as he faces his greatest enemy, the Joker.\nThe Joker creates chaos in Gotham, pushing the city into fear and disorder.\nBatman must make difficult choices to protect the people he loves.\nThe film is widely regarded as one of the greatest superhero movies ever made.'
},

'Mad Max': {
    image: 'https://image.tmdb.org/t/p/original/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
    desc: 'Mad Max is set in a post-apocalyptic world where survival depends on speed and strength.\nMax joins a group of rebels trying to escape a ruthless warlord.\nThe movie features intense car chases and high-octane action sequences.\nIt is visually spectacular and filled with nonstop adrenaline.'
},

'Black Panther': {
    image: 'https://image.tmdb.org/t/p/original/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg',
    desc: 'Black Panther follows T’Challa, the king of Wakanda, a technologically advanced hidden nation.\nHe must defend his kingdom from enemies both inside and outside.\nThe story blends culture, leadership, and responsibility.\nIt became a global phenomenon with strong storytelling and visuals.'
},

'Parasite': {
    image: 'https://image.tmdb.org/t/p/original/kqjL17yufvn9OVLyXYpvtyrFfak.jpg',
    desc: 'Parasite tells the story of a poor family that infiltrates a wealthy household.\nAs their plan unfolds, unexpected events begin to change everything.\nThe film explores themes of class inequality and social divide.\nIt delivers suspense, drama, and shocking twists throughout.'
},

'Gone Girl': {
    image: 'https://image.tmdb.org/t/p/original/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg',
    desc: 'Gone Girl revolves around the mysterious disappearance of a woman on her anniversary.\nHer husband becomes the prime suspect as secrets begin to unfold.\nThe story is filled with twists, lies, and psychological tension.\nIt keeps the audience guessing until the very end.'
},

'John Wick': {
    image: 'https://image.tmdb.org/t/p/original/fZPSd91yGE9fCcCe6OoQr6E1c3S.jpg',
    desc: 'John Wick follows a retired assassin who returns to the underworld after a personal tragedy.\nDriven by revenge, he takes on powerful enemies with unmatched skills.\nThe film is known for its stylish action choreography.\nIt has become one of the most iconic action franchises.'
},

'Endgame': {
    image: 'https://image.tmdb.org/t/p/original/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg',
    desc: 'Avengers Endgame shows the final battle against Thanos after the universe faces devastation.\nThe remaining heroes plan a risky mission to restore everything.\nIt brings together years of storytelling into one epic conclusion.\nThe movie delivers emotional and unforgettable moments.'
},

'The Martian': {
    image: 'https://image.tmdb.org/t/p/original/5aGhaIHYuQbqlHWvWYqMCnj40y2.jpg',
    desc: 'The Martian tells the story of an astronaut stranded alone on Mars.\nHe uses science and creativity to survive in harsh conditions.\nMeanwhile, NASA works tirelessly to bring him back home.\nThe film is inspiring, intelligent, and full of hope.'
},

'Blade Runner': {
    image: 'https://image.tmdb.org/t/p/original/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg',
    desc: 'Blade Runner is set in a futuristic world where artificial humans exist alongside real ones.\nA blade runner is tasked with hunting down rogue replicants.\nThe film explores identity, humanity, and technology.\nIt is known for its deep themes and stunning visuals.'
}

};

// 🔍 SEARCH BUTTON
function searchMovie() {
    let input = document.querySelector('input').value.trim().toLowerCase();

    for (let movieName in movieData) {
        if (movieName.toLowerCase().includes(input)) {
            openMovie(movieName);
            return;
        }
    }

    alert('Movie not found');
}
function liveSearch() {
    let input = document.querySelector('input').value.toLowerCase();
    let box = document.getElementById('suggestions');

    box.innerHTML = '';

    if (input === '') return;

    for (let movieName in movieData) {
        if (movieName.toLowerCase().includes(input)) {

            let div = document.createElement('div');
            div.innerText = movieName;
            div.style.padding = '5px';
            div.style.cursor = 'pointer';

            // IMPORTANT FIX
            div.onclick = function () {
                openMovie(movieName);
            };

            box.appendChild(div);
        }
    }
}
// 🎬 SHOW MOVIE
function showMovie(movie) {
    currentMovie = movie;

    document.getElementById("main-content").style.display = "none";
    document.getElementById("movie-view").style.display = "block";

    document.getElementById("banner").style.backgroundImage =
        "url(" + movie.image + ")";

    document.getElementById("movie-title").innerText = movie.title;
    document.getElementById("movie-desc").innerText = movie.description;

    showRecommendations(movie);
}

// 🤖 RECOMMENDATIONS
function showRecommendations(movie) {
    const container = document.getElementById("recommendations");
    container.innerHTML = "";

    const similar = movies.filter(function(m) {
        return m.genre === movie.genre && m.title !== movie.title;
    });

    similar.forEach(function(m) {
        const div = document.createElement("div");
        div.className = "movie-card";

        div.innerHTML =
            '<img src="' + m.image + '">' +
            '<p>' + m.title + '</p>';

        div.onclick = function() {
            showMovie(m);
        };

        container.appendChild(div);
    });
}

// ▶ PLAY MOVIE
function playMovie() {
    document.getElementById("movie-view").style.display = "none";
    document.getElementById("player-screen").style.display = "block";

    document.getElementById("player-video").src = currentMovie.trailer;
}

// 🔙 BACK FROM PLAYER
function closePlayer() {
    document.getElementById("player-screen").style.display = "none";
    document.getElementById("movie-view").style.display = "block";

    document.getElementById("player-video").src = "";
}

// 🔙 BACK TO HOME
function goBack() {
    document.getElementById("movie-view").style.display = "none";
    document.getElementById("main-content").style.display = "block";
}