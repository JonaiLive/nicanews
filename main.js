
window.addEventListener("load", () => {
  var url =
    "https://newsapi.org/v2/everything?" +
    "q=nicaragua& ONLY" +
    "from=2019-04-02&" +
    "sortBy=relevancy&" +
    "language=es&";+
    "API_KEY";

  const API_KEY = process.env.API_KEY;

  var req = new Request(url);

  fetch(req)
    .then(response => response.json())
    .then(data => {
      // console.log(data))
      let output = "";
      data.articles.forEach(function(articles) {
        output += `
          <ul>
          <li>${articles.title}</li>
          <li>${articles.url}</li>
          <br>
          </ul>
        `;
      });
      document.getElementById("news-articles").innerHTML = output;
    });
});
