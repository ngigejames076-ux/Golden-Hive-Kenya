function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({name: name, price: price});
    localStorage.setItem("cart",JSON.stringify(cart));
    alert(name + "added to cart!");
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartItems = document.getElementById("cartItems");
let total = 0;

cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item.name + " - ksh " + item.price;
    cartItems.appendChild(li);
    total += item.price;
});

document.getElementById("total").textContent = "Total:ksh" + total;

function clearCart() {
    localStorage.removeItem("cart");
    location.reload();
}
// clearCart();