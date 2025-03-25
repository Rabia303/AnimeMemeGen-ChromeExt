fetch("https://meme-api.com/gimme/animememes")
    .then(res => res.json())
    .then(data => {
        document.getElementById("meme-image").src = data.url;
    })
    .catch(err => console.error("Error fetching meme:", err));
