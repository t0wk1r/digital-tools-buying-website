import cartImg from "../assets/products/shopping-cart.png";

function Navbar({ cartCount, setActiveTab }) {
  return (
    <div className="fixed top-0 left-0 z-50 navbar w-full border-b border-base-200 bg-white/90 px-4 backdrop-blur lg:px-8">
      <div className="navbar-start flex-1">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-sm lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li><a href="#products">Products</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#steps">Steps</a></li>
            <li><a href="#footer">Contact</a></li>
          </ul>
        </div>

        <a href="#" className="ml-2 text-2xl font-extrabold sm:text-3xl">
          <span className="text-violet-600">Digi</span>
          <span className="text-slate-900">Tools</span>
        </a>
      </div>

      <div className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
        <ul className="menu menu-horizontal gap-2 rounded-xl px-1 text-sm font-medium text-slate-700">
          <li><a href="#products">Products</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-2">
        <div className="indicator">
          <span className="badge badge-warning indicator-item badge-sm">
            {cartCount}
          </span>

          <button
            onClick={() => {
              setActiveTab("cart");
              setTimeout(() => {
                document.getElementById("products")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }, 100);
            }}
            className="btn btn-ghost btn-circle btn-sm sm:btn-md"
          >
            

            <img src={cartImg} className="w-5 h-5" alt="" />
          </button>
        </div>

        <a href="#" className="btn btn-ghost btn-sm hidden md:inline-flex">
          Login
        </a>

        <a
          href="#"
          className="btn btn-sm rounded-full border-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 text-white hover:opacity-95 sm:btn-md sm:px-6"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}

export default Navbar;