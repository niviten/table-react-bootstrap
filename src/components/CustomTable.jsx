import { useState } from 'react'

function CustomTable({ tableDetails, tableRows, tableColumns }) {
  const [ showSearch, setShowSearch ] = useState(false)

  const isColumnsSearchable = tableColumns.some(column => column.isSearchable)

  function columnClickHandler(column) {
    console.log('clicked column', column)
  }

  return (
    <>
      <h4>Table name</h4>
      <hr />
      { (showSearch) ? 'show search' : 'hide search' } <span>&nbsp; - &nbsp;</span>
      { (isColumnsSearchable) ? 'columns searchable' : 'columns not searchable' }
      <hr />
      <div className='table-responsive'>
        <table className='table table-stripped table-hover table-bordered'>
          <thead className='table-light'>
            <tr>
              <td colSpan={tableColumns.length}>
                <button
                  className='btn btn-light'
                  data-bs-toggle='tooltip'
                  data-bs-placement='right'
                  title='Search'
                  onClick={() => setShowSearch(!showSearch)}
                >
                  <i className="las la-search"></i>
                </button>
                <button
                  className='btn btn-light'
                  data-bs-toggle='tooltip'
                  data-bs-placement='right'
                  title='Delete'
                >
                  <i className="las la-trash la-lg"></i>
                </button>
              </td>
            </tr>
          </thead>
          <thead className='table-dark'>
            <tr>
              {
                tableColumns.map((column, columnIndex) => {
                  return (
                    <th
                      key={columnIndex}
                      onClick={() => columnClickHandler(column)}
                    >
                      { column.columnDisplayName }
                    </th>
                  )
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              (isColumnsSearchable && showSearch)
              ? (
                <tr>
                  {
                    tableColumns.map((column, columnIndex) => {
                      if (!column.isSearchable) {
                        return <td key={columnIndex}>&nbsp;</td>
                      }
                      return (
                        <td
                          key={columnIndex}
                        >
                          <input type='text' />
                        </td>
                      )
                    })
                  }
                </tr>
              )
              : <></>
            }
            {
              tableRows.map((row, rowIndex) => {
                return (
                  <tr key={rowIndex}>
                    {
                      row.map((cell, cellIndex) => {
                        return (
                          <td key={cellIndex}>
                            { cell }
                          </td>
                        )
                      })
                    }
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default CustomTable
