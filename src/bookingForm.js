    import React, { useState, useEffect } from 'react'; 
    import './bookingForm.css'
    import Birthday from './Birthday.png';
    import OccasionImage from './Occasion.png';
    import Engagment from './Engagment.png';
    import Anniversary from './Anniversary.png';
    import TimeImg from './Select-Time.png';
    import Five from './Five.png';
    import Six from './Six.png';
    import Seven from './Seven.png';
    import Eight from './Eight.png';
    import Nine from './Nine.png';
    import Ten from './Ten.png';
    import NOD from './NOD.png';
    import D1 from './1.png';
    import D2 from './2.png';
    import D3 from './3.png';
    import D4 from './4.png';
    import D5 from './5.png';
    import D6 from './6.png';
    import D7 from './7.png';
    import D8 from './8.png';
    import D9 from './9.png';
    import D10 from './10.png';
    import SelectDate from './Select-Date.png';
    function BookingForm() {
        useEffect(() => {
            document.body.style.overflowY = 'hidden';
            document.body.style.overflowX = 'hidden';
            document.title = "Reservation Form | Little Lemon";
            return () => {
            document.body.style.overflowX = 'auto';
            document.body.style.overflowY = 'auto';
            };
        }, []); 
        const [showOccasionMenu, setShowOccasionMenu] = useState(false);
        const [Occasion, setOccasion] = useState("");
        const [time, setTime] = useState("");
        const [showTime, setShowTime] = useState(false);
        const [diners, setDiners] = useState("");
        const [showDiners, setShowDiners] = useState(false);
        const [date, setDate] = useState("");
        const [showDate, setShowDate] = useState(false);
        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");
        const [email, setEmail] = useState("");
        const [phoneNumber, setPhoneNumber] = useState("");
        const [formError, setFormError] = useState("");
        const [confirmation, setConfirmation] = useState(false);
        const handleOccasionClick = () => {
            setShowOccasionMenu(!showOccasionMenu);
        };

        const handleBirthdayClick = () => {
            setOccasion("Birthday")
            setShowOccasionMenu(false)
        }
        const handleEngagmentClick = () => {
            setOccasion("Engagement")
            setShowOccasionMenu(false)

        }
        const handleAnniversaryClick = () => {
            setOccasion("Anniversary")
            setShowOccasionMenu(false)

        }

        const handleTimeClick = () => {
            setShowTime(!showTime)
        }

        const handleFive = () => {
            setTime("5:00 PM")
            setShowTime(false)
        }

        const handleSix = () => {
            setTime("6:00 PM")
            setShowTime(false)
        }
        
        const handleSeven = () => {
            setTime("7:00 PM")
            setShowTime(false)
        }

        const handleEight = () => {
            setTime("8:00 PM")
            setShowTime(false)
        }

        const handleNine = () => {
            setTime("9:00 PM")
            setShowTime(false)
        }

        const handleTen = () => {
            setTime("10:00 PM")
            setShowTime(false)
        }

        const handleDinersClick = () => {
            setShowDiners(!showDiners)
        }

        const oneClick = () => {
            setDiners(1);
            setShowDiners(false)
        }

        const twoClick = () => {
            setDiners(2);
            setShowDiners(false)
        }

        const threeClick = () => {
            setDiners(3);
            setShowDiners(false)
        }

        const fourClick = () => {
            setDiners(4);
            setShowDiners(false)
        }

        const fiveClick = () => {
            setDiners(5);
            setShowDiners(false)
        }

        const sixClick = () => {
            setDiners(6);
            setShowDiners(false)
        }

        const sevenClick = () => {
            setDiners(7);
            setShowDiners(false)
        }

        const eightClick = () => {
            setDiners(8);
            setShowDiners(false)
        }

        const nineClick = () => {
            setDiners(9);
            setShowDiners(false)
        }
        const tenClick = () => {
            setDiners(10);
            setShowDiners(false)
        }

        const handleDateClick = () => {
            setShowDate(!showDate)
        }

        const handleDateChange = (e) => {
            setDate(e.target.value);
            setShowDate(!showDate)
        }

        const handleFirstNameChange  = (e) => {
            setFirstName(e.target.value);
        }

        const handleLastNameChange = (e) => {
            setLastName(e.target.value);
        }

        const handleEmailChange = (e) => {
            setEmail(e.target.value);
        }

        const handlePhoneNumberChange = (e) => {
            setPhoneNumber(e.target.value)
        }
        const handleSubmit = (e) => {
            e.preventDefault();
            if (!validateForm()) {
                setFormError("Please Fill Out All Form Items");
                return;
            }
        }
    
        const validateForm = () => {
            if (!Occasion || !time || !diners || !date || !firstName || !lastName || !email || !phoneNumber) {
                return false;
            }
            setConfirmation(true);
            return true; 
        }

        return (  
            <div className="container">
                <p id="title">Reservation Form</p>
            <div className="image-container">
                <div>
                    <img src={OccasionImage} className="Label-Images" onClick={handleOccasionClick} />
                    <img src={TimeImg} className="Label-Images" onClick={handleTimeClick} />
                    <img src={NOD} className="Label-Images" onClick={handleDinersClick} />
                    <img src={SelectDate} className="Label-Images" onClick={handleDateClick} />
                    <div className="Display">
                    <p id="Selected-Occasion">Selected Occasion: {Occasion} </p>
                    <p id="Selected-Time">Selected Time: {time}</p>
                    <p id="Number-Diners">Number of Diners: {diners}</p>
                    <p id="Selected-Date">Date: {date}</p>
                    </div>
                </div>
                {showOccasionMenu && (
                    <div className="Occasion-Menu">
                        <img src={Birthday} className="Birthday-Images" alt="Birthday" onClick={handleBirthdayClick}/>
                        <img src={Engagment} className="Birthday-Images" alt="Engagement" onClick={handleEngagmentClick} /> 
                        <img src={Anniversary} className="Birthday-Images" alt="Anniversary" onClick={handleAnniversaryClick} /> 
                    </div>
                    
                )}
                <div>
                {showTime && (
                    <div className="Time-Menu">
                        <img src={Five} className="Time-Images" onClick={handleFive} />
                        <img src={Six} className="Time-Images" onClick={handleSix}/>
                        <img src={Seven} className="Time-Images" onClick={handleSeven} />
                        <img src={Eight} className="Time-Images" onClick={handleEight} />
                        <img src={Nine} className="Time-Images" onClick={handleNine} />
                        <img src={Ten} className="Time-Images"  onClick={handleTen}/>
                    </div>
                )}
                </div>
                <div>
                {showDiners && (
                    <div className="Diners-Menu">
                        <img src={D1} className="Diners-Images" onClick={oneClick} />
                        <img src={D2} className="Diners-Images" onClick={twoClick} />
                        <img src={D3} className="Diners-Images" onClick={threeClick} />
                        <img src={D4} className="Diners-Images" onClick={fourClick} />
                        <img src={D5} className="Diners-Images" onClick={fiveClick} />
                        <img src={D6} className="Diners-Images" onClick={sixClick} />
                        <img src={D7} className="Diners-Images" onClick={sevenClick} />
                        <img src={D8} className="Diners-Images" onClick={eightClick} />
                        <img src={D9} className="Diners-Images" onClick={nineClick} />
                        <img src={D10} className="Diners-Images" onClick={tenClick} />  
                    </div>
                    
                )}
                </div>
                <div>
                {showDate && (
                    <div className="Date">
                        <input type="date" value={date} onChange={handleDateChange} required></input>
                    </div>
                    
                )}
                </div>
                <div className="firstName">
                    <label htmlFor="first-name" id="first-name-label">First Name</label>
                    <input type="text" id="first-name" placeholder="First Name" required onChange={handleFirstNameChange}/>
                </div>
                <div className="lastName">
                    <label htmlFor="last-name" id="last-name-label">Last Name</label>
                    <input type="text" id="last-name" placeholder="Last Name" required onChange={handleLastNameChange}/>
                </div>
            <div className="emailAddress">
                <label htmlFor="email" id="email-label">Email Address</label>
                <input type="text" id="email" placeholder='Email' required onChange={handleEmailChange} />
            </div>
            <div className="phoneNumber">
                <label htmlFor="phone-number" id="phone-number-label">Phone Number</label>
                <input type="text" id="phone-number" placeholder="Phone Number" required onChange={handlePhoneNumberChange}/>
            </div>
            <div>
            <form>
            <input type="submit" id="submit" value="Make Your Reservation" onClick={handleSubmit}/>
            </form>
            </div>
            <div>
            {formError && <p className="error-message">{formError}</p>} 
            </div>
            <div>
            {confirmation && <p className="confirmation-msg">
                Success! Your Reservation has been booked for the following:
                <br></br>
                Date: {date}
                <br></br>
                Time: {time}
                <br></br>
                Number of Diners: {diners}
                <br></br>
                Occasion: {Occasion}
                <br></br>
                Name: {firstName} {lastName}
                <br></br>
                Email: {email}
                <br></br>
                Phone Number: {phoneNumber}
                <br></br>
                A Copy of this Confirmation has been sent to your inbox
                </p>}
            </div>
            </div>
            </div>
        );
    }

    export default BookingForm;

