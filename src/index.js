let count = 0;
const cartCount = document.getElementById("cart-count");

function addToCart() {
  count++;
  cartCount.textContent = count;

  cartCount.classList.remove("animate-bounce"); // Reset in case it's still bouncing
  void cartCount.offsetWidth; // Trigger reflow
  cartCount.classList.add("animate-bounce");

  // Optional: remove bounce class after 600ms
  setTimeout(() => {
    cartCount.classList.remove("animate-bounce");
  }, 600);
}
