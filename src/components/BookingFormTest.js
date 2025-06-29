import React, { useState } from "react";

const BookingFormTest = () => {
  const [form, setForm] = useState({ date: "" });

  return (
    <form>
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={e =>
          setForm(prev => ({ ...prev, date: e.target.value }))
        }
      />
      <div>Date: {form.date}</div>
    </form>
  );
};

export default BookingFormTest;
