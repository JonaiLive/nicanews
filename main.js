
window.addEventListener("load", () => {
  var url =
    "https://newsapi.org/v2/everything?" +
    "q=nicaragua& ONLY" +
    "from=2019-04-04&" +
    "sortBy=publishedAt&" +
    "language=es&" +
    "apiKey=myKey";

  var req = new Request(url);

  fetch(req)
    .then(response => response.json())
    .then(data => {
      // console.log(data))
      let output = "";
      data.articles.forEach(function(articles) {
        output += `
      <div class="articles">
        <ul>
          <li><p class="artTitle">${articles.title}</p></li>
          <li><img src="${articles.urlToImage}"></li>
          // <li><a href="${
            articles.url
          }"><button type="button">Ver Articulo</button></a></li>

          <br>
          </ul>
        </div>
        `;
      });
      document.getElementById("news-articles").innerHTML = output;
    });
});
