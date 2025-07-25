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

  const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
  bookings.push(formData);
  localStorage.setItem("bookings", JSON.stringify(bookings));
  return true; 
};


window.fetchAPI = fetchAPI;
window.submitAPI = submitAPI;
