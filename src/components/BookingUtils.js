// This module provides utility functions for managing booking times in a restaurant reservation system.
// Initialize available times for today's date using the API

export function initializeTimes() {
  const today = new Date();
  return getFilteredTimes(today);
}

export function updateTimes(state, date) {
  return { availableTimes: getFilteredTimes(date) };
}

function getFilteredTimes(date) {
  // Get all times from the API
  const allTimes = window.fetchAPI(date);
  // Get bookings from localStorage
  const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
  // Format the date to a string (YYYY-MM-DD) to match input
  const dateStr = date.toISOString().slice(0, 10);

  // Find bookings for this date and filter out booked times
  const bookedTimes = bookings
    .filter(b => b.date === dateStr)
    .map(b => b.time);

  // Only include times that aren't already booked
  return allTimes.filter(time => !bookedTimes.includes(time));
}
