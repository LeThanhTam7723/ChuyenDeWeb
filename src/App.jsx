import React, { useState } from 'react'
import Header from './components/navbar/HeaderView.jsx'
// import LoginPageUi from './pages/LoginPage/view/LoginPageView.jsx'
import HomePage from './pages/HomePage/view/HomePageView.jsx'

const App = () => {
  const [theme,setTheme] = useState('light');

  return (
    <div className='main-container'>
      <Header/>
      <HomePage/>
      {/* <LoginPageUi/> */}
    </div>
    
  )
}

export default App
