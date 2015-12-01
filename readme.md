# app-store-badge [![Build Status](https://travis-ci.org/ajoslin/app-store-badge.svg?branch=master)](https://travis-ci.org/ajoslin/app-store-badge)

> Create a virtual DOM SVG badge linking to the given app in the Android or iOS store


## Install

```
$ npm install --save app-store-badge
```


## Usage

```js
var badge = require('app-store-badge')

badge.ios({ height: '100px' }) //default 45px height
// => returns virtual DOM svg element

badge.android({ height: '200px' }) / default 58px height
// => returns virtual DOM svg element
```

## Related

- [app-store-link](https://github.com/ajoslin/app-store-badge)

## License

MIT © [Andrew Joslin](http://ajoslin.com)
