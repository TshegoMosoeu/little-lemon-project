const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
};

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

const submitAPI = (formData) => {
  // 1. Get existing bookings or create a new array
  const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
  // 2. Add new booking
  bookings.push(formData);
  // 3. Save back to localStorage
  localStorage.setItem("bookings", JSON.stringify(bookings));

  // Call the API for submission as before
  if (window.submitAPI(formData)) {
    setLocation("/ConfirmedBooking");
  }
};


window.fetchAPI = fetchAPI;
window.submitAPI = submitAPI;
