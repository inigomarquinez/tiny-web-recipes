const priceInput = document.getElementById("item-price");
const discountSlider = document.getElementById("discount-slider");
const discountValue = document.getElementById("discount-value-quantity");
const finalAmount = document.getElementById("final-amount");

function calculateDiscount() {
  const price = parseFloat(priceInput.value) || 0;
  const discount = parseInt(discountSlider.value, 10);
  const discountAmount = (price * discount) / 100;
  const finalPrice = price - discountAmount;

  const formattedFinalPrice = new Intl.NumberFormat("en", { style: "currency", currency: "EUR" }).format(finalPrice);

  discountValue.textContent = discount;
  finalAmount.textContent = formattedFinalPrice;

  discountSlider.style.setProperty("--progress", `${discount}%`);
}

priceInput.addEventListener("input", calculateDiscount);
discountSlider.addEventListener("input", calculateDiscount);

calculateDiscount();
