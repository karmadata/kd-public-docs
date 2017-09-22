## set(key, val, options)
`set()` stores a plain Javascript object in the cache. It can later be retrieved using `get()`
* `key` - stores the value under this key. Has to be a string.
* `val` - any plain Javascript object to store into the cache.
* `options` - optional. Used to override the cache settings. Typically used to override expiration for a key. Refer to [cache()](instantiation.md) for details.


## Note
* set() accept any plain Javascript object as val, while setStr() only accepts a string as val.
* setStr() and getStr() are for advanced usage only. Use set() and get() instead.


## Example

    var cache = require('loco-cache')()
    
    // store into cache
    var obj = { name: 'Cat', likes: ['apple', 'oranges'] }
    cache.set('key1', obj)
    
    // perform other actions .....
    
    // retrieve here
    var cached_obj = cache.get('key1')
    if (cached_obj !== undefined) {
      console.log(cached_obj)
    } else {
      console.log('expired')
    }
  

Override expiration

    var cache = require('loco-cache')()
    
    // store into cache
    var obj = { name: 'Cat', likes: ['apple', 'oranges'] }
    cache.set('key1', obj, {expiresIn: 60})
    

Couple with AJAX

    var cache = require('loco-cache')()
    
    // assume we want to retrieve data on Boston
    var data = cache.get('Boston')
    
    // if cache miss, do AJAX
    if (data === undefined) {
      data = await ajax('/city/Boston')
      if (!data) throw "error!!!"
      // store in cache after fetch, so we can use it next time
      cache.set('Boston', data)
    }
    
    // now data is available for use ...
