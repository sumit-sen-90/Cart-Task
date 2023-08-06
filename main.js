// Function to create and append pair boxes based on product data
function createAndAppendPairBoxes(container, productData) {
    productData.forEach((data, index) => {
      const pairBox = window.createPairBox(
        index + 1,
        data.id,
        data.pair,
        data.productName,
        data.price,
        data.offerPercentage,
        data.colorOptions,
        data.sizeOptions
      );
      container.appendChild(pairBox);
    });
  }
  
  // Function to create and return a container div with free shipping text and total price
  function createContainerDiv() {
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("flex-container");
  
    const freeShippingText = document.createElement("p");
    freeShippingText.textContent = "Free 2 Day Shipping";
    freeShippingText.classList.add("free-shipping");
  
    const totalPrice = document.createElement("h4");
    totalPrice.textContent = `Total : DKK 00.00`;
    totalPrice.classList.add("total-price");
  
    containerDiv.appendChild(freeShippingText);
    containerDiv.appendChild(totalPrice);
  
    return containerDiv;
  }
  
  // Function to create and return an "Add to Cart" button
  function createAddToCartButton() {
    const addButton = document.createElement("button");
    addButton.classList.add("add-button");
  
    const buttonText = document.createElement("span");
    buttonText.textContent = "+ Add to Cart";
    buttonText.classList.add("button-text");
  
    addButton.appendChild(buttonText);
  
    return addButton;
  }
  
  // Main function to be executed when the DOM is ready
  document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".mainContainer");

    window.productData.forEach((data, index) => {
        const pairBox = createPairBox(index + 1, data);
        container.appendChild(pairBox);
      });
    
      const containerDiv = createContainerDiv();
      const addButton = createAddToCartButton();
    
      container.appendChild(containerDiv);
      container.appendChild(addButton);
  });
  