import React from 'react'
import './navbar.css'
import logo_light from '../../images/header/logo-black.png'
import logo_dark from '../../images/header/logo-white.png'
import search_icon_light from '../../images/header/search-w.png'
import search_icon_dark from '../../images/header/search-b.png'
import toogle_light from '../../images/header/night.png'
import toogle_dark from '../../images/header/day.png'

const Navbar = ({theme, setTheme}) => {
  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <div className={`navbar ${theme}`}>
      <img src={theme == 'light' ? logo_dark : logo_light} alt="" className='logo'></img>
      <ul>
        <li>Home</li>
        <li>Product</li>
        <li>Feature</li>
        <li>About</li>
      </ul>
      <div className='search-box'>
        <input type='text' placeholder='Search' />
        <img src={theme =='light' ? search_icon_dark : search_icon_light}></img>
      </div>
      <img onClick={()=>{toggle_mode()}} src={theme =='light' ? toogle_dark : toogle_light} alt='' className='toggle-icon' />
    </div>
  )
}
export default Navbar
