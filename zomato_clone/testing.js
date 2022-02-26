$(document).ready(function(){
    $.ajax({ url: "https://newsdata.io/api/1/news?apikey=pub_4994d4ce4045880c114ed089665967d58e35",
            type: "GET",
            dataType: "json",
            success: function(data){        
            console.log(data);
            }
    });
});