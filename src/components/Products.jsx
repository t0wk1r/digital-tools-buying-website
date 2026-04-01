import products from "../data/products";

const tagStyles = {
  popular: "bg-violet-100 text-violet-700",
  new: "bg-emerald-100 text-emerald-700",
  "best-seller": "bg-amber-100 text-amber-700",
};

function Products({ cart, cartCount, setActiveTab, onAddToCart }) {
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
          <div className="rounded-full border border-base-200 bg-white p-1 shadow-sm">
            <button className="btn rounded-full border-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 text-white">
              Products
            </button>

            <button
              onClick={() => setActiveTab("cart")}
              className="btn btn-ghost rounded-full px-6"
            >
              Cart ({cartCount})
            </button>
          </div>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.slice(0, 6).map((product) => {
          const isAdded = cart.some((item) => item.id === product.id);

          return (
            <div
              key={product.id}
              className="card border border-base-200 bg-white shadow-sm"
            >
              <div className="card-body">
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-2xl">
                    <img src={product.icon} alt={product.name} className="h-7 w-7 object-contain" />
                  </div>

                  <div className={`badge border-0 ${tagStyles[product.tagType]}`}>
                    {product.tag}
                  </div>
                </div>

                <h3 className="card-title text-2xl text-slate-900">
                  {product.name}
                </h3>

                <p className="min-h-[72px] text-sm leading-6 text-slate-600">
                  {product.description}
                </p>

                <div className="mt-2">
                  <span className="text-3xl font-extrabold text-slate-900">
                    ${product.price}
                  </span>
                  <span className="ml-1 text-slate-500">
                    {product.period === "one-time"
                      ? "one-time"
                      : product.period === "monthly"
                      ? "/mo"
                      : "/yr"}
                  </span>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {product.features.map((feature, index) => (
                    <li  key={index}><span className="text-green-500 font-bold">✓</span> {feature}</li>
                  ))}
                </ul>

                <div className="card-actions mt-6">
                  <button
                    onClick={() => onAddToCart(product)}
                    className={`btn w-full rounded-full border-0 text-white ${
                      isAdded
                        ? "bg-slate-800 hover:bg-slate-800"
                        : "bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:opacity-95"
                    }`}
                  >
                    {isAdded ? "Added to Cart" : "Buy Now"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Products;