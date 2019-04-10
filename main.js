window.addEventListener("load", () => {
  var url =
    "https://newsapi.org/v2/everything?" +
    "q=nicaragua& ONLY" +
    "from=2019-04-04&" +
    "sortBy=publishedAt&" +
    "language=es&" +
    "apiKey=fad91accfe304ef4aa33587550ada46c";

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
          <li class="artTitle">${articles.title}</li>
          <li class="links"><a href="${articles.url}"</a></li>

          <br>
          </ul>
        </div>
        `;
      });
      document.getElementById("news-articles").innerHTML = output;
    });
});
