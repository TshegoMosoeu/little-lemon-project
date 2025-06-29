import React, { useState, useEffect} from "react";


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
    occasion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (form.date) {
      dispatch(new Date(form.date));
    }
  }, [form.date, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid(form)) {
      submitForm(form);
    }
  };



  return (
    <div className="booking-form-wrapper">
      <form onSubmit={handleSubmit} noValidate>
        <h2 className="booking-form-title">Reserve a Table</h2>
        <div className="booking-form-field">
          <label htmlFor="book-date">Date</label>
          <input
            id="book-date"
            name="date"
            type="date"
            required
            value={form.date}
            onChange={handleChange}
            className="booking-form-input"
            autoComplete="off"
            placeholder="Select date"
          />
        </div>
        <div className="booking-form-field">
          <label htmlFor="book-time">Time</label>
          <select
            id="book-time"
            name="time"
            required
            value={form.time}
            onChange={handleChange}
            className="booking-form-select"
          >
            <option value="">Select a time</option>
            {availableTimes &&
              availableTimes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
          </select>
        </div>
        <div className="booking-form-field">
          <label htmlFor="book-guests">Number of Guests</label>
          <input
            id="book-guests"
            name="guests"
            type="number"
            min="1"
            required
            value={form.guests}
            onChange={handleChange}
            className="booking-form-input"
            placeholder="Number of guests"
          />
        </div>
        <div className="booking-form-field">
          <label htmlFor="book-occasion">Occasion</label>
          <select
            id="book-occasion"
            name="occasion"
            required
            value={form.occasion}
            onChange={handleChange}
            className="booking-form-select"
          >
            <option value="">Select occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </div>
        <button
          type="submit"
          className="booking-form-btn"
          aria-label="Reserve a table"
          disabled={!isFormValid(form)}
        >
          Reserve a Table
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
