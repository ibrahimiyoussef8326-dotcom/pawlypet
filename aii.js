// Sample Product Data
const products = [
    {
        id: 1,
        name: "Premium Dog Food (5kg)",
        category: "dogs",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&q=80"
    },
    {
        id: 2,
        name: "Cat Scratching Post",
        category: "cats",
        price: 34.50,
        image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400&q=80"
    },
    {
        id: 3,
        name: "Interactive Chew Toy",
        category: "accessories",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1535294435445-d7249524ef2e?w=400&q=80"
    },
    {
        id: 4,
        name: "Cozy Pet Bed",
        category: "accessories",
        price: 45.00,
        image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&q=80"
    }
];

let cartCount = 0;

// Render Products
function renderProducts(filterCategory = 'all') {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';

    const filtered = filterCategory === 'all' 
        ? products 
        : products.filter(p => p.category === filterCategory);

    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">$${product.price.toFixed(2)}</div>
            </div>
            <button class="add-to-cart-btn" onclick="addToCart()">Add to Cart</button>
        `;
        grid.appendChild(card);
    });
}

// Add to Cart Action
function addToCart() {
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
}

// Category Filter Click Events
document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        renderProducts(e.target.dataset.category);
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});