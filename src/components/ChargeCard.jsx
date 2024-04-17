import React, { useState } from "react";
// import atown from "../images/atcc2.png";
import { useDispatch, useSelector } from 'react-redux';


const ChargeCardModal = ({ showChargeCardModal, setChargeCardModal }) => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');

    const dispatch = useDispatch();


    const handleChange = (e) => {
        e.preventDefault()
        setChargeCardModal(!showChargeCardModal)
    }


    const handleApplication = () => {

        const newApplication = {
            fullName: fullName,
            email: email,
            address: address,
            city: city,
            state: state,
            zipCode: zipCode
        }

        dispatch(createApplication(newApplication))

        alert('Thank you for applying! Your charge limit is $500.00')
        setFullName('')
        setEmail('')
        setAddress('')
        setCity('')
        setState('')
        setZipCode()


        // console.log(newApplication, 'this is new application')
        // setChargeCardModal(false)
    }

    return (


        <div className="chargeCard-background">
            <span onClick={() => setChargeCardModal(false)} className="closeChargeCard">x</span>

            <div className="chargeCardModal">
                <label htmlFor="fullname">full name</label>
                <input type="text" id="fullname" className="billInput" placeholder="name on card"
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

                <button type="submit" className="applyBtn" onClick={handleApplication}>apply!</button>
            </div>

        </div>

    )
}

export default ChargeCardModal