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
let discountPercentage = 0;

function decreaseSeat(button) {
  if (!button.disabled && selectedSeats < maxTickets) {
    totalSeats--;
    selectedSeats++;

    button.disabled = true;

    const buttonText = button.innerText;
    updateSeatsLeftButton();
    updateInfoContainer(buttonText);
    updateTotalPrice(); 
    updateGrandTotal(); 
    updateNextButton(); 

    
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
    
    const row = buttonText.charAt(0);
    const column = buttonText.substring(1);

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
   
    totalPrice = selectedSeats * 550;
    
    totalPriceSpan.innerText = totalPrice;
  }
}

function applyCoupon() {
   const couponInput = document.getElementById("NEW15");
   if (couponInput) {
     const couponCode = couponInput.value.toUpperCase();
 
     
     if (couponCode === "NEW15") {
       
       discountPercentage = 15;
 
       
       updateGrandTotal();
     } else {
       
       discountPercentage = 0;
 
      
       updateGrandTotal();
     }
   }
 }

function updateGrandTotal() {
  const grandTotalSpan = document.getElementById("grandTotal");
  if (grandTotalSpan) {
    
    const discountAmount = (totalPrice * 15) / 100;
    const grandTotal = totalPrice - discountAmount;

    
    grandTotalSpan.innerText = grandTotal;
  }
}


 
 
 

function updateNextButton() {
  const nextButton = document.getElementById("choose-first");
  if (nextButton) {
    
    nextButton.disabled = selectedSeats === 0;
  }
}


const seatContainer = document.getElementById("seatContainer");
const buttons = seatContainer.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    decreaseSeat(button);
    enableNextButton(); 
  });
});


const applyButton = document.querySelector("#choose-first button");
applyButton.addEventListener("click", applyCoupon);


updateNextButton();
