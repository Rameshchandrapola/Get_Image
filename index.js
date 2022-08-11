const input = document.getElementById('search');
const searchbtn = document.getElementById('searchbtn');
const loadmore = document.querySelector('.load_more');

input.addEventListener("keydown", event => {
    if (event.key == "Enter") {
        document.querySelector(".grid").textContent = "";
        searchimage();
    }
})

searchbtn.addEventListener("click", () => {
    document.querySelector(".grid").textContent = "";
    searchimage();
})
var page = 1;
loadmore.addEventListener("click", () => {
    page++;
    if (input.value != "") {
        searchimage();
    } 
});
if (input.value == "") {
    let url = "https://api.unsplash.com/search/photos/?query=ink&per_page=9&page=" + page + "&client_id=gYz80x_WtrIeQae-lzjgqfFA-C2H9kpOtG0IRx3WhaA";
    fetch(url)
        .then(responce => {
            if (responce.ok) {
                return responce.json();
            } else {
                alert("Enter a valid search");
            }
        })

        .then(data => {
            for (let i = 0; i < data.results.length; i++) {
                let image = document.createElement("div");
                image.className = "img";
                image.style.backgroundImage = "url(" + data.results[i].urls.raw + ")";
                image.addEventListener("dblclick", function () {
                    window.open(data.results[i].links.download, '_blank');
                })
                document.querySelector(".grid").appendChild(image);
            }
        })
}
searchimage = () => {
    let url = "https://api.unsplash.com/search/photos/?query=" + input.value + "&per_page=9&page=" + page + "&client_id=gYz80x_WtrIeQae-lzjgqfFA-C2H9kpOtG0IRx3WhaA";
    fetch(url)
        .then(responce => {
            if (responce.ok) {
                return responce.json();
            } else {
                alert("Enter a valid search");
            }
        })
        .then(data => {
            for (let i = 0; i < data.results.length; i++) {
                let image = document.createElement("div");
                image.className = "img";
                image.style.backgroundImage = "url(" + data.results[i].urls.raw + ")";
                image.addEventListener("dblclick", function () {
                    window.open(data.results[i].links.download, '_blank');
                })
                document.querySelector(".grid").appendChild(image);
            }
        })
        .catch(error => alert(error));
}







