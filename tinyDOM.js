function appendHead(a){return document.head.innerHTML += a};
function appendBody(a){return document.body.innerHTML += a};


function prependHead(a){var oldIH = document.head.innerHTML;return document.head.innerHTML = a + oldIH};
function prependBody(a){var oldIH = document.head.innerHTML;return document.head.innerHTML = a + oldIH};


function replaceHead(a){return document.head.innerHTML = a};
function replaceBody(a){return document.body.innerHTML = a};

function ClearHead(){return document.head.innerHTML = "" ? true : false};
function ClearBody(){return document.body.innerHTML = "" ? true : false};


function loadJS(src) {
var s = document.createElement('script');
s.type = 'text/javascript';
s.async = true;
s.src = src;
x = document.getElementsByTagName('script')[0];
x.parentNode.insertBefore(s, x);
}

var loadCSS = function(url){
var sheet = document.createElement("link");
  sheet.setAttribute("rel", "stylesheet");
  sheet.setAttribute("type", "text/css");
  sheet.setAttribute("href", url);
   document.head.appendChild(sheet)
};

var $id = function(a){return document.getElementById(a)};

var $tag = function(a){return document.getElementsByTagName(a)};

var $head = document.head;

var $body = document.body;


var HS=function(c){function f(a,b){c.push([]);return d(a,b)}function d(a,b){b=""+(b||"");a&&e("<",a,">");b&&e(b);a&&e("</",a.split(" ")[0],">");return d}d.toString=function(){return c.pop().join("")};function e(){c[c.length-1].push(c.join.call(arguments,""))}return f}([]);


