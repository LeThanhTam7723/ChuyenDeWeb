import React, { useState } from 'react'
import LoginPageUi from './pages/LoginPage/view/LoginPageView.jsx'

const App = () => {
  const [theme,setTheme] = useState('light');

  return (
    <div className='container'>
      <LoginPageUi/>
    </div>
    
  )
}

export default App
