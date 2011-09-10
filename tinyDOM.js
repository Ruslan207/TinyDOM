//Copyright 2011 Sam Carr under the MIT License
//See LICENSE for details.
(function () {
    //Root, or window.
    var root = this;
    //These are the export names.
    //For example, if it is ["tinyDOM", "$"] then you could call tinyDOM by tinyDOM and $.
    //It won't write over varibles.  Which means that if you had (for example) jQuery, it would not rewrite $.
    //You would be able to do it yourself, though with var $ = tinyDOM;
    var name = ["tinyDOM", "$"];
    var $ = function () {};
    $.appendHead = function (a) {
        return document.head.innerHTML += a
    };
    $.appendBody = function (a) {
        return document.body.innerHTML += a
    };


    $.prependHead = function (a) {
        var oldIH = document.head.innerHTML;
        return document.head.innerHTML = a + oldIH
    };
    $.prependBody = function (a) {
        var oldIH = document.head.innerHTML;
        return document.head.innerHTML = a + oldIH
    };


    $.replaceHead = function (a) {
        return document.head.innerHTML = a ? true : false
    };
    $.replaceBody = function (a) {
        return document.body.innerHTML = a ? true : false
    };


    //Clears the head of everything
    $.ClearHead = function () {
        return document.head.innerHTML = "" ? true : false
    };
    //Clears the body of everything
    $.ClearBody = function () {
        return document.body.innerHTML = "" ? true : false
    };

    //Able to load a JS file
    $.loadJS = function (src) {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = src;
        x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
    }

    //Currently Broken
    var loadCSS = function (url) {
            var sheet = document.createElement("link");
            sheet.setAttribute("rel", "stylesheet");
            sheet.setAttribute("type", "text/css");
            sheet.setAttribute("href", url);
            document.head.appendChild(sheet)
        };

    $.id = function (a) {
        return document.getElementById(a)
    };

    $.tag = function (a) {
        return document.getElementsByTagName(a)
    };

    $.head = document.head;

    $.body = document.body;

    //buildSugar renamed HtmlSugar
    $.HS = function (c) {
        function f(a, b) {
            c.push([]);
            return d(a, b)
        }
        function d(a, b) {
            b = "" + (b || "");
            a && e("<", a, ">");
            b && e(b);
            a && e("</", a.split(" ")[0], ">");
            return d
        }
        d.toString = function () {
            return c.pop().join("")
        };

        function e() {
            c[c.length - 1].push(c.join.call(arguments, ""))
        }
        return f
    }([]);

    //Taken from Underscore's _.each
    var each = function (obj, iterator, context) {
        if (obj == null) return;
        if (Array.prototype.forEach && obj.forEach === nativeForEach) {
            obj.forEach(iterator, context);
        } else if (obj.length === +obj.length) {
            for (var i = 0, l = obj.length; i < l; i++) {
                if (i in obj && iterator.call(context, obj[i], i, obj) === breaker) return;
            }
        } else {
            for (var key in obj) {
                if (hasOwnProperty.call(obj, key)) {
                    if (iterator.call(context, obj[key], key, obj) === breaker) return;
                }
            }
        }
    };

    each(name, function (a) {
        root[a] = $;
    });
})();