import userImg from "../assets/user.png";
import packageImg from "../assets/package.png";
import rocketImg from "../assets/rocket.png";

function Steps() {
  return (
    <section id="steps" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold text-slate-900">Get Started In 3 Steps</h2>
          <p className="mt-4 text-base text-slate-600">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="card border border-base-200 bg-white shadow-sm">
            <div className="card-body relative items-center text-center">
              <div className="absolute right-4 top-4 badge badge-primary badge-outline">01</div>
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-violet-100 text-4xl text-violet-600">
                <img src={userImg} alt="Create Account" className="h-10 w-10 object-contain" />
              </div>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">Create Account</h3>
              <p className="text-sm leading-7 text-slate-600">
                Sign up for free in seconds. No credit card required to get started.
              </p>
            </div>
          </div>

          <div className="card border border-base-200 bg-white shadow-sm">
            <div className="card-body relative items-center text-center">
              <div className="absolute right-4 top-4 badge badge-primary badge-outline">02</div>
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-violet-100 text-4xl text-violet-600">
                <img src={packageImg} alt="Choose Products" className="h-10 w-10 object-contain" />
              </div>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">Choose Products</h3>
              <p className="text-sm leading-7 text-slate-600">
                Browse our catalog and select the tools that fit your needs.
              </p>
            </div>
          </div>

          <div className="card border border-base-200 bg-white shadow-sm">
            <div className="card-body relative items-center text-center">
              <div className="absolute right-4 top-4 badge badge-primary badge-outline">03</div>
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-violet-100 text-4xl text-violet-600">
                <img src={rocketImg} alt="Start Creating" className="h-10 w-10 object-contain" />
              </div>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">Start Creating</h3>
              <p className="text-sm leading-7 text-slate-600">
                Download and start using your premium tools immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Steps