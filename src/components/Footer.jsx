function Footer() {
  return (
    <footer id="footer" className="bg-slate-950 text-slate-300">
      <div className="h-2 bg-gradient-to-r from-violet-600 to-fuchsia-600"></div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 text-center md:grid-cols-2 md:text-left lg:grid-cols-5 lg:px-8">
        <div className="flex flex-col items-center md:items-start lg:col-span-1">
          <h3 className="text-4xl font-extrabold text-white">DigiTools</h3>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-bold text-white">Product</h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Templates</a></li>
            <li><a href="#">Integrations</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-bold text-white">Company</h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-bold text-white">Resources</h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-bold text-white">Social Links</h4>
          <div className="mt-4 flex items-center justify-center gap-3 md:justify-start">
            <a
              href="#"
              className="btn btn-circle btn-sm border-0 bg-white text-slate-900 hover:bg-slate-100"
            >
              f
            </a>
            <a
              href="#"
              className="btn btn-circle btn-sm border-0 bg-white text-slate-900 hover:bg-slate-100"
            >
              in
            </a>
            <a
              href="#"
              className="btn btn-circle btn-sm border-0 bg-white text-slate-900 hover:bg-slate-100"
            >
              x
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-4 py-6 text-center text-sm text-slate-500 md:flex-row md:justify-between md:text-left lg:px-8">
          <p>© 2026 DigiTools. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start md:gap-6">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;