# KarmaData.Util.Client - .Net Client for accessing KD API

## Usage
* NuGet V3 - https://www.myget.org/F/karmadata-util-client/api/v3/index.json
* NuGet V2 - https://www.myget.org/F/karmadata-util-client/api/v2

## Documents
* [Quick Examples](#examples)
* [Detailed Documents](https://github.com/karmadata/kd-public-docs/edit/master/kdcsharp/3.1/api/README.md)
* [Release Notes](https://github.com/karmadata/kd-public-docs/edit/master/kdcsharp/3.1/releasenotes.md)

## Examples
KarmaData provides a versatile API to access our database of healthcare data. Here are examples of how to use the .Net library to access KD API, starting from the simplest.

### Example 1: retrieving a random list of 10 physicians

```c#
// initialize client
var apikey = '-----';   // Please obtain API key by contacting KarmaData
var client = KdClient.ApiClinet(apikey, 'https://api.karmadata.com');

// create request and query API
var query = KdQuery.Search(KdHealthcareEntity.KdPhysician);
var result = client.Request2Objects(string>(query).Result;

if (result.IsSuccessStatusCode)
{
  Console.WriteLine("total: {0}, returned: {1}", result.Count, result.Entities.Count);
  foreach (var row in result.Entities) Console.Write(row);
}
```

### Example 2: retrieving physicians that are female sole proprietors (using filters)

```js
// create filters
const filter1 = kd.FilterItem('KdPhysician', 'Gender', 'String', 'Eq', ['Female']);
const filter2 = kd.FilterItem('KdPhysician', 'IsSoleProprietor', 'Boolean', 'Eq', [true]);

// create request and add those filters
const request = kd.Request('Search', 'KdPhysician');
request.setUrlBase('https://api.karmadata.com');
request.setApiKey('-----'); // Please obtain API key by contacting KarmaData
request.addFilterItem(filter1);
request.addFilterItem(filter2);

// request data and wait for output
request.requestData();
request.setAjaxDone((data) => {
  console.log(data);
});
```

### Example 3: retrieving physicians that are female and belong to physician groups of size 5-10 (using FilterGroup)

```js
// create filters
const filter1 = kd.FilterItem('KdPhysician', 'Gender', 'String', 'Eq', ['Female']);
const filter2 = kd.FilterItem('KdPhysicianGroup', 'NumberOfPhysicians', 'Number', 'Between', [5, 10]);

// create request and add those filters
const request = kd.Request('Search', 'KdPhysician');
request.setUrlBase('https://api.karmadata.com');
request.setApiKey('-----'); // Please obtain API key by contacting KarmaData
request.addFilterItem(filter1)
const group = request.createFilterGroup('And');
request.addFilterItem(filter2, group);

// request data and wait for output
request.requestData();
request.setAjaxDone((data) => {
  console.log(data);
});
```

### Example 4: retrieve physicians that are sole proprietors and sort by graduation year

```js
// create filters
const filter = kd.FilterItem('KdPhysician', 'IsSoleProprietor', 'Boolean', 'Eq', [true]);

// create request and add those filters
const request = kd.Request('Search', 'KdPhysician');
request.setUrlBase('https://api.karmadata.com');
request.setApiKey('-----'); // Please obtain API key by contacting KarmaData
request.addFilterItem(filter);

// adds sorting, then request data and wait for output
request.addSortOrderItem('GraduationYear', 'desc');
request.requestData();
request.setAjaxDone((data) => {
  console.log(data);
});
```
