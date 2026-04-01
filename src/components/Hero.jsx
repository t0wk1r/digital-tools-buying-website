function Hero() {
  return (
    <section
      id="features"
      className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 lg:grid-cols-2 lg:px-8 lg:py-20"
    >
      <div className="order-1">
        <div className="badge border-0 bg-violet-100 px-4 py-3 text-violet-700">
          New AI-Powered Tools Available
        </div>

        <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-800 sm:text-5xl lg:text-6xl">
          Supercharge Your <br />
          Digital Workflow
        </h1>

        <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
          Access premium AI tools, design assets, templates, and productivity software
          all in one place. Start creating faster today.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="#products"
            className="btn h-12 rounded-full border-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 px-7 text-white hover:opacity-95"
          >
            Explore Products
          </a>

          <a
            href="#pricing"
            className="btn btn-outline h-12 rounded-full border-violet-600 px-7 text-violet-600 hover:border-violet-600 hover:bg-violet-600 hover:text-white"
          >
            Watch Demo
          </a>
        </div>
      </div>

      <div className="order-2 flex justify-center lg:justify-end">
        <div className="w-full max-w-md overflow-hidden rounded-[28px] bg-white shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80"
            alt="Digital tools"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero