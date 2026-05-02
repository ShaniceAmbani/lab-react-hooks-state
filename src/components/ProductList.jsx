function ProductList({ products, addToCart }) {
  if (products.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>

          <h3>{product.name}</h3>
          <p>{product.category}</p>

          {/* MUST MATCH TEST EXACTLY */}
          <button
            data-testid={`product-${product.id}`}
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>

        </div>
      ))}
    </div>
  );
}

export default ProductList;