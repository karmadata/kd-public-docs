# kd.js - Core library for KarmaData API


## Usage
* React - `npm install karmadata`
* CDN - [Vist KarmaData CDN](https://github.com/karmadata/kd-public-docs/blob/master/kdjs/3.1/CDN.md)


## Documents
* [Quick Examples](#examples)
* [Detailed Documents](api/README.md)
* [Release Notes](releasenotes.md)
* [Build CDN - internal use](build.md)


## Examples
KarmaData provides a versatile API to access our database of healthcare data. Here are examples of how to use the kd.js library to access KD API, starting from the simplest.

Example 1: retrieving a random list of 10 physicians
  
    // create a kd request
    var req = kd.Request("Search","KdPhysician")
    req.setUrlBase('https://api.karmadata.com')
    req.setApiKey('-----')       // Please obtain API key by contacting KarmaData
    
    // request data and wait for output
    // API defaults to returning 10 results
    req.requestData()
    req.setAjaxDone(function(data) {
      console.log(data)
    })

Example 2: retrieving physicians that are female sole proprietors (using filters)

    // create filters
    var f1 = kd.FilterItem("KdPhysician", "Gender", "String", 'Eq', ["Female"])
    var f2 = kd.FilterItem("KdPhysician", "IsSoleProprietor", "Boolean", 'Eq', [true])
  
    // create request and add those filters
    var req = kd.Request("Search","KdPhysician")
    req.setUrlBase('https://api.karmadata.com')
    req.setApiKey('-----')       // Please obtain API key by contacting KarmaData
    req.addFilterItem(f1)
    req.addFilterItem(f2)
    
    // request data and wait for output
    req.requestData()
    req.setAjaxDone(function(data) {
      console.log(data)
    })
    
Example 3: retrieving physicians that are female and belong to physician groups of size 5-10 (using FilterGroup)

    // create filters
    var f1 = kd.FilterItem("KdPhysician", "Gender", "String", 'Eq', ["Female"])
    var f2 = kd.FilterItem("KdPhysicianGroup", "NumberOfPhysicians", "Number", 'Between', [5, 10])
  
    // create request and add those filters
    var req = kd.Request("Search","KdPhysician")
    req.setUrlBase('https://api.karmadata.com')
    req.setApiKey('-----')       // Please obtain API key by contacting KarmaData
    req.addFilterItem(f1)
    var g1 = req.createFilterGroup('And')
    req.addFilterItem(f2, g1)
    
    // request data and wait for output
    req.requestData()
    req.setAjaxDone(function(data) {
      console.log(data)
    })
    
Example 4: retrieve physicians that are sole proprietors and sort by graduation year

    // create filters
    var f2 = kd.FilterItem("KdPhysician", "IsSoleProprietor", "Boolean", 'Eq', [true])
  
    // create request and add those filters
    var req = kd.Request("Search","KdPhysician")
    req.setUrlBase('https://api.karmadata.com')
    req.setApiKey('-----')       // Please obtain API key by contacting KarmaData
    req.addFilterItem(f2)
    
    // adds sorting, then request data and wait for output
    req.addSortOrderItem("GraduationYear", "desc")
    req.requestData()
    req.setAjaxDone(function(data) {
      console.log(data)
    })
