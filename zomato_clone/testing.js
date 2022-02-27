

console.log("This is my index js file");
//TODO
/*
1. ON CLICK ON NEWS OPEN NEW TAB WITH ORIGINAL ARTICAL PAGE
2. fetch original date form api given date and add this on web page
3. add beauty and responsiveness to news page
4. integrate free api
*/
// Initialize the news api parameters
let source = 'us, in';

let apiKey = '465d049e737be266180baef869fb9d12'
let limit = 9;
// Grab the news container
let newsAccordion = document.getElementById('news');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://api.mediastack.com/v1/news?access_key=${apiKey}&countries=${source}&limit=${limit}`, true);


// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        
        let articles = json.data;
        let newsHtml = "";
        articles.forEach(function(element, index) {
            const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
            ];
            const d = new Date(element['published_at']);
            var month = monthNames[d.getMonth()];
            // var dateFromApi = monthNames[d.getDate()];
            var image = "../assets/news.jpeg";
            if(element["image"] != null){
                image = element["image"];
            }
            //document.write("The current month is " + monthNames[d.getMonth()]);
            let news = `<div class="ct-blog col-sm-6 col-md-4">
                            <div class="inner">
                            <div class="fauxcrop">
                                <a href="#"><img alt="News Entry" src="${image}"></a>
                            </div>
                                <div class="ct-blog-content">
                                    <div class="ct-blog-date">
                                        <span>${month}</span><strong>1</strong>
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


