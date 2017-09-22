# loco-cache API Documentation

## Instantiate loco-cache
* [`new cache(options)`](instantiation.md) - creates a new instance of loco-cache

## set and retrieve a cached entry
* [`set(key, val, options)`](set.md) - add or update a cache entry with object value
* [`setStr(key, valstr, options)`](setStr.md) - add or update a cache entry with string value
* [`get(key, options)`](get.md) - retrieve a cache entry
* [`getStr(key, options)`](getStr.md) - retrieve a cache entry

## Manually clean cache
* [`sweep(options)`](sweep.md) - manually expires old cache entries

