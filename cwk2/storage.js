    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    // Get the cart count from local storage
    const savedCartCount = localStorage.getItem("cartCount");

    // Display the cart count in the HTML
    const cartCountElement = document.getElementById("cart-count");
    cartCountElement.textContent = savedCartCount || "0"; // Display "0" if the cart count is not found in local storage

    const cartContainer = document.querySelector('.cart-container');
    const cartContent = cartContainer ? cartContainer.querySelector('.cart-content') : null;
    const totalPrice = cartContainer ? cartContainer.querySelector('#total-price') : null;
    const buyBtn = cartContainer ? cartContainer.querySelector('.btn-buy') : null;
    

document.addEventListener('DOMContentLoaded', function() {
    renderCart();
});

// Function to update cart count
function updateCartCount() {
    let cartCount = 0;
    
    // Loop through the items in the cart array
    cart.forEach(item => {
        // Increment cartCount by the quantity of each item
        cartCount += item.quantity;
    });
    
    // Update the cart count in the HTML
    const cartCountElement = document.getElementById("cart-count");
    cartCountElement.textContent = cartCount;
    
    // Save the cart count to local storage
    localStorage.setItem("cartCount", cartCount);
    
    if (cart == null) {
        cartCount = 0;
    }
}


function renderCart() {
    if (!cartContent || !totalPrice || !buyBtn) return; // Exit if elements are not found

    cartContent.innerHTML = '';
    let total = 0;
    let cartcount = 0;
    cart.forEach((item, index) => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        cartItemElement.innerHTML = `
            <span>${item.name} (${item.quantity})</span>
            <span>£${(item.price * item.quantity).toFixed(2)}</span>
            <button class="change-quantity" onclick="changeQuantity(${index}, -1)">-</button>
            <button class="change-quantity" onclick="changeQuantity(${index}, 1)">+</button>
            <button class="remove-from-cart" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartContent.appendChild(cartItemElement);
        total += item.price * item.quantity;
        cartcount += 1;
    });
    totalPrice.textContent = `£${total.toFixed(2)}`;

    buyBtn.disabled = cart.length === NaN;
}
function addToCart(id, name, price) {
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        alert(`${name} is already in the cart!`);
        return;
    }
    cart.push({ id, name, price, quantity: 1 });
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    updateCartCount()
}

//im losing it dawg LMAO 💀
function changeQuantity(index, change) {
    const item = cart[index];
    if (item.quantity + change <= 0) {
        cart.splice(index, 1);
    } else {
        item.quantity += change;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    updateCartCount()
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    updateCartCount()
}

if (buyBtn) {
    buyBtn.addEventListener('click', () => {
        if (cart.length == 0) {
            alert('Your cart is empty!');
            return;
        }
        // Proceed with purchase
        cart = [];
        localStorage.removeItem('cart');
        renderCart();
        alert('Purchase successful!');
        updateCartCount();
    });
}



//this thign was gnna kill me it took forever 😭