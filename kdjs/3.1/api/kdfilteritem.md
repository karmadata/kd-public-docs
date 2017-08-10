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

