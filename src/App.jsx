import React, { useState } from 'react'
import Header from './components/navbar/HeaderView.jsx'
import AppRoutes from './Route/Route.jsx';

const App = () => {
  const [theme,setTheme] = useState('light');

  return (
    <div className='main-container'>
      <Header/>
      <AppRoutes/>
    </div>
    
  )
}

export default App
