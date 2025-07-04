function CartPage({ cartItems, removeFromCart }) {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">🧾 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty 😔</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow p-4 rounded flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-600">₹{item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(index)}
                className="text-red-600 hover:underline"
              >
                ❌ Remove
              </button>
            </div>
          ))}

          <hr className="my-4" />
          <div className="text-right text-lg font-bold text-purple-700">
            Total: ₹{totalPrice}
          </div>

          <div className="text-center mt-6">
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
              ✅ Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
