function Shopping({
  products,
  cart,
  name,
  price,
  setName,
  setPrice,
  addProduct,
  addToCart,
  removeFromCart,
  total,
}) {
  return (
    <div className="container">

      <h1>🛒 Shopping Cart</h1>

      <div className="add-section">

        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) =>
            setPrice(e.target.value)
          }
        />

        <button onClick={addProduct}>
          Add Product
        </button>

      </div>

      <h2>Product List</h2>

      <div className="products">

        {products?.map((item) => (
          <div
            key={item.id}
            className="card"
          >

            <img
              src={item.image}
              alt={item.name}
            />

            <h3>
              {item.name}
            </h3>

            <p>
              ₹{item.price}
            </p>

            <button
              onClick={() =>
                addToCart(item)
              }
            >
              Add To Cart
            </button>

          </div>
        ))}

      </div>

      <h2>Cart</h2>

      {cart?.map((item) => (
        <div
          key={item.cartId}
          className="cart"
        >

          <span>
            {item.name}
            {" - ₹"}
            {item.price}
          </span>

          <button
            className="remove"
            onClick={() =>
              removeFromCart(
                item.cartId
              )
            }
          >
            Remove
          </button>

        </div>
      ))}

      <div className="total">
        Total: ₹{total}
      </div>

    </div>
  );
}

export default Shopping;