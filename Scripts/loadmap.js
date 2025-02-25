var map = document.getElementById ('map'); 
var mapListener = function (e) { 
    var frame = document.createElement ('iframe'); 
    frame.src = this.getAttribute ('data-src');
    // frame.width = 600;
    // frame.height = 450;
    map.appendChild (frame); 
    map.removeEventListener ("mouseover", mapListener); 
}; 
map.addEventListener ('mouseover', mapListener);       