import React, { useState } from "react";

// Client-side validation function
export function isFormValid(form) {
  return Boolean(
    form.date &&
    form.time &&
    form.guests &&
    Number(form.guests) >= 1 &&
    form.occasion
  );
}

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [form, setForm] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "Birthday",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === "date") {
      dispatch(new Date(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid(form)) {
      submitForm(form);
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <fieldset>
          {/* Date */}
          <div>
            <label htmlFor="book-date">Choose date:</label>
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
            <label htmlFor="book-time">Choose time:</label>
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

          {/* Guests */}
          <div>
            <label htmlFor="book-guests">Number of guests:</label>
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
          <div>
            <button
              type="submit"
              aria-label="Make Your Reservation"
              disabled={!isFormValid(form)}
            >
              Make Your Reservation
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default BookingForm;
