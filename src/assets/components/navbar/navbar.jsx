import React from 'react'
import './navbar.css'
import logo_light from '../../images/header/logo-black.png'
import logo_dark from '../../images/header/logo-white.png'
import search_icon_light from '../../images/header/search-w.png'
import search_icon_dark from '../../images/header/search-b.png'
import toogle_light from '../../images/header/night.png'
import toogle_dark from '../../images/header/day.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';



const Navbar = ({theme, setTheme}) => {
  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <div className={`navbar ${theme}`}>
      <div className="navbar-left">
        <img src={theme == 'light' ? logo_dark : logo_light} alt="" className='logo'></img>
        <ul>
          <li>Trang chủ</li>
          <li>Cửa hàng</li>
          <li>Thông tin</li>
          <li>Liên hệ</li>
        </ul>
        <div className='search-box'>
          <input type='text' placeholder='Tìm kiếm' />
          <img src={theme =='light' ? search_icon_dark : search_icon_light}></img>
        </div>
        <div className='space'></div>
      </div>
      
      <div className="navbar-right">
        <ul className='menu'>
          <img onClick={()=>{toggle_mode()}} src={theme =='light' ? toogle_dark : toogle_light} alt='' className='toggle-icon' />
          <li><FontAwesomeIcon icon={faCartShopping} /></li>
          <li><FontAwesomeIcon icon={faLanguage} /></li>
          <li><FontAwesomeIcon icon={faHeart} /></li>
          <li><FontAwesomeIcon icon={faUser} /></li>
        </ul>
      </div>  
    </div>
  )
}
export default Navbar
