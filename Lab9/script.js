// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }
   
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }



var url = 'https://newsapi.org/v2/everything?q=keyword&apiKey=df8bba00fe2d45beb093c690683c4787';

var req = new Request(url);

fetch(req)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
      var elements = document.querySelectorAll(".w3-quarter");
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i]; 
        var heading = element.querySelector('h3');
        var image = element.querySelector('img');
        var paragraph = element.querySelector('p');

        heading.textContent = data.articles[i].title;
        image.src = data.articles[i].urlToImage;
        paragraph.textContent = data.articles[i].description;
      }
    })

    

  var appleURL = 'https://newsapi.org/v2/everything?q=apple&apiKey=df8bba00fe2d45beb093c690683c4787';
  var req = new Request(appleURL);
  fetch(req)
    .then(function(res) {
        return res.json();
    })
    .then(function(res){
      console.log(res);
      var apple = document.querySelector('.apple');
      var image = apple.querySelector('img');
      var Author = apple.querySelector('h4');
      var title = apple.querySelector('h6');
      var description = apple.querySelector('p');

      image.src = res.articles[0].urlToImage;
      Author.textContent = res.articles[0].author;
      title.textContent = res.articles[0].title;
      description.textContent = res.articles[0].description;
    });