import CustomTable from './components/CustomTable'
import columns from './data/columns'
import rows from './data/rows'

function App() {
  const tableColumns = columns
  const tableRows = rows

  return (
    <>
      <br />
      <div className='container'>
        <CustomTable
          tableColumns={tableColumns}
          tableRows={tableRows}
        />
      </div>
    </>
  )
}

export default App
