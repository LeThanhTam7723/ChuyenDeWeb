import './LoginPageView.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from  '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion';

function ShootingStar() {
  return (
    <motion.div
      initial={{
        x: `${Math.random() * 100}vw`, // Vị trí ngẫu nhiên theo chiều ngang
        y: `-10vh`, // Bắt đầu từ phía trên màn hình
        opacity: 0, // Ban đầu ẩn
      }}
      animate={{
        x: `${Math.random() * 100}vw`, // Di chuyển ngang ngẫu nhiên
        y: '110vh', // Rơi xuống phía dưới màn hình
        opacity: [0, 1, 0], // Hiện lên rồi mờ dần
      }}
      transition={{
        duration: Math.random() * 3 + 2, // Thời gian di chuyển ngẫu nhiên từ 2-5 giây
        repeat: Infinity, // Lặp lại vô hạn
        ease: 'linear', // Di chuyển đều
      }}
      style={{
        position: 'absolute',
        width: '2px', // Kích thước cố định
        height: '2px', // Kích thước cố định
        background: 'white',
        borderRadius: '50%',
        boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.8)', // Tạo hiệu ứng sáng
      }}
    />
  );
}

const loginPageUi = function(){
    return (
        <div className="main">
            <div className="decorate" style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        background: '#000',
        overflow: 'hidden',
      }}>
                {Array.from({ length: 50 }).map((_, index) => (
        <ShootingStar key={index} />
      ))}
            <div className='main-decorate'> 
                <h1>Welconme to Sweetdeli</h1>
                <p>Hãy đăng nhập vào tài khoản đã đăng ký trước đó</p>
            </div>
            </div>
            <div className="login">
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

                </div>
            </div>
        </div>
    )
    
}
export default loginPageUi;