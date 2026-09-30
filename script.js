function bookNow() {
  alert("Thank you! Booking information will be available soon.");
}

function sendMessage(event) {
  event.preventDefault();

  alert("Thank you for contacting Green Valley Farmhouse!");

  event.target.reset();
}
