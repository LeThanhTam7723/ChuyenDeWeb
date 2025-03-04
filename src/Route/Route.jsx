import { Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage/view/HomePageView.jsx';
import LoginPageUi from '../pages/LoginPage/view/LoginPageView.jsx';
import ShopPage from '../pages/ShopPage/view/ShopPageView.jsx';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            {/* <Route path="/pages" element={<Pages />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />  */}
        </Routes>
    );
}

export default AppRoutes;
