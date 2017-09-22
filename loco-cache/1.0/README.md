# loco-cache - front-end caching using browser local storage
[![npm package](https://nodei.co/npm/loco-cache.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/loco-cache/)


## Usage
* React - `npm install loco-cache`
* CDN - [Vist loco-cache CDN](https://github.com/karmadata/kd-public-docs/blob/master/loco-cache/1.0/CDN.md)


## Purpose
Sometimes a website's performance can be greatly improved if commonly used data is cached on the front end. Most browsers provide APIs to allow storing data
on session or domain level. `loco-cache` provides a robust abstraction on top of the storage APIs to make caching simple. It provides the following features:
* Caching with expiration - each key can be automatically expired
* Sweep - automatically removes old entries to free up storage space
* Collision prevention - keys are prefixed to avoid name collision with other packages
* Optional compression - supports optional compression to save storage space


## Documents
* [Quick Examples](#examples)
* [Detailed Documents](https://github.com/karmadata/kd-public-docs/blob/master/loco-cache/1.0/api/README.md)
* [Release Notes](https://github.com/karmadata/kd-public-docs/blob/master/loco-cache/1.0/releasenotes.md)


## Examples
`loco-cache` API is intuitive yet customizable.

Example 1: basic example using `.get()` and `.set()`
  
    var cache = require('loco-cache')()
    
    // assume we have to obtain a list of countries via AJAX to populate a dropdown
    // before the AJAX call, check the cache first
    var countries = cache.get('countries')
    if (countries == null) {
        // not in cache, maek the AJAX call instead, then store in cache
        countries = await ajax('/api/countries').data
        cache.set('countries', countries)
    }


Example 2: customize with options

    var cache = require('loco-cache')({
        prefix: "acme",
        expiresIn: 1200,     // each key expires in 1200 seconds
        storage: 'local'  // use local storage
    })
    
    // only customization is different. everything below stays the same
    var countries = cache.get('countries')
    if (countries == null) {
        // not in cache, maek the AJAX call instead, then store in cache
        countries = await ajax('/api/countries').data
        cache.set('countries', countries)
    }


## Cheatsheet
Simple cheatsheet to get you going. For detailed documentation please visit [Docs](https://github.com/karmadata/kd-public-docs/blob/master/loco-cache/1.0/README.md)

`var cache = require('loco-cache')(options)`
* `options` - options to customize the cache. If null, default values are used
    * `prefix` - prefix used for each key to avoid name collision. default: loco
    * `expiresIn` - how many seconds to keep a key in cache. default: 600
    * `storage` - session or local storage. default: session

`cache.get(key)`
* `key` - needs to be a string, cannot be null
* returns the stored object

`cache.set(key, obj)`
* `key` - needs to be a string, cannot be null
* `obj` - a simple object to store



