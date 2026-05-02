function Cart({ cart }) {
  return (
    <div>
      {/* IMPORTANT: test expects this text */}
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, index) => (
          <p key={index}>
            {item.name} is in your cart.
          </p>
        ))
      )}
    </div>
  );
}

export default Cart;