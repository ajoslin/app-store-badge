# app-store-badge [![Build Status](https://travis-ci.org/ajoslin/app-store-badge.svg?branch=master)](https://travis-ci.org/ajoslin/app-store-badge)

> Create a virtual DOM SVG badge for the Google Play Store or App Store


## Install

```
$ npm install --save app-store-badge
```


## Usage

```js
var badge = require('app-store-badge')

badge.ios({ height: '100px' }) //default 40px height
// => returns virtual DOM svg element

badge.android({ height: '200px' }) // default 58px height
// => returns virtual DOM svg element
```

## Related

- [app-store-link](https://github.com/ajoslin/app-store-link)

### Don't use Virtual DOM?

```js
var createElement = require('virtual-dom/create-element')
var badge = require('app-store-badge')

var svgElement = createElement(badge.ios())

document.body.appendChild(svgElement)
```

### License

MIT © [Andrew Joslin](http://ajoslin.com)
