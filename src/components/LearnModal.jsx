import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { createLearn } from "../features/learn/learnSlice";



const LearnModal = () => {

    const [showLearnModal, setShowLearnModal] = useState(false)
    const [name, setName] = useState('')
    const [people, setPeople] = useState(0)
    const [date, setDate] = useState('')
    const [message, setMessage] = useState('')
    const [workshops, setWorkshops] = useState('')

    const dispatch = useDispatch()
    console.log(workshops, 'workshops')

    const getLearnModal = (e) => {
        e.preventDefault()
        setShowLearnModal(!showLearnModal)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setShowLearnModal(false)

        const newLearn = {
            name: name,
            people: people,
            date: date,
            message: message,
            workshops: workshops
        }

        dispatch(createLearn(newLearn))
  
        
        alert('Thanks for surfing with us, we will see you soon!')
        setName('')
        setPeople(0)
        setDate('')
        setMessage('')
        setWorkshops('')

    }

    return (
        <>
            <button type='button' className="learnBtn" onClick={getLearnModal}>learn</button>

            {showLearnModal && (
                <div className="learnModalContainer-background">
                    <span onClick={() => setShowLearnModal(false)} className="closeLearnModal">&times;</span>

                    <form className="learnModalContainer">
                        < h1 >learn workshops</h1 >

                        <div className="learnList" >
                            <ul className="itemsList" >
                                <input type="checkbox" id="myCheckbox" value={workshops} onClick={() => setWorkshops('beginner $40/pp  9am-11am')} /> beginner $40/pp  9am-11am
                                <br />

                                <input type="checkbox" value={workshops} onClick={() => setWorkshops('advanced $60/pp 9am-11am')} /> advanced $60/pp 9am-11am
                            </ul>

                        </div>

                        <p className="boardRental">&#127940;includes board rental</p>

                        <h1>reserve your day for personalized learn</h1>

                        <div className="formList">
                            <input className="learnTextBox" type="text" placeholder="Name" required name="Name" value={name} onChange={(e) => setName(e.target.value)} />
                            <br />
                            <input className="learnTextBox" type="number" placeholder="How many people" required name="People" value={people} onChange={(e) => setPeople(e.target.value)} />
                            <br />
                            <input className="learnTextBox" type="date" placeholder="Date and time" required name="date" value={date} onChange={(e) => setDate(e.target.value)} />
                            <br />
                            <input className="learnTextBox" type="text" placeholder="Message / Special requests" name="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
                            <br />
                            <br />
                            <button className="reservationsBtn" type="submit" onClick={handleSubmit}>
                                submit reservations
                            </button>
                            <br />

                        </div>

                    </form>
                </div>
            )}


        </>
    )
}

export default LearnModal