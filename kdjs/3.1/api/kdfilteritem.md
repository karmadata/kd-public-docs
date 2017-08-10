# kd.js - Core library for KarmaData API
[![npm package](https://nodei.co/npm/karmadata.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/karmadata/)


## Usage
* React - `npm install karmadata`
* CDN - [http://cdn.karmadata.com/js/3.1.7/kd.js](http://cdn.karmadata.com/js/3.1.7/kd.js)


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
### kd.FilterItem()
Creates a filter. Filters are restrictive criteria used to narrow a search.

`kd.FilterItem(entity, property, datatype, operation, values)`
* `entity` - the entity to filter on, such as KdPhysician, KdHospital
* `property` - the property of the entity to filter on, such as Age, Gender, NumBeds
* `datatype` - the data type of the property. Age would be Number, while Gender would be String. Possibilities are: String, Number, Boolean, Date
* `operation` - what type of filter operation it is. Possibilities are: Eq, NotEq, Gt, Gte, Lt, Lte, Between
* `values` - an array of values for this filter

Example 1: Narrows result to Acute Care Hospitals only

    kd.FilterItem("KdHospital", "HospitalType", "String", "Eq", ["Acute Care Hospitals"])

Example 2: Only hospitals with nurse rating >= 75

    kd.FilterItem("KdHospital", "NurseRating", "Number", "Gte", [75])

Example 3: Only hospitals with high ratings between 60 and 80

    kd.FilterItem("KdHospital", "PatientsGivingHighRating", "Number", "Between", [60, 80])

#### A filter needs to be added to a request to take effect

    var filter = kd.FilterItem("KdHospital", "PatientsGivingHighRating", "Number", "Between", [60, 80])
    req.addFilterItem(filter)

