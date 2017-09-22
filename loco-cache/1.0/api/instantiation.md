## new cache(options)
* `options` - the options passed in to customize the loco-cache instance
  * `prefix` - (default: 'loco') The prefix added to each key when storing in localStorage or sessionStorage. This prevents key classes when two modules inside the same web application use loco-cache
  * `expiresIn` - (default: 600) The number of seconds a key stays in the cache before expired. This expiration value is set when key is inserted or updated.
  * `storage` - (default: 'session') Whether to use localStorage ('local') or sessionStorage to store cache.
  

## Example

    var cache = new require('loco-cache')()
  
    // start using cache here
    cache.set('mykey', 123)


`new` keyword can be omitted

    var cache = require('loco-cache')()
  
    // start using cache here
    cache.set('another key', 456)

instantiate with options (use company name as prefix, and make keys expire after 2 minutes)

    var cache = require('loco-cache')({
      prefix: 'acme',
      expiresIn: 120
    })
  
    // start using cache here
    cache.set('another key', 456)
