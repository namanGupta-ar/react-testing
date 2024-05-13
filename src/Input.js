import React, { useState } from 'react'

const TestComponent = () => {
    const [data, setData] = useState('');
  return (
    <>
        <div>TestComponent</div>
        <input type='text' value={data} onChange={(e) => setData(e.target.value)} />
    </>
  )
}

export default TestComponent