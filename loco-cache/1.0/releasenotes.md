## Release Notes
### 1.0.0 Initial release of loco-cache
* supports localStorage and sessionStorage
* supports automatic cleanup of storage
  * this feature only does partial cleanup, as we try to minimize resources dedicated to monitoring key expiration
### 1.0.1
* some bug fixes regarding when to start the sweep timer
* now allows instantiating loco-cache without `new` keyword

