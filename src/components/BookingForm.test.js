import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test('Renders the "Choose date" label in BookingForm', () => {
  // Provide required props
  render(
    <BookingForm
      availableTimes={["17:00"]}
      dispatch={jest.fn()}
      submitForm={jest.fn()}
    />
  );
  // Look for the label (case-insensitive)
  const label = screen.getByLabelText(/choose date/i);
  expect(label).toBeInTheDocument();
});
