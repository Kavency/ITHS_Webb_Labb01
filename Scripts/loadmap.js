var map = document.getElementById ('map'); 
var maplistner = function (e) { 
    var frame = document.createElement ('iframe'); 
    frame.src = this.getAttribute ('data-src');
    frame.width = 600;
    frame.height = 450;
    map.appendChild (frame); 
    map.removeEventListener ("mouseover", maplistner); 
}; 
map.addEventListener ('mouseover', maplistner);       