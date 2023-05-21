const columns = []

function addColumn(columnName, columnDisplayName, isSearchable, isSortable) {
  columns.push({ columnName, columnDisplayName, isSearchable, isSortable })
}

addColumn('id', '#', false, false)
addColumn('name', 'Name', false, false)
// addColumn('name', 'Name', true, false)
addColumn('age', 'Age', false, false)
addColumn('phoneNumber', 'Phone Number', false, false)
addColumn('email', 'Email', false, false)
// addColumn('email', 'Email', true, false)

export default columns
