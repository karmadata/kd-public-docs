## Release Notes
### 3.0.0 Initial release of KD3
### 3.0.1
* Updated Date serialization to use moment().format("YYYY-MM-DD")
### 3.0.2
* Added support for Select API
* Started the change of name from GroupBy to SelectItem
### 3.1.0
* Supporting KD 3.1 API
### 3.1.3
* Supporting npm
### 3.1.4
* Removed dependency on jQuery
* Removed dependency on Underscore (uses Lodash internally)
### 3.1.5
* Reduce Lodash footprint
* Added protection against invalid `JoinEntity`
### 3.1.7
* Deprecated `GroupBy` in favor of `SelectItem`
### 3.1.8
* Improved documentation
### 3.1.9
* added getOperator and setOperator
* allows xhr with credentials
### 3.1.10
* added caching
### 3.1.11
* using new caching mechanism
### 3.1.12
* bug fix: now allows resetting a SelectItem sorting back to null
### 3.1.15
* added removeAllSelectItems()
### 3.1.16
* kd.js should now work on server side. When program starts, set `global.XMLHttpRequest = require('xhr2')`


## Building kd.js (for internal use)
Please refer to [build](build.md) page.
