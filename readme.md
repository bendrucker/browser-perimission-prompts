# browser-perimission-prompts [![Build Status](https://travis-ci.org/bendrucker/browser-permission-prompts.svg?branch=master)](https://travis-ci.org/bendrucker/browser-permission-prompts) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/browser-permission-prompts.svg)](https://greenkeeper.io/)

> On-screen locations (x, y) for permissions prompts in major desktop browsers

Supports:

* Chrome
* Firefox
* Safari

## Install

```
$ npm install --save browser-permission-prompts
```


## Usage

```js
var prompt = require('browser-permission-prompts')

prompt()
//=> {...}
```

You'll receive the following data (using Chrome as an example):

```json
{
  "prompt": [
    {"x": 80, "y": 4},
    {"x": 410, "y": 4},
    {"x": 410, "y": 118},
    {"x": 80, "y": 118}
  ],
  "confirm": {
    "x": 347.5
  }
}
```

The prompt coordinates represent the top-left, top-right, bottom-right, and bottom-left coordinates of the prompt, respectively. The confirm x coordinate represents the horizontal midpoint of the confirmation action.

All measurements are relative to the document viewport, not the browser chrome.

## API

#### `prompt()` -> `object` / `undefined`

Returns the prompt coordinates for the current browser. If the library does not support the current provider, `undefined` is returned instead.


## License

MIT © [Ben Drucker](http://bendrucker.me)
