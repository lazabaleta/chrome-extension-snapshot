const getImageConfig = require("./_snapshotViewer.js");

var queryString = window.location.search;
var imgConfig = getImageConfig(queryString);
setImageConfig(imgConfig);

function setImageConfig(imageConfig){
    var img = document.getElementById("img-holder");
    img.src = imageConfig.payload;
    img.height = imageConfig.height;
    img.width = imageConfig.width;
    img.addEventListener("click", downloadImage);
}

function downloadImage (e){
    var download = document.createElement("a");
    download.setAttribute("href", e.target.currentSrc);
    download.setAttribute("download", "snapshot.jpg");
    download.click();
}