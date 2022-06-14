import React, { useEffect, useState } from 'react'
import Select from 'react-select'

function App() {

  const [ allOptions, setAllOptions ] = useState(null)
  const [ selectedOptions, setSelectedOptions ] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setAllOptions([
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ])
    }, 2000)

    setTimeout(() => {
      setSelectedOptions([
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
      ])
    }, 3000)
  })

  // 

  return (
    <div className="App">
      {
        selectedOptions && allOptions && (
          <Select
            isMulti
            onChange={e => console.log(e)}
            options={allOptions}
            defaultValue={selectedOptions}
            />
        )
      }
    </div>
  );
}

export default App;
