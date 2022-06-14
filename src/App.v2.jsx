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

  // nagyon kesobb jon a "selected options"
  // akkor mar nem tudja beallitani a defaultValue-t

  return (
    <div className="App">
        <Select
            isMulti
            options={allOptions}
            defaultValue={selectedOptions}
            onChange={e => console.log(e)}
        />
    </div>
  );
}

export default App;
