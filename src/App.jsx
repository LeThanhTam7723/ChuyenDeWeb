import React, { useState } from 'react'
import LoginPageUi from '../src/assets/pages/LoginPage/view/LoginPageView'

const App = () => {
  const [theme,setTheme] = useState('light');

  return (
    <div className='container'>
      <LoginPageUi/>
    </div>
    
  )
}

export default App
