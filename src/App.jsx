import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import Learn from './components/LearnModal';
import WatchModal from './components/WatchModal';
import Cart from './components/Cart';
import ProductAdd from "./components/ProductAdd.jsx";
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals } from './features/cart/cartSlice';



function App() {
    const { cartItems } = useSelector((store) => store.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculateTotals());
    }, [cartItems]);

    const [showCartModal, setShowCartModal] = useState(false)

    return (
        <>
            <Router>
                {/* <ProductAdd /> */}
                <Routes>
                    <Route path='/' element={
                        <Home
                            showCartModal={showCartModal} 
                            setShowCartModal={setShowCartModal}
                        />} />
                    <Route path='/Menu' element={<Menu />} />
                    <Route path='/learn' element={<Learn />} />
                    <Route path='/WatchModal' element={<WatchModal />} />
                    <Route path='/Cart' element={<Cart />} />
                    <Route path='/product-add' element={<ProductAdd />} />

                </Routes>
            </Router>



        </>
    );
}

export default App;
