function createPairBox(index, data) {
    const { id, pair, productName, price, offerPercentage, colorOptions, sizeOptions } = data;
  
    const accordion = document.createElement("div");
    accordion.classList.add("accordion");
    accordion.id = `${id + 1}`;
  
    const box = document.createElement("div");
    box.classList.add("box");
    box.id = `${id + 2}`;
  
    const svgIcon = createSvgIcon();
  
    const productDiv = createProductDiv(productName, price);
    const offerPercentageElem = createOfferPercentage(offerPercentage);
    const offer = createOfferElem();
  
    box.appendChild(svgIcon);
    box.appendChild(productDiv);
    box.appendChild(offerPercentageElem);
    box.appendChild(offer);
  
    const detailsWrapper = createDetailsWrapper(id, pair, sizeOptions, colorOptions);
  
    accordion.appendChild(box);
    accordion.appendChild(detailsWrapper);
  
    box.onclick = function () {
      const detailsWrapper = accordion.querySelector(".details-wrapper");
      detailsWrapper.style.display = detailsWrapper.style.display === "block" ? "none" : "block";
      window.updateTotalAmount(detailsWrapper, price);
      window.displayTotalAmount();
    };
  
    return accordion;
  }
  
  function createSvgIcon() {
    const svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgIcon.classList.add("circleIcon");
    svgIcon.setAttribute("width", "16");
    svgIcon.setAttribute("height", "16");
    svgIcon.setAttribute("viewBox", "0 0 16 16");
    svgIcon.setAttribute("fill", "none");
  
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.classList.add("circle");
    circle.setAttribute("cx", "7.92151");
    circle.setAttribute("cy", "8.20799");
    circle.setAttribute("r", "6.77852");
    circle.setAttribute("stroke", "#DADADA");
    circle.setAttribute("stroke-width", "0.903803");
  
    svgIcon.appendChild(circle);
    return svgIcon;
  }
  
  function createProductDiv(productName, price) {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product-details");
  
    const product = document.createElement("p");
    product.classList.add("product");
    product.textContent = productName;
  
    const priceElem = document.createElement("p");
    priceElem.classList.add("price");
    priceElem.textContent = price.toFixed(2);
  
    productDiv.appendChild(product);
    productDiv.appendChild(priceElem);
    return productDiv;
  }
  
  function createOfferPercentage(offerPercentage) {
    const offerPercentageElem = document.createElement("p");
    offerPercentageElem.classList.add("offerPercantage");
    offerPercentageElem.textContent = offerPercentage;
    return offerPercentageElem;
  }
  
  function createOfferElem() {
    const offer = document.createElement("p");
    offer.classList.add("offer");
    offer.textContent = "off";
    return offer;
  }
  
  function createDetailsWrapper(id, pairNumber, sizeOptions, colorOptions) {
    const detailsWrapper = document.createElement("div");
    detailsWrapper.classList.add("details-wrapper");
  
    for (let i = 1; i <= pairNumber; i++) {
      const details1 = document.createElement("div");
      details1.classList.add("details");
      details1.id = `${id + 3}`;
  
      const details1P = document.createElement("p");
      details1P.textContent = `#${i}`;
  
      const sizeDiv = createDropdownDiv("Size:", sizeOptions);
      const colorDiv = createDropdownDiv("Color:", colorOptions);
      colorDiv.style.marginLeft = "2%";
      details1.appendChild(details1P);
      details1.appendChild(sizeDiv);
      details1.appendChild(colorDiv);
  
      detailsWrapper.appendChild(details1);
    }
  
    return detailsWrapper;
  }
  
  function createDropdownDiv(labelText, options) {
    const div = document.createElement("div");
    const label = document.createElement("label");
    label.classList.add("labelDropdown");
    label.setAttribute("for", "size");
    label.textContent = labelText;
    const select = document.createElement("select");
    select.setAttribute("id", "size");
  
    options.forEach((optionText) => {
      const option = document.createElement("option");
      option.value = optionText.toLowerCase();
      option.textContent = optionText;
      select.appendChild(option);
    });
  
    div.appendChild(label);
    div.appendChild(select);
    return div;
  }
  window.createPairBox = createPairBox;