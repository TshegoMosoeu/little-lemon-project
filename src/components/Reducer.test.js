import { updateTimes, fetchAPI } from "./Main";

// Test for initializeTimes (assumes it returns an array of available times for today)
test('initializeTimes returns expected value', () => {
  const result = fetchAPI(new Date());
  // Should be an array (add more assertions if you know what to expect)
  expect(Array.isArray(result)).toBe(true);
});

// Test for updateTimes returning new available times
test('updateTimes returns updated availableTimes', () => {
  const initialState = { availableTimes: ["17:00", "18:00"] };
  const date = new Date("2025-07-01");
  const newState = updateTimes(initialState, date);
  // Should have the correct structure
  expect(Array.isArray(newState.availableTimes)).toBe(true);
  // Should NOT mutate the old state
  expect(newState).not.toBe(initialState);
});
