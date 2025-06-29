export function initializeTimes() {
  const today = new Date();
  return getFilteredTimes(today);
}

export function updateTimes(state, date) {
  return { availableTimes: getFilteredTimes(date) };
}

function getFilteredTimes(date) {
  const allTimes = window.fetchAPI(date);

  const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");

  const dateStr = date.toISOString().slice(0, 10);

  const bookedTimes = bookings
    .filter(b => b.date === dateStr)
    .map(b => b.time);


  return allTimes.filter(time => !bookedTimes.includes(time));
}
