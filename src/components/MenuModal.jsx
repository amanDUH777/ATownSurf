import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import boardText from "../images/boardText.png";
import apparel from "../images/apparel.png";
import extras from "../images/extras.png";
import MenuMap from "./MenuMap";
// import cartItems from "./cartItem";
// import boards from './cartItem';
import { createCart } from '../features/cart/cartSlice';
import { getProducts } from "../features/products/productSlice";

const MenuModal = ({ showCartModal, setShowCartModal }) => {

    const dispatch = useDispatch();

    // const { amount, total} = useSelector((state) => state.cartItems)

    const { products } = useSelector((state) => state.product)


    const [showModal, setShowModal] = useState(false)
    const [boardList, setBoardList] = useState([])
    const [apparelList, setApparelList] = useState([])
    const [extrasList, setExtrasList] = useState([])

    useEffect(() => {
        
        dispatch(getProducts())
        // console.log(products)
        let boardList = products.filter((item) =>
            item.category === 'boards')
        setBoardList(boardList)
        // console.log(boardList, 'board')
        let apparelList = products.filter((item) =>
            item.category === 'apparel')
        setApparelList(apparelList)
        let extrasList = products.filter(item =>
            item.category === 'extras')
        setExtrasList(extrasList)

    }, [dispatch, products])

    const getModal = (e) => {
        e.preventDefault()
        setShowModal(!showModal)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setShowModal(false)
        setShowCartModal(true)
    }

    const addToCart = (id, price, title, description, img) => {

        const addItem = {
            id: id,
            title: title,
            price: price,
            description: description,
            img: img,
            amount: 1
            
        }
        
        dispatch(createCart(addItem))
        
        console.log(addItem, 'addItem')
    }


    return (
        <>
            <button type='button' className="menuBtn" onClick={getModal}>shop</button>

            {showModal && (
                <div className="menuModalContainer-background">
                    <span onClick={() => setShowModal(false)} className="closeMenuModal">
                        &times;
                    </span>

                    <div className="menuModalContainer">
                        <div className="boardContainer">

                            {/* boards text - no overlay */}
                            <div>
                                <img className="boardText" src={boardText} />
                            </div>

                            {/* this is where we are going to map cart items */}
                            <div className='row'>
                                {boardList.map((item, index) => {
                                    return (
                                        <div key={index} className='contain'>
                                            <img className="long" src={item.img} />

                                            <div className="overlay">
                                                <div className="overlayText">
                                                    <h3>{item.title}</h3>
                                                    <p>{item.description}</p>
                                                    <h3 className="price">${item.price.toFixed(2)}</h3>
                                                </div>

                                                <div className="addBtnContainer">
                                                    <button className="addBtn" onClick={() => addToCart(item._id, item.price, item.title, item.description, item.img)}>add to cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            {/* boards text - no overlay */}
                            <div></div>
                        </div>

                        <hr className="hrMenu" />
                        <br />

                        <div className="apparelContainer">

                            {/* apparel text - no overlay */}
                            <div>
                                <img className="boardText" src={apparel} />
                            </div>

                            <div className="row">
                                {apparelList.map((item, index) => {
                                    return (
                                        <div key={index} className='contain'>
                                            <img className="long" src={item.img} />

                                            <div className="overlay">
                                                <div className="overlayText">
                                                    <h3>{item.title}</h3>
                                                    <p>{item.description}</p>
                                                    <h3 className="price">${item.price.toFixed(2)}</h3>
                                                </div>

                                                <div className="addBtnContainer">
                                                    <button className="addBtn" onClick={() => addToCart(item._id, item.price, item.title, item.description, item.img)}>add to cart</button>
                                                </div>
                                            </div>

                                        </div>
                                    )
                                })}

                            </div>
                            {/* apparel text - no overlay */}
                            <div></div>
                        </div>
                        <br />
                        <hr className="hrMenu" />
                        <br />
                        <div className="extrasContainer">
                            {/* apparel text - no overlay */}
                            <div>
                                <img className="boardText" src={extras} />
                            </div>
                            <div className="row">
                                {extrasList.map((item, index) => {
                                    return (
                                        <div key={index} className='contain'>
                                            <img className="long" src={item.img} />

                                            <div className="overlay">
                                                <div className="overlayText">
                                                    <h3>{item.title}</h3>
                                                    <p>{item.description}</p>
                                                    <p>${item.price.toFixed(2)}</p>
                                                </div>

                                                <div className="addBtnContainer">
                                                    <button className="addBtn" onClick={() => addToCart(item._id, item.price, item.title, item.description, item.img)}>add to cart</button>
                                                </div>

                                            </div>
                                        </div>

                                    )
                                })}

                            </div>
                            {/* extras text - no overlay */}
                            <div></div>

                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <hr className="hrMenu" />
                        <button type="submit" className="payModalBtn" onClick={handleSubmit}>pay now</button>
                        <br />
                        {/* <hr className="hrMenu" /> */}

                    </div>
                </div>
            )
            }
        </>
    )
}
export default MenuModal
