# app-store-badge [![Build Status](https://travis-ci.org/ajoslin/app-store-badge.svg?branch=master)](https://travis-ci.org/ajoslin/app-store-badge)

> Create a Google Play Store or App Store virtual DOM svg badge


## Install

```
$ npm install --save app-store-badge
```


## Usage

```js
var badge = require('app-store-badge')


badge.ios() // => returns virtual DOM svg element, default 40px height

badge.android() // => returns virtual DOM svg element, default 58px height

// height can be overridden
badge.ios({height: '100px'}) 
badge.android({height: '33px'})
```

## Related

- [app-store-link](https://github.com/ajoslin/app-store-link)

### License

MIT © [Andrew Joslin](http://ajoslin.com)
