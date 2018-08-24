# Modify request

Accepts an array of operations that modify the database.

## Explanation

Modify request is a POST request. It accepts an array of queries. Each query can be either Insert, Delete, Update, or Merge. Each query also has a set of values that would be inserted/updated into the database.

## POST format

```
POST body = [Query, Query, Query ...]

Query = {
  "Operation": Insert|Delete|Update|Merge,
  "Entity": <entity to operate on>
  "Values": <the values to insert/update into this entity>
}

Values = {
  "Key1": "Value1",   // can be string, number, boolean, null etc.
  "Key2": "Value2",
  etc.
}
```

### Example 1 - Insert
Add a new employee into database

URL: `https://<API address>/modify?apikey=.....`

POST body
```
[
  {
    "Operation": "Insert",
    "Entity": "Employee",
    "Values": {
      "EmployeeId": "123456",
      "Name": "Isaac Newton",
      "Birthdate": "1642-12-25",
      "Publications": 2345
    }
  }
]
```

### Example 2 - Update
Update Newton's publication count

URL: `https://<API address>/modify?apikey=.....`

POST body
```
[
  {
    "Operation": "Update",
    "Entity": "Employee",
    "Values": {
      "EmployeeId": "123456",
      "Publications": 2400
    }
  }
]
```

### Example 3 - Delete
Remove a record by ID

URL: `https://<API address>/modify?apikey=.....`

POST body
```
[
  {
    "Operation": "Delete",
    "Entity": "Employee",
    "Values": {
      "EmployeeId": "123456"
    }
  }
]
```

## Advanced Topics
* [Batching multiple modify queries](modify-multiple.md)
* Primary Keys
* Merge operation
