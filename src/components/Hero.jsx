import bannerImg from "../assets/banner.png";
import playImg from "../assets/play.png";

function Hero() {
  return (
    <section
      id="features"
      className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 lg:grid-cols-2 lg:px-8 lg:py-20">
      <div className="order-1">
        <div className="inline-flex items-center gap-2 rounded-full bg-violet-100/90 px-5 py-2 text-sm font-medium text-violet-700 shadow-sm">
          <span className="h-2.5 w-2.5 rounded-full bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.6)]"></span>
          <span>New AI-Powered Tools Available</span>
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
            <img src={playImg} className="w-5 h-5" alt="" /> Watch Demo
          </a>
        </div>
      </div>

      <div className="order-2 flex justify-center lg:justify-end">
        <div className="w-full max-w-md overflow-hidden rounded-[28px] bg-white shadow-lg">
          <img src={bannerImg} alt="Digital tools" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  )
}

export default Hero