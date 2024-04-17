import React, { useState } from "react";
import MenuModal from './components/MenuModal';
import LearnModal from './components/LearnModal';
import logo from './images/logo.png';
import Cart from './components/Cart';
import WatchModal from './components/WatchModal';


const Home = ({ showCartModal, setShowCartModal }) => {

    const [showWatchModal, setShowWatchModal] = useState(false)

    const getCartModal = (e) => {
        e.preventDefault()
        setShowCartModal(!showCartModal)
    }

    const getWatchModal = (e) => {
        e.preventDefault()
        setShowWatchModal(!showWatchModal)
    }

    return (

        <div className="landingContainer">

            <div className="navContainer">
                <br />
                <div>
                    <button className="cartBtn" onClick={getCartModal}>&#128722;</button>
                    {showCartModal &&
                        <Cart
                            showCartModal={showCartModal} 
                            setShowCartModal={setShowCartModal}
                        />}
                </div>

                <MenuModal
                    showCartModal={showCartModal} 
                    setShowCartModal={setShowCartModal}
                />
                <br />
                
                <LearnModal />
                <br />
                <div>
                    <button className="watchBtn" onClick={getWatchModal}>watch live!</button>
                    {showWatchModal && <WatchModal showWatchModal={showWatchModal} setShowWatchModal={setShowWatchModal} />}
                </div>

            </div>

            <div className="logoContainer">
                <img src={logo} className='logo' />
            </div>

            <p className="footer"> open daily 8am - noon  |  33 waikiki beach way, oahu</p>
        </div>



    )
}

export default Home
