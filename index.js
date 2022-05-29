var cinema ={
   names:['Cavea','Amirani','Rustaveli'],
   languages:['Eng','Geo'],
   movies:[
        {name:'"Closer"',imdb:8.7},
        {name:'"The dark knight"',imdb:9.0},
        {name:'"The platform"',imdb:8.6}
   ]
}
document.getElementById("cinema-1").innerHTML="Cinema:" + " "+cinema.names[0] + "<br>" + "Movie:" + " " + cinema.movies[0].name+"<br> " + "Language:" + " " +cinema.languages[1] + "<br>" + "IMDb:" + " " + cinema.movies[0].imdb;
document.getElementById("cinema-2").innerHTML="Cinema:" + " "+cinema.names[1] + "<br>" + "Movie:" + " " + cinema.movies[1].name+"<br> " + "Language:" + " " +cinema.languages[0] + "<br>" + "IMDb:" + " " + cinema.movies[1].imdb;
document.getElementById("cinema-3").innerHTML="Cinema:" + " "+cinema.names[2] + "<br>" + "Movie:" + " " + cinema.movies[2].name+"<br> " + "Language:" + " " +cinema.languages[1] + "<br>" + "IMDb:" + " " + cinema.movies[2].imdb;