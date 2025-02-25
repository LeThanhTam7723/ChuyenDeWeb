import React, { useState } from 'react'
import Navbar from './assets/components/navbar/navbar'

const App = () => {

  const [theme,setTheme] = useState('light');

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <h1>Hello</h1>
    </div>
  )
}

export default App
