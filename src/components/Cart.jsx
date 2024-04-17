import React, { useState } from "react";
import atown from "../images/atcc2.png";
import { useDispatch, useSelector } from 'react-redux';
import { createCustomer } from "../features/customer-purchase/customerSlice";
import { clearCart } from "../features/cart/cartSlice";
import { ChevronDown, ChevronUp } from '../icons';
import CartItem from "./CartItems";



const CartModal = ({ showCartModal, setShowCartModal }) => {

    const [showDeliveryDiv, setShowDeliveryDiv] = useState(false)
    // const [checked, setChecked] = useState('checked')
    const [divChecked, setDivChecked] = useState('divChecked')


    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expMonth, setExpMonth] = useState('');
    const [expYear, setExpYear] = useState('');
    const [cvv, setCvv] = useState('');
    const [chargeCheckBox, setChargeCheckBox] = useState(false)


    const [delAddress, setDelAddress] = useState('')
    const [delCity, setDelCity] = useState('')
    const [delState, setDelState] = useState('')
    const [delZip, setDelZip] = useState('')



    const dispatch = useDispatch();



    const { cartItems, total, amount } = useSelector((state) => state.cart)

    const getDeliveryDiv = () => {
        setShowDeliveryDiv(!showDeliveryDiv)
    }
    // console.log(cartItems, 'cartItems on Cart.jsx')


    // const handleChange = (e) => {
    //     e.preventDefault()
    //     setShowCartModal(!showCartModal)
    // }

    // const handleChange = (e) => {
    //     e.preventDefault()
    // }

    const handlePurchase = (e) => {
        e.preventDefault()
        const newPurchase = {
            fullName: fullName,
            email: email,
            address: address,
            city: city,
            state: state,
            zipCode: zipCode,
            cardName: cardName,
            cardNumber: cardNumber,
            expMonth: expMonth,
            expYear: expYear,
            cvv: cvv,
            chargeCard: chargeCheckBox,
            delAddress: delAddress,
            delCity: delCity,
            delState: delState,
            delZip: delZip,
        }

        dispatch(createCustomer(newPurchase))
        console.log(newPurchase, 'this is a new purchase')
        setShowCartModal(false)
        dispatch(clearCart(cartItems))

        alert('Thanks for shopping with Atown Surf! Your order will be processed and shipped out soon!')
        setFullName('')
        setEmail('')
        setAddress('')
        setCity('')
        setState('')
        setZipCode('')
        setCardName('')
        setCardNumber('')
        setExpMonth('')
        setExpYear('')
        setCvv('')
        setChargeCheckBox('')


        // const handleChange = (e) => {
        //     e.preventDefault()
        //     const DeliveryAddress = {


        //     }

        //     // dispatch(createDeliveryAddress(DeliveryAddress))
        //     // console.log(DeliveryAddress, 'this is the delivery address')
        //     // setShowDeliveryModal(false)
        //     // dispatch(clearCart(cartItems))

        //     alert('This is the address your package will be delivered to')
        //     setDelAddress('')
        //     setDelCity('')
        //     setDelState('')
        //     setDelZip('')
        // }


    }
    return (
        <>

            <div className="cartContainer-background">
                <span onClick={() => setShowCartModal(false)} className="closeCart">&times;</span>

                <div className="cartModal">
                    <div className="row">                   
                        <div className="col-75">

                            <div className="row">

                                <div className="col-50" id="col-50Pmt">
                                    <h3 className="cartHeader">payment</h3>
                                    <br />
                                    <label htmlFor="fname">we accept:</label>

                                    <div className="iconContainer">
                                        <span className="ccname">Atown Surf Charge Card, <br />visa,  mastercard,  amex</span>
                                    </div>

                                    <br />
                                    <label htmlFor="cname">name on card</label>
                                    <input type="text" id="cname" className="billInput" placeholder="first middle last"
                                        value={cardName} onChange={(e) => setCardName(e.target.value)} required />

                                    <label htmlFor="ccnum">card number</label>
                                    <input type="text" id="ccnum" className="billInput" placeholder="1111-2222-3333-4444"
                                        value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />

                                    <label htmlFor="expmonth">exp month</label>
                                    <input type="text" id="expmonth" className="billInput" placeholder="july"
                                        value={expMonth} onChange={(e) => setExpMonth(e.target.value)} required />

                                    <div className="row">
                                        <div className="col-50">
                                            <label htmlFor="expyear">exp year</label>
                                            <input type="text" id="expyear" className="billInput" placeholder="2025"
                                                value={expYear} onChange={(e) => setExpYear(e.target.value)} required />
                                        </div>
                                        <div className="col-50">
                                            <label htmlFor="cvv">cvv</label>
                                            <input type="text" id="cvv" className="billInput" placeholder="333"
                                                value={cvv} onChange={(e) => setCvv(e.target.value)} required />
                                        </div>
                                    </div>
                                </div>



                                <div className="col-50">
                                    <h3 className="cartHeader">billing address</h3>

                                    <br />

                                    <div>

                                        <label htmlFor="fullname">full name</label>
                                        <input type="text" id="fullname" className="billInput" placeholder="full name"
                                            value={fullName} onChange={(e) => setFullName(e.target.value)} required />

                                        <label htmlFor="email">email</label>
                                        <input type="text" id="email" className="billInput" placeholder="name@email.com"
                                            value={email} onChange={(e) => setEmail(e.target.value)} required />

                                        <label htmlFor="address">address</label>
                                        <input type="text" id="address" className="billInput" placeholder="123 w. 33rd street"
                                            value={address} onChange={(e) => setAddress(e.target.value)} required />

                                        <label htmlFor="city">city</label>
                                        <input type="text" id="city" className="billInput" placeholder="honolulu"
                                            value={city} onChange={(e) => setCity(e.target.value)} required />
                                        <div className="row">
                                            <div className="col-50">
                                                <label htmlFor="state">state</label>
                                                <input type="text" id="state" className="billInput" placeholder="hi"
                                                    value={state} onChange={(e) => setState(e.target.value)} required />
                                            </div>
                                            <div className="col-50">
                                                <label htmlFor="zip">zip</label>
                                                <input type="text" id="zip" className="billInput" placeholder="70112"
                                                    value={zipCode} onChange={(e) => setZipCode(e.target.value)} required />
                                            </div>
                                        </div>
                                    </div>

                                </div>



                            </div>
                            <div className="deliveryDiv">

                                <div>
                                    <input id='box' onClick={getDeliveryDiv} className='checked' type="checkbox" checked={divChecked} onChange={() => setDivChecked(!divChecked)} />
                                    <label htmlFor='box' className="box">Delivery address same as billing</label><br></br>
                                </div>
                                {showDeliveryDiv &&
                                    <div className='deliveryDiv'>
                                        <div className='row'>
                                            <div className='col-50'>
                                                <div className='row'>
                                                    <div className='col-25'>
                                                        <label htmlFor='deliveryAddress'>Delivery Address</label>
                                                        <input className="billInput" type="text" id='deliveryAddress' placeholder="123 Main St"
                                                            value={delAddress} onChange={(e) => setDelAddress(e.target.value)} required />

                                                        <label htmlFor='deliveryCity'>Delivery City</label>
                                                        <input className="billInput" type="text" id='deliveryCity' placeholder="Nowhere"
                                                            value={delCity} onChange={(e) => setDelCity(e.target.value)} required />

                                                        <div className="row">
                                                            <div className='col-50'>
                                                                <label htmlFor='deliveryState'>Delivery State</label>
                                                                <input className="billInput" type="text" id='deliveryState' placeholder="AZ"
                                                                    value={delState} onChange={(e) => setDelState(e.target.value)} required />

                                                            </div>
                                                            <div className='col-50'>
                                                                <label htmlFor='deliveryZip'>Delivery Zip</label>
                                                                <input className="billInput" type="text" id='deliveryZip' placeholder="85051"
                                                                    value={delZip} onChange={(e) => setDelZip(e.target.value)} required />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }


                            </div>
                            <div>
                                <button type="submit" className="payModalBtn" onClick={(e) => handlePurchase(e)}>
                                    continue to checkout
                                </button>
                            </div>
                        </div>

                        <div className="col-25">
                            <div className="tallyContainer">
                                <h4>
                                    my cart<span className="price">{amount}</span>
                                </h4>

                                {cartItems.map((item) => {
                                    return <CartItem key={item.id} {...item} total={total} />
                                })}

                                <hr />
                                <p>
                                    total:
                                    <span className="price">
                                        ${total.toFixed(2)}
                                    </span>
                                </p>
                            </div>



                            <div className="logoCCContainer">

                                <label>
                                    <input type="checkbox" className="applyCC" value={chargeCheckBox} onClick={() => setChargeCheckBox(true)} />

                                    Atown Surf Charge Card
                                    <br />
                                    apply and use now <br />
                                    up to $500</label>
                                <img className="logoCC" src={atown} />

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}


export default CartModal;