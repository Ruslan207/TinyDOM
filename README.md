TinyDOM
=======

TinyDOM is a very basic DOM manipulation library.


Documentation
-------------

###appendHead

Appends HTML to the head.

####Example
```javascript
$.appendHead('<script>alert("XSS!")</script>');
```

###appendBody

Appends HTML to the body.

```javascript
$.appendBody('<h1>This will be appended!</h1>');
```

###prependHead

Prepends HTML to the head.

####Example
```javascript
$.prependHead('<script>alert("XSS!")</script>');
```

###prependBody

Prepends HTML to the body.

```javascript
$.prependBody('<h1>This will be prepended!</h1>');
```

###replaceHead

Replaces the head with the HTML given.

```javascript
$.replaceHead("<style>body{background:black}</style>")
```

###replaceBody

Replaces the body with the HTML given.

```javascript
$.replaceBody("<h1>XSS</h1>")
```

###clearHead

Clears all elements in the head.

```javascript
$.clearHead()
```

###clearBody

Clears all elements in the body.

```javascript
$.clearBody()
```

###loadJS

Lazy loads a Javascript file.

```javascript
$.loadJS('https://raw.github.com/ctult/TinyDOM/master/tinyDOM.min.js')
```

###loadCSS

Lazy loads a CSS file.

```javascript
$.loadCSS("style.css")
```

###id

Shortcut for document.getElementById.

```javascript
$.id('foo') //equals document.getElementById
```

###tag

Shortcut for document.getElementsByTagName.

```javascript
$.tag('div') //equals document.getElementsByTagName('div')
```

###head

Shortcut for document.head.

```javascript
$.head.innerHTML = "<script>alert('XSS!')</script>"s
```

###body

Shortcut for document.body.

```javascript
$.body.innerHTML = "Hi!"
```

###HS

HTML Sugar.  BuildSugar Renamed.

```javascript
$.HS('H1 id="hi"', 'Hi');
```

##Naming

TinyDOM will use $ ONLY if $ is not taken.

It will always use tinyDOM, even if it has to overwrite the original.