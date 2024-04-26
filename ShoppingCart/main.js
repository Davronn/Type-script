console.log("loged");
// Products
var products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
    { id: 4, name: "Product 4", price: 40 },
];
function generateProductCard(product) {
    return "\n        <div class=\"product-card\">\n            <h2>".concat(product.name, "</h2>\n            <p>Price: $").concat(product.price, "</p>\n            <button onclick=\"addToCart(").concat(product.id, ")\">Add to Cart</button>\n        </div>\n    ");
}
function renderProducts() {
    var productListContainer = document.querySelector(".product-list");
    if (productListContainer) {
        productListContainer.innerHTML = products
            .map(function (product) { return generateProductCard(product); })
            .join("");
    }
}
function addToCart(productId) {
    console.log("Product with ID ".concat(productId, " added to cart"));
}
renderProducts();
