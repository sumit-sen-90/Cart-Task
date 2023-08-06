// totalAmount.js
let totalAmount = 0;

function updateTotalAmount(detailsWrapper, priceParameter) {
  if (detailsWrapper.style.display === "block") {
    totalAmount += priceParameter;
  } else {
    totalAmount -= priceParameter;
  }
}

function displayTotalAmount() {
  const totalPrice = document.querySelector(".total-price");
  totalPrice.textContent = `Total : DKK ${totalAmount.toFixed(2)}`;
}

window.updateTotalAmount = updateTotalAmount;
window.displayTotalAmount = displayTotalAmount;
