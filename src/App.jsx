import React, { useState } from 'react'
import Navbar from './assets/components/navbar/navbar'
import HomePage from './assets/pages/homepage/homepage'

const App = () => {
  const [theme,setTheme] = useState('light');

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <HomePage/>
    </div>
    
  )
}

export default App
