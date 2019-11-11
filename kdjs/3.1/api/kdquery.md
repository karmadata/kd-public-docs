## kd.Query()
Allows fluent construction of a KD request, e.g.

```js
let query = kd.Query('Search', 'KdCounty')
  .setUrlBase('https://api.karmadata.com')
  .setApiKey('-----') // Please obtain API key by contacting KarmaData
  .rows(1, 10)
  .where([
    FilterItem('KdCounty', 'GeoName', 'String', 'Eq', ['Plymouth'])
  ])
  .andExists({mainEntity: 'KdCounty'}, [
    FilterItem('KdState', 'GeoName', 'String', 'Eq', ['Massachusetts'])
  ]);
query.requestData()
  .then((data) => {
    console.log(data);
  });
```

### `kd.Query(action, entity)`
Starts a query builder for a KD request
* `action`: request type `<Search|Select|Group>`
* `entity`: if it's a `Search` request, indicates which entity to search on

## Member methods

### `.rows(start: number, end: number)`
Paginates the result, returning from `start` row to `end` row
* `start`: the row number that pagination starts
* `end` the row number that pagination ends, inclusively

### `.where(filters: FilterItem[])`
Applies filters to this request
* `filters`: the list of filters to apply

### `.sortBy(sortOrderItems: SortOrderItem[])`
Applies sorting to this request

### `.relatedEntities(entities: string[])`
Also retrieves related entities, only for `Search` requests

### `.setMaxCacheAge(age)`
Retrieves this request from server side cache if possible
* `age`: only retrieve from cache if the cached item is younger than indicated by `age` seconds

### `.setContext(context)`
Sets a context string on the request URL
* `context`: it's meant to be a comment string to help the developer identify the purpose of the request. The API ignores it

```js
let query = kd.Query('Select')
  .setUrlBase('https://api.karmadata.com')
  .setApiKey('-----') // Please obtain API key by contacting KarmaData
  .rows(1, 100)
  .setMaxCacheAge(60)      // retrieve from cache if not older than 60 seconds
  .setContext('select-physician-and-group')  // add comment to this request
  .select([
      kd.SelectItem('Select', 'KdPhysicianGroup', 'KdLabel', 'String'),
      kd.SelectItem('Select', 'KdPhysician', 'Name.Text', 'String'),
      kd.SelectItem('Select', 'KdPhysician', 'IsClinicalInvestigator', 'Number'),
  ])
  .where([
      kd.FilterItem('KdPhysicianGroup', 'PracticeState', 'String', 'Eq', ['Massachusetts', 'California']),
      kd.FilterItem('KdPhysicianGroup', 'Popularity', 'Number', 'Gte', [1]),
  ]);
 
query.requestData()
  .then((data) => {
    console.log(data);
  });
```
