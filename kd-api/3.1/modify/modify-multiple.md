# Modifying multiple records

Modify request can accepts multiple queries at once to affect multiple record. The whole transaction is atomic, so no changes are made unless all operations succeed.

### Example 1 - Insert multiple employees

```javascript
[
  {
    "Operation": "Insert",
    "Entity": "Employee",
    "Values": {
      "CompanyId": "company1",
      "EmployeeId": "334455",
      "Name": "John Smith"
    }
  },
  {
    "Operation": "Insert",
    "Entity": "Employee",
    "Values": {
      "CompanyId": "company1",
      "EmployeeId": "449988",
      "Name": "Alice Wonderland"
    }
  }
]
```

### Example 2 - Insert a company plus its employees

```javascript
[
  {
    "Operation": "Insert",
    "Entity": "Company",
    "Values": {
      "CompanyId": "company1",
      "Name": "ACME, Inc."
    }
  },
  {
    "Operation": "Insert",
    "Entity": "Employee",
    "Values": {
      "CompanyId": "company1",
      "EmployeeId": "334455",
      "Name": "John Smith"
    }
  },
  {
    "Operation": "Insert",
    "Entity": "Employee",
    "Values": {
      "CompanyId": "company1",
      "EmployeeId": "449988",
      "Name": "Alice Wonderland"
    }
  }
]
```

### Example 3 - Update a company and employee list

```javascript
[
  {
    "Operation": "Update",
    "Entity": "Company",
    "Values": {
      "CompanyId": "company1",
      "Name": "ACME too, Inc."
    }
  },
  {
    "Operation": "Insert",
    "Entity": "Employee",
    "Values": {
      "CompanyId": "company1",
      "EmployeeId": "334455",
      "Name": "John Smith"
    }
  },
  {
    "Operation": "Delete",
    "Entity": "Employee",
    "Values": {
      "CompanyId": "company1",
      "EmployeeId": "449988"
    }
  }
]
```
Note: `Delete` operation is based on the primary key(s) of the table, which can be one column or a combination of columns, depending on the table involved.

