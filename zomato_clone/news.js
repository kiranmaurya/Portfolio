
/*
1. ADD LODDING ICON
2. RESPONSIVENESS ADD
3. PAGGINATION ADDED
4. ON NEWS CLICK OPEN ORIGINAL NEWS ARTICEL
*/

// Grab the news container

let newsAccordion = document.getElementById('news');

// Create an ajax get request


const xhr = new XMLHttpRequest();
// What to do when response is ready
function fetchNews() {
    var query = document.getElementById('searchQueryInput').value;
    

    xhr.open('GET', `https://free-news.p.rapidapi.com/v1/search?q=${query}&lang=en&page_size=9`, true);
    xhr.setRequestHeader("x-rapidapi-host", "free-news.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "5d22bc53bemshd27ee4baec34f11p13b3bejsn77d71da61ad4");
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            if(json.status != null && json.status =='No matches for your search.' ){
                document.getElementById('news').innerHTML = json.status ;
            } else {
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
            
        }
        else {
            console.log("Some error occured")
        }
     };
    
    
    xhr.send()
};




