# app-store-badge [![Build Status](https://travis-ci.org/ajoslin/app-store-badge.svg?branch=master)](https://travis-ci.org/ajoslin/app-store-badge)

> Create a Google Play Store or App Store virtual DOM svg badge


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

## FAQ

#### Q: I don't use Virtual DOM, how can I get a real element out of this?
#### A:

```js
var createElement = require('virtual-dom/create-element')
var badge = require('app-store-badge')

var svgElement = createElement(badge.ios())

document.body.appendChild(svgElement)
```

### License

MIT © [Andrew Joslin](http://ajoslin.com)
