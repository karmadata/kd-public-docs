# KarmaData.Util.Client - .Net Client for accessing KD API

## Usage
* NuGet V3 - [https://www.myget.org/F/karmadata-util-client/api/v3/index.json](https://www.myget.org/F/karmadata-util-client/api/v3/index.json)
* NuGet V2 - [https://www.myget.org/F/karmadata-util-client/api/v2](https://www.myget.org/F/karmadata-util-client/api/v2)

## Documents
* [Quick Examples](#examples)
* [Detailed Documents](https://github.com/karmadata/kd-public-docs/edit/master/kdcsharp/3.1/api/README.md)
* [Release Notes](https://github.com/karmadata/kd-public-docs/edit/master/kdcsharp/3.1/releasenotes.md)

## Examples
KarmaData provides a versatile API to access our database of healthcare data. Here are examples of how to use the .Net library to access KD API, starting from the simplest.

### Example 1: retrieving a random list of 10 physicians

```cs
// initialize client
var apikey = '-----';   // Please obtain API key by contacting KarmaData
var client = KdClient.ApiClinet(apikey, 'https://api.karmadata.com');

// create request and query API
var query = KdQuery.Search(KdHealthcareEntity.KdPhysician)
    .StartRow(1, 10);
var result = client.Request2Objects<JObject>(query).Result;

if (result.IsSuccessStatusCode)
{
    Console.WriteLine("total: {0}, returned: {1}", result.Count, result.Entities.Count);
    foreach (var row in result.Entities) Console.Write(row);
}
```

### Example 2: retrieving physicians that are female sole proprietors (using filters)

```cs
// initialize client
var apikey = '-----';   // Please obtain API key by contacting KarmaData
var client = KdClient.ApiClinet(apikey, 'https://api.karmadata.com');

// create request and query API
var query = KdQuery.Search(KdHealthcareEntity.KdPhysician)
    .StartRow(1, 10)
    .FilterGroup()
    .And(KdHealthcareEntity.KdPhysician, "Gender", "String", KdRequestOperator.Eq, "Female")
    .And(KdHealthcareEntity.KdPhysician, "IsSoleProprietor", "Boolean", KdRequestOperator.Eq, true);
var result = client.Request2Objects<JObject>(query).Result;

if (result.IsSuccessStatusCode)
{
    Console.WriteLine("total: {0}, returned: {1}", result.Count, result.Entities.Count);
    foreach (var row in result.Entities) Console.Write(row);
}
return true;

```

### Example 3: retrieving physicians that are female and belong to physician groups of size 5-10 (using FilterGroup)

```cs
// initialize client
var apikey = '-----';   // Please obtain API key by contacting KarmaData
var client = KdClient.ApiClinet(apikey, 'https://api.karmadata.com');

// create request and query API
// KdPhysicianGroup is not the same entity as KdPhysician, so we had to create a separate filter group
// to accomodate this new filter
var query = KdQuery.Search(KdHealthcareEntity.KdPhysician)
    .StartRow(1, 10)
    .FilterGroup()
    .And(KdHealthcareEntity.KdPhysician, "Gender", "String", KdRequestOperator.Eq, "Female")
    .FilterGroup()      // a new filter group
    .And(KdHealthcareEntity.KdPhysicianGroup, "NumberOfPhysicians", "Number", KdRequestOperator.Between, 5, 10);
var result = client.Request2Objects<JObject>(query).Result;

if (result.IsSuccessStatusCode)
{
    Console.WriteLine("total: {0}, returned: {1}", result.Count, result.Entities.Count);
    foreach (var row in result.Entities) Console.Write(row);
}
return true;
```

### Example 4: retrieve physicians that are sole proprietors and sort by graduation year

```cs
// initialize client
var apikey = '-----';   // Please obtain API key by contacting KarmaData
var client = KdClient.ApiClinet(apikey, 'https://api.karmadata.com');

// create request then chain the OrderBy at the end
var query = KdQuery.Search(KdHealthcareEntity.KdPhysician)
    .StartRow(1, 10)
    .FilterGroup()
    .And(KdHealthcareEntity.KdPhysician, "IsSoleProprietor", "Boolean", KdRequestOperator.Eq, true)
    .OrderBy("GraduationYear", false);
var result = client.Request2Objects<JObject>(query).Result;

if (result.IsSuccessStatusCode)
{
    Console.WriteLine("total: {0}, returned: {1}", result.Count, result.Entities.Count);
    foreach (var row in result.Entities) Console.Write(row);
}
return true;
```
