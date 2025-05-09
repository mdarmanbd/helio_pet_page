
document.addEventListener('DOMContentLoaded', function () {
  const incrementBtn = document.getElementById('incrimentBtn');
  const decrementBtn = document.getElementById('decrementBtn');
  const countDisplay = document.getElementById('count');
  const priceDisplay = document.querySelector('.discounted-price');
  const addToCartBtn = document.getElementById('addToCart');

  const basePrice = 249.00;
  let count = 1;

  const savedTotal = localStorage.getItem('cartTotalPrice');
  if (savedTotal) {
    const savedCount = Math.round(parseFloat(savedTotal) / basePrice);
    if (savedCount >= 1 && savedCount <= 10) {
      count = savedCount;
    }
  }

  function update() {
    let totalPrice = basePrice * count;
    priceDisplay.textContent = "$" + totalPrice;
    countDisplay.textContent = count;
  }

  incrementBtn.addEventListener('click', () => {
    if (count < 10) {
      count++;
      update();
    }
  });

  decrementBtn.addEventListener('click', () => {
    if (count > 1) {
      count--;
      update();
    }
  });

  addToCartBtn.addEventListener('click', () => {
    const totalPrice = basePrice * count;
    localStorage.setItem('cartTotalPrice', totalPrice);
    alert(`Price $${totalPrice} saved to cart.`);
  });

  update();
});
