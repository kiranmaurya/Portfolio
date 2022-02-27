

console.log("This is my index js file");
//TODO
/*
1. ON CLICK ON NEWS OPEN NEW TAB WITH ORIGINAL ARTICAL PAGE
2. fetch original date form api given date and add this on web page
3. add beauty and responsiveness to news page
4. integrate free api
*/
// Initialize the news api parameters
// const data = null;

// const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
// 	if (this.readyState === this.DONE) {
// 		console.log(this.responseText);
// 	}
// });

// xhr.open("GET", "https://free-news.p.rapidapi.com/v1/search?q=Elon%20Musk&lang=en");
// xhr.setRequestHeader("x-rapidapi-host", "free-news.p.rapidapi.com");
// xhr.setRequestHeader("x-rapidapi-key", "5d22bc53bemshd27ee4baec34f11p13b3bejsn77d71da61ad4");

// xhr.send(data);


let source = 'us, in';

let apiKey = '465d049e737be266180baef869fb9d12'
let limit = 9;
// Grab the news container
let newsAccordion = document.getElementById('news');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://free-news.p.rapidapi.com/v1/search?q=russian&lang=en&page_size=9`, true);
xhr.setRequestHeader("x-rapidapi-host", "free-news.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "5d22bc53bemshd27ee4baec34f11p13b3bejsn77d71da61ad4");
let submitBtn = document.getElementById('searchQuerySubmit');
// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function(element, index) {
            const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
            ];
            const d = new Date(element['published_date']);
            var month = monthNames[d.getMonth()];
            var dateFromApi = d.getDate();
            var image = "../assets/news.jpeg";
            //console.log(element["media"]);
            if(element["media"] != null){
                image = element["media"];
            }
            //document.write("The current month is " + monthNames[d.getMonth()]);
            let news = `<div class="ct-blog col-sm-6 col-md-4">
                            <div class="inner">
                            <div class="fauxcrop">
                                <a href="#"><img alt="News Entry" src="${image}"></a>
                            </div>
                                <div class="ct-blog-content">
                                    <div class="ct-blog-date">
                                        <span>${month}</span><strong>${dateFromApi}</strong>
                                    </div>
                                    <h3 class="ct-blog-header">
                                        ${element["title"]}
                                    </h3>
                                </div>
                            </div>
                        </div>`;
            // console.log(element, index)
            newsHtml += news;
        });
        document.getElementById('news').innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
};

xhr.send()


