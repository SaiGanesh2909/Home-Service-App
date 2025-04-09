const booking = JSON.parse(localStorage.getItem("currentBooking"));
const section = document.getElementById("confirmationSection");

if (!booking) {
  section.innerHTML = "<p>No booking details found.</p>";
} else {
  section.innerHTML = `
    <h3>Thank you, ${booking.user.name}!</h3>
    <p>Your booking has been confirmed.</p>
    <p><strong>Booking ID:</strong> ${booking.bookingId}</p>
    <p><strong>Service:</strong> ${booking.serviceName}</p>
    <p><strong>Agency:</strong> ${booking.agencyName}</p>
    <p><strong>Type:</strong> ${booking.serviceType}</p>
    <p><strong>Date:</strong> ${booking.date}</p>
    <p><strong>Time:</strong> ${booking.time}</p>
    <p><strong>Price:</strong> ₹${booking.price}</p>
    <p>We’ve notified the professional. You will be contacted shortly.</p>
    <p><em>(In future, you can add real-time tracking here.)</em></p>
  `;
}

document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
});
