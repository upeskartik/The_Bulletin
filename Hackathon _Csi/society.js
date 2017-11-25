$.ajax({
    url: "http://127.0.0.1:5000/society/admin",
    dataType: "json",
    success: function(data) {
      for(var i = 0; i < data.length; i++){
        var image = 'http://127.0.0.1:5000/'+data[i].poster;
        $('.event-title').text(data[i].title);
        $('.event-poster').attr('src',image);
        $('.event-description').text(data[i].description);
      }
    }
});
