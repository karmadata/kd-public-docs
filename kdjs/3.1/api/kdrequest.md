## kd.Request()
Create an API request.

`kd.Request(requestType, entity)`
* `requestType` - there are three request types
  * `Search` - performs a search on a KD entity, such as KdPhysician
  * `Group` - performs numeric calculation/aggregation across one/multiple KD entities
  * `Select` - Selectively retrieve data from one/multiple KD entities
* `entity` - for `Search` request, specifies what entity to search for

kd.Request is the main building block of the kd.js library. Here is an example that retrieves a random set of 10 physicians

```js
// create a request and point it to proper API URL and API key
var req = kd.Request("Search","KdPhysician")
req.setUrlBase('https://api.karmadata.com')
req.setApiKey('-----')       // Please obtain API key by contacting KarmaData

// request data and wait for output
req.requestData()
req.setAjaxDone(function(data) {
  console.log(data)
})
```

### kd.Request() member methods

`req.setMaxCacheAge(maxAge)` - allows the API to retrieve result from cache if it is available. If the result is older than the maxAge, API will instead retrieve the request from database.

`req.setContext(context)` - kd.js will append a string context into the URL parameter. This context has no purpose, but helps the developer distinguish between various requests

```js
var req = kd.Request("Search","KdPhysician")
req.setUrlBase('https://api.karmadata.com')
req.setApiKey('-----')       // Please obtain API key by contacting KarmaData

req.setMaxCacheAge(60)       // use cache if it is not older than 60 seconds
req.setContext('general-physician-seach')  // add a comment to help understand the purpose of this request
```
