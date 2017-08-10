### kd.Request()
Create an API request.

`kd.Request(requestType, entity)`
* `requestType` - there are three request types
  * `Search` - performs a search on a KD entity, such as KdPhysician
  * `Group` - performs numeric calculation/aggregation across one/multiple KD entities
  * `Select` - Selectively retrieve data from one/multiple KD entities
* `entity` - for `Search` request, specifies what entity to search for

kd.Request is the main building block of the kd.js library. Here is an example that retrieves a random set of 10 physicians

    // create a request and point it to proper API URL and API key
    var req = kd.Request("Search","KdPhysician")
    req.setUrlBase('https://api.karmadata.com')
    req.setApiKey('-----')       // Please obtain API key by contacting KarmaData
    
    // request data and wait for output
    req.requestData()
    req.setAjaxDone(function(data) {
      console.log(data)
    })

