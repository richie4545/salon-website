
const serviceSelect = document.getElementById("service");
const bookingForm = document.getElementById("booking-form");
const message = document.getElementById("message");
const dateInput = document.getElementById("date");

// Prevent selecting a date in the past.
const today = new Date();
const localToday = [
  today.getFullYear(),
  String(today.getMonth() + 1).padStart(2, "0"),
  String(today.getDate()).padStart(2, "0")
].join("-");

dateInput.min = localToday;

// Select a service from the services list.
document.querySelectorAll(".choose-service").forEach((button) => {
  button.addEventListener("click", () => {
    serviceSelect.value = button.dataset.service;

    document.getElementById("booking").scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Demonstration form: no booking is actually sent.
bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const service = serviceSelect.value;
  const date = dateInput.value;

  if (!name || !email || !service || !date) {
    message.textContent = "Please complete all fields.";
    return;
  }

  const formattedDate = new Date(
    date + "T12:00:00"
  ).toLocaleDateString("en-GB");

  message.textContent =
    `Thanks, ${name}! Your request for ${service} on ` +
    `${formattedDate} is ready. This is a demo only; ` +
    `your appointment has not been sent or confirmed.`;
});