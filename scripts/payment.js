const booking = JSON.parse(localStorage.getItem("currentBooking"));
const summary = document.getElementById("bookingSummary");
const detailsDiv = document.getElementById("paymentDetails");
const form = document.getElementById("paymentForm");

if (!booking) {
  summary.innerHTML = "<p>No booking data found.</p>";
} else {
  summary.innerHTML = `
    <h3>Booking Summary</h3>
    <p><strong>Service:</strong> ${booking.serviceName}</p>
    <p><strong>Agency:</strong> ${booking.agencyName}</p>
    <p><strong>Type:</strong> ${booking.serviceType}</p>
    <p><strong>Date:</strong> ${booking.date}</p>
    <p><strong>Time:</strong> ${booking.time}</p>
    <p><strong>Price:</strong> ₹${booking.price}</p>
    <p><strong>Booking ID:</strong> ${booking.bookingId}</p>
  `;
}

form.paymentMethod.forEach((radio) => {
  radio.addEventListener("change", () => {
    const method = radio.value;
    let html = "";
    if (method === "credit") {
      html = `
        <label>Card Number: <input type="text" required /></label><br />
        <label>Expiry Date: <input type="month" required /></label><br />
        <label>CVV: <input type="password" maxlength="3" required /></label>
      `;
    } else if (method === "upi") {
      html = `<label>UPI ID: <input type="text" required /></label>`;
    } else if (method === "netbanking") {
      html = `
        <label>Select Bank:
          <select required>
            <option value="">--Choose--</option>
            <option>SBI</option>
            <option>HDFC</option>
            <option>ICICI</option>
            <option>Axis</option>
          </select>
        </label>
      `;
    } else if (method === "cod") {
      html = `<p>Cash will be collected at the time of service.</p>`;
    }
    detailsDiv.innerHTML = html;
  });
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Payment successful! Redirecting to confirmation...");
  window.location.href = "confirmation.html";
});

document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
});
