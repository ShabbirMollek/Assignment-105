function scrollToSecondSection() {             
   const secondSection = document.getElementById('secondSection');            
   if (secondSection) {                
   secondSection.scrollIntoView({ behavior: 'smooth' });
   }
}

// if i select buy tickets button then it turns to ticket confirmation section 

let totalSeats = 40;
let selectedSeats = 0;

function decreaseSeat(button) {
  if (!button.disabled) {
    totalSeats--;
    selectedSeats++;
  
    button.disabled = true;

    const buttonText = button.innerText;
    updateSeatsLeftButton();
    updateInfoContainer(buttonText); // Pass button text as a parameter
  }
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

// Add event listeners to each button dynamically
const seatContainer = document.getElementById("seatContainer");
const buttons = seatContainer.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => decreaseSeat(button));
});