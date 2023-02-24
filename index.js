function getNews(country, category) {
  document.getElementById("news").innerHTML = "";

  fetch(
    "https://newsapi.org/v2/top-headlines?country=" +
      country +
      "&category=" +
      category +
      "&apiKey=5eb79d24968e4dd3acd031483f9b2a12"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let news = data.articles;
      console.log(news);

      news.forEach((n, index) => {
        let newsCard = document.createElement("div");
        newsCard.classList.add("news_card");

        let newsImg = document.createElement("div");
        newsImg.classList.add("news_img");

        let img = document.createElement("img");
        img.setAttribute("src", n.urlToImage);

        newsImg.appendChild(img);

        let newsDetails = document.createElement("div");
        newsDetails.classList.add("news_details");

        let title = document.createElement("h1");
        title.classList.add("title");
        title.append(n.title);

        let author = document.createElement("p");
        author.classList.add("author");
        author.append(n.author);

        let content = document.createElement("p");
        content.classList.add("content");
        content.append(n.description);

        let link = document.createElement("a");
        link.setAttribute("href", n.url);
        link.setAttribute("target", "blank");

        let button = document.createElement("button");
        button.classList.add("btn");
        button.append("Read Full Article");

        link.appendChild(button);

        newsDetails.appendChild(title);
        newsDetails.appendChild(author);
        newsDetails.appendChild(content);
        newsDetails.appendChild(link);

        newsCard.appendChild(newsImg);
        newsCard.appendChild(newsDetails);

        document.getElementById("news").appendChild(newsCard);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

getNews("in", "business");

function search() {
  let country = document.getElementById("country").value;
  let category = document.getElementById("category").value;

  getNews(country, category);
}
