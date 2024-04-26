console.log("loged");
type Product = {
  id: number;
  name: string;
  price: number;
};

// Products
const products: Product[] = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
];

function generateProductCard(product: Product): string {
  return `
        <div class="product-card">
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `;
}

function renderProducts(): void {
  const productListContainer = document.querySelector(".product-list");
  if (productListContainer) {
    productListContainer.innerHTML = products
      .map((product) => generateProductCard(product))
      .join("");
  }
}

function addToCart(productId: number): void {
  console.log(`Product with ID ${productId} added to cart`);
}

renderProducts();
