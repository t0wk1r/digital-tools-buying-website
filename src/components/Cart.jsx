function Cart({ cart, setActiveTab, onRemoveFromCart, onCheckout }) {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <section
      id="products"
      className="scroll-mt-24 mx-auto max-w-7xl px-4 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-extrabold text-slate-900">
          Premium Digital Tools
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Choose from our curated collection of premium digital products designed
          to boost your productivity and creativity.
        </p>

        <div className="mt-8 flex justify-center">
          <div className="rounded-full border border-slate-200 bg-white p-1 shadow-sm">
            <button
              onClick={() => setActiveTab("products")}
              className="btn btn-ghost rounded-full border-0 px-6 text-slate-600"
            >
              Products
            </button>

            <button className="btn rounded-full border-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 text-white">
              Cart ({cart.length})
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-5xl rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h3 className="text-2xl font-bold text-slate-900">Your Cart</h3>

        {cart.length === 0 ? (
          <div className="mt-8 rounded-2xl bg-slate-50 px-6 py-12 text-center text-slate-500">
            Your cart is empty.
          </div>
        ) : (
          <>
            <div className="mt-6 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
                      <img src={item.icon} alt={item.name} className="h-7 w-7 object-contain" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-slate-900">
                        {item.name}
                      </h4>
                      <p className="mt-1 text-sm text-slate-500">${item.price}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveFromCart(item.id)}
                    className="text-sm font-medium text-rose-500 transition hover:text-rose-600"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm text-slate-500">Total:</span>
              <span className="text-2xl font-extrabold text-slate-900">
                ${totalPrice}
              </span>
            </div>

            <button
              onClick={onCheckout}
              className="mt-4 w-full rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-4 text-sm font-semibold text-white transition hover:opacity-95"
            >
              Proceed To Checkout
            </button>
          </>
        )}
      </div>
    </section>
  );
}

export default Cart;