TinyDOM
=======

TinyDOM is a very basic DOM manipulation library.


Documentation
-------------

###appendHead

Appends HTML to the head.

####Example
```javascript
appendHead('<script>alert("XSS!")</script>');
```

###appendBody

Appends HTML to the body.

```javascript
appendBody('<h1>This will be appended!</h1>');
```