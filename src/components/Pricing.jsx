function Pricing() {
  return (
    <>
      <section id="pricing" className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold text-slate-900">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-base text-slate-600">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="card border border-base-200 bg-white shadow-sm">
            <div className="card-body">
              <h3 className="text-2xl font-bold text-slate-900">Starter</h3>
              <p className="text-sm text-slate-500">Perfect for getting started</p>

              <div className="mt-4">
                <span className="text-5xl font-extrabold text-slate-900">$0</span>
                <span className="text-slate-500">/Month</span>
              </div>

              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                <li><span className="text-green-500 font-bold">✓</span> Access to 10 free tools</li>
                <li><span className="text-green-500 font-bold">✓</span> Basic templates</li>
                <li><span className="text-green-500 font-bold">✓</span> Community support</li>
                <li><span className="text-green-500 font-bold">✓</span> 1 project per month</li>
              </ul>

              <button className="btn mt-8 rounded-full border-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white hover:opacity-95">
                Get Started Free
              </button>
            </div>
          </div>

          <div className="card relative border-0 bg-gradient-to-b from-violet-600 to-fuchsia-600 text-white shadow-lg">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 badge border-0 bg-amber-300 text-amber-900">
              Most Popular
            </div>

            <div className="card-body">
              <h3 className="text-2xl font-bold">Pro</h3>
              <p className="text-sm text-violet-100">Best for professionals</p>

              <div className="mt-4">
                <span className="text-5xl font-extrabold">$29</span>
                <span className="text-violet-100">/Month</span>
              </div>

              <ul className="mt-6 space-y-2 text-sm">
                <li><span className="text-green-500 font-bold">✓</span> Access to all premium tools</li>
                <li><span className="text-green-500 font-bold">✓</span> Unlimited templates</li>
                <li><span className="text-green-500 font-bold">✓</span> Priority support</li>
                <li><span className="text-green-500 font-bold">✓</span> Unlimited projects</li>
                <li><span className="text-green-500 font-bold">✓</span> Cloud sync</li>
                <li><span className="text-green-500 font-bold">✓</span> Advanced analytics</li>
              </ul>

              <button className="btn mt-8 rounded-full border-0 bg-white text-violet-600 hover:bg-slate-100">
                Start Pro Trial
              </button>
            </div>
          </div>

          <div className="card border border-base-200 bg-white shadow-sm">
            <div className="card-body">
              <h3 className="text-2xl font-bold text-slate-900">Enterprise</h3>
              <p className="text-sm text-slate-500">For teams and businesses</p>

              <div className="mt-4">
                <span className="text-5xl font-extrabold text-slate-900">$99</span>
                <span className="text-slate-500">/Month</span>
              </div>

              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                <li><span className="text-green-500 font-bold">✓</span> Everything in Pro</li>
                <li><span className="text-green-500 font-bold">✓</span> Team collaboration</li>
                <li><span className="text-green-500 font-bold">✓</span> Custom integrations</li>
                <li><span className="text-green-500 font-bold">✓</span> Dedicated support</li>
                <li><span className="text-green-500 font-bold">✓</span> SLA guarantee</li>
                <li><span className="text-green-500 font-bold">✓</span> Custom branding</li>
              </ul>

              <button className="btn mt-8 rounded-full border-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white hover:opacity-95">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-extrabold md:text-5xl">
            Ready To Transform Your Workflow?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-violet-100">
            Join thousands of professionals who are already using DigiTools to work smarter.
            Start your free trial today.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#products"
              className="btn rounded-full border-0 bg-white px-7 text-violet-600 hover:bg-slate-100"
            >
              Explore Products
            </a>

            <a
              href="#pricing"
              className="btn btn-outline rounded-full border-white text-white hover:bg-white hover:text-violet-600"
            >
              View Pricing
            </a>
          </div>

          <p className="mt-6 text-sm text-violet-100">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>
    </>
  )
}

export default Pricing