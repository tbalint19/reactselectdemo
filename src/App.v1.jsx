import React, { useState } from 'react'
import Select from 'react-select'

function App() {

  const [ allOptions, setAllOptions ] = useState([
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ])

  const [ selectedOptions, setSelectedOptions ] = useState([
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
  ])

  // nagyon basic pelda, mukodik

  return (
    <div className="App">
        <Select
            isMulti
            options={allOptions}
            defaultValue={selectedOptions}
            onChange={selectedItems => console.log(selectedItems)}
        />
    </div>
  );
}

export default App;
