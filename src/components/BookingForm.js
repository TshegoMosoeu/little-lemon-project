import React from "react";

const BookingForm = (props) => {
    const [date, setDate] = React.useState(""); // Initialize date state
    const [times, setTimes] = React.useState(""); // Initialize date state
    const [guests, setGuests] = React.useState(""); // Initialize date state
    const [occasion, setOccassion] = React.useState(""); // Initialize date state

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm({date,times,guests,occasion});
        // We will sort it later
    }

    // This function will be called when the date input changes
    const handleChange = (e) => {
        setDate(e);
        props.dispatch(new Date(e));
    }

    return  (
        <header>
            <section>
                <form>
                    <fieldset>
                        <div>
                            <label htmlFor="book-date">Choose Date:</label>
                            <input id="book-date" value={date} onChange={(e)=> handleChange(e.target.value)} type="date" required />
                        </div>
                        {/* For time selection*/}
                        <div>
                            <label htmlFor="book-time">Choose Time:</label>
                            {/** 
                            
                            <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)}>
                                <option value="">Select a Time</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes => {return <option key= {availableTimes}>{availableTimes}</option>})
                                }
                            </select>
                            */}

                            <select
                                id="book-time"
                                value={times}
                                onChange={(e) => setTimes(e.target.value)}
                            >
                                <option value="">Select a Time</option>
                                {props.availableTimes.map((time) => (
                                <option key={time}>{time}</option>
                                ))}
                            </select>

                        </div>
                        {/* For Number of Guests*/}
                        <div>
                            <label htmlFor="book-guests">Number of Guests:</label>
                            <input id="book-guests" min="1" value= {guests} onChange={(e) => setGuests(e.target.value)}/>
                        </div>

                        {/*For Occasion */}
                        <div>
                            <label htmlFor="book-occasion">Occasion:</label>
                            <select id="book-occasion" key={occasion} value={occasion} onChange = {e => setOccassion(e.target.value)}>
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                                <option value="Engagement">Engagement</option>
                                <option value="Wedding">Wedding</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        {/* Submit Button */}
                        <div className="btnReceive">
                            <input aria-label="On Click" type="submit" value={"Make Your Reservation"} onClick={handleSubmit} />
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>

    );
};

export default BookingForm;