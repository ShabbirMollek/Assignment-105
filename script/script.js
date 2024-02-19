function scrollToSecondSection() {             
   const secondSection = document.getElementById('secondSection');            
   if (secondSection) {                
   secondSection.scrollIntoView({ behavior: 'smooth' });
   }
}

// if i select buy tickets button then it turns to ticket confirmation section 

let totalSeats = 40;
let selectedSeats = 0;
let totalPrice = 0;
const maxTickets = 4;

function decreaseSeat(button) {
  if (!button.disabled && selectedSeats < maxTickets) {
    totalSeats--;
    selectedSeats++;

    button.disabled = true;

    const buttonText = button.innerText;
    updateSeatsLeftButton();
    updateInfoContainer(buttonText); // Pass button text as a parameter
    updateTotalPrice(); // Update total price
    updateNextButton(); // Update "Next" button state

    // Disable all buttons when the maximum limit is reached
    if (selectedSeats === maxTickets) {
      disableAllButtons();
    }
  }
}

function enableNextButton() {
  const nextButton = document.getElementById("choose-first");
  if (nextButton) {
    nextButton.disabled = false;
  }
}

function disableAllButtons() {
  const seatContainer = document.getElementById("seatContainer");
  const buttons = seatContainer.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function updateSeatsLeftButton() {
  const seatsLeftButton = document.getElementById("seatsLeftBtn");
  if (seatsLeftButton) {
    seatsLeftButton.innerHTML = `<img src="images/seat-${totalSeats > 0 ? 'green-filled' : 'red-filled'}.png" alt=""> ${totalSeats} Seats left`;
  }
}

function updateInfoContainer(buttonText) {
  const infoContainer = document.getElementById("infoContainer");
  if (infoContainer) {
    // Example: Extract row and column from button text (assuming format is "A1", "B2", etc.)
    const row = buttonText.charAt(0);
    const column = buttonText.substring(1);

    // Create a new div for each selection and append it to the infoContainer
    const newInfoDiv = document.createElement("div");
    newInfoDiv.className = "w-full flex justify-between gap-36";
    newInfoDiv.innerHTML = `
      <p>${row}${column}</p>
      <p>Economy</p>
      <p>550</p>
    `;
    
    infoContainer.appendChild(newInfoDiv);
  }
}

function updateTotalPrice() {
  const totalPriceSpan = document.getElementById("totalPrice");
  if (totalPriceSpan) {
    // Calculate the total price based on the number of selected seats
    totalPrice = selectedSeats * 550; // Assuming the price per seat is 550, you can modify this value accordingly

    // Update the HTML element with the calculated total price
    totalPriceSpan.innerText = totalPrice;
  }
}

function updateNextButton() {
  const nextButton = document.getElementById("choose-first");
  if (nextButton) {
    // Enable or disable the "Next" button based on the number of selected seats
    nextButton.disabled = selectedSeats === 0;
  }
}

// Add event listeners to each button dynamically
const seatContainer = document.getElementById("seatContainer");
const buttons = seatContainer.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    decreaseSeat(button);
    enableNextButton(); // Enable "Next" button when any seat button is clicked
  });
});

// Initial update for the "Next" button state
updateNextButton();

