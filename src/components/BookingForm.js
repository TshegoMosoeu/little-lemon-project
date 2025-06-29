import React, { useState } from "react";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  // Use a single object for form state (cleaner for multiple fields)
  const [form, setForm] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "Birthday",
  });

  // Unified handler for all input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === "date") {
      // When date changes, update available times via dispatch
      dispatch(new Date(value));
    }
  };

  // Submit handler for the form
  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(form);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <fieldset>
          {/* Date */}
          <div>
            <label htmlFor="book-date">Choose Date:</label>
            <input
              id="book-date"
              name="date"
              type="date"
              value={form.date}
              onChange={handleChange}
              required
            />
          </div>

          {/* Time */}
          <div>
            <label htmlFor="book-time">Choose Time:</label>
            <select
              id="book-time"
              name="time"
              value={form.time}
              onChange={handleChange}
              required
            >
              <option value="">Select a Time</option>
              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          {/* Number of Guests */}
          <div>
            <label htmlFor="book-guests">Number of Guests:</label>
            <input
              id="book-guests"
              name="guests"
              type="number"
              min="1"
              value={form.guests}
              onChange={handleChange}
              required
            />
          </div>

          {/* Occasion */}
          <div>
            <label htmlFor="book-occasion">Occasion:</label>
            <select
              id="book-occasion"
              name="occasion"
              value={form.occasion}
              onChange={handleChange}
              required
            >
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="btnReceive">
            <button type="submit" aria-label="Make Your Reservation">
              Make Your Reservation
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default BookingForm;
