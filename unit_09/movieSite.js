document.getElementById("search").addEventListener("click", searchForName);

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

function searchForName() {
    let filmName = document.getElementById("searchbox").value;
    let url = "https://www.omdbapi.com/?s=" + filmName + "&apikey=1ec2480c";
    let cardGroup = document.getElementById("movies");
    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            let movies = data.results;
            return movies.map(function (movie) {
                let cardDiv = createNode('div'),
                    cardBody = createNode('div'),
                    img = createNode('img'),
                    h5 = createNode('h5'),
                    p = createNode('p');
                img.src = movie.Poster;
                img.setAttribute("class", "card-img-top");
                cardDiv.setAttribute("class", "card");
                h5.setAttribute("class", "card-title");
                p.setAttribute("class", "card-text");
                h5.innerHTML = movie.Title;
                p.innerHTML = movie.Year;
                append(cardBody, h5);
                append(cardBody, p);
                append(cardDiv, img);
                append(cardDiv, cardBody);
                append(cardGroup, cardDiv);
            })
        })
        .catch(function (error) {
            console.log(error);
        });
}
