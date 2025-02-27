import './LoginPageView.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from  '@fortawesome/free-brands-svg-icons'
import ParticlesComponent from '../../../components/background/ParticlesComponent';

const loginPageUi = function(){
    return (
        <div className="main">
          <ParticlesComponent />
            <div className="decorate">
              <div className='main-decorate'> 
                  <h1>Welconme to Sweetdeli</h1>
                  <p>Hãy đăng nhập vào tài khoản đã đăng ký trước đó</p>
              </div>
            </div>
            <div className="main-form">
                <div className='login-content'>
                    <h1>Welcome back!</h1>
                    <h2>Meet the good taste today</h2>

                    <form>
                        <label htmlFor="email">E-mail or phone number</label>
                        <input id="email" placeholder='Nhập tên email hoặc số điện thoại đã đăng ký'/>
                        
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" placeholder='Type your password'/>
                        
                        <a href="#">Forgot Password?</a>
                        <button type="submit">Sign in</button>
                    </form>

                    <div>
                        <p>or do it with orther account</p>
                        <ul>
                            <li><FontAwesomeIcon icon={faGoogle}/></li>
                            <li><FontAwesomeIcon icon={faFacebookF} /></li>
                        </ul>
                    </div>
                    <div className='signup_trans'>
                      <h4>ALready have an account</h4>
                      <a href="">Sign up</a>
                    </div>
                </div>
            </div>
        </div>
    )
    
}
export default loginPageUi;