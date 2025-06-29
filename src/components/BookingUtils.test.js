describe("Booking localStorage integration", () => {
  beforeEach(() => {
    
    localStorage.clear();
    
    window.submitAPI = (formData) => {
      const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
      bookings.push(formData);
      localStorage.setItem("bookings", JSON.stringify(bookings));
      return true;
    };
  });

  test("submitAPI writes booking to localStorage", () => {
    const formData = { date: "2025-07-01", time: "17:00", guests: 2, occasion: "Birthday" };
    window.submitAPI(formData);
    const bookings = JSON.parse(localStorage.getItem("bookings"));
    expect(bookings).toContainEqual(formData);
  });

  test("Can read bookings from localStorage", () => {
    const booking1 = { date: "2025-07-01", time: "17:00", guests: 2, occasion: "Birthday" };
    const booking2 = { date: "2025-07-01", time: "18:00", guests: 2, occasion: "Anniversary" };
    localStorage.setItem("bookings", JSON.stringify([booking1, booking2]));

    const stored = JSON.parse(localStorage.getItem("bookings"));
    expect(stored).toEqual([booking1, booking2]);
  });
});
