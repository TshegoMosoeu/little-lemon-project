import { render, screen } from "@testing-library/react";
import BookingForm, { isFormValid } from "./BookingForm";

const mockTimes = ["17:00", "18:00", "19:00"];

describe("BookingForm HTML5 validation attributes", () => {
  beforeEach(() =>
    render(
      <BookingForm
        availableTimes={mockTimes}
        dispatch={jest.fn()}
        submitForm={jest.fn()}
      />
    )
  );

  test("date input is required and type=date", () => {
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toHaveAttribute("required");
    expect(dateInput).toHaveAttribute("type", "date");
  });

  test("time select is required", () => {
    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toHaveAttribute("required");
  });

  test("guests input has type=number, min=1, and required", () => {
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute("type", "number");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("required");
  });

  test("occasion select is required", () => {
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toHaveAttribute("required");
  });
});

describe("isFormValid function", () => {
  test("returns true for valid form data", () => {
    const valid = {
      date: "2025-07-01",
      time: "17:00",
      guests: "2",
      occasion: "Birthday",
    };
    expect(isFormValid(valid)).toBe(true);
  });

  test("returns false if guests is zero", () => {
    const invalid = {
      date: "2025-07-01",
      time: "17:00",
      guests: "0",
      occasion: "Birthday",
    };
    expect(isFormValid(invalid)).toBe(false);
  });

  test("returns false if date is missing", () => {
    const invalid = {
      date: "",
      time: "17:00",
      guests: "2",
      occasion: "Birthday",
    };
    expect(isFormValid(invalid)).toBe(false);
  });

  test("returns false if any field is missing", () => {
    const invalid = {
      date: "2025-07-01",
      time: "",
      guests: "2",
      occasion: "Birthday",
    };
    expect(isFormValid(invalid)).toBe(false);
  });
});
