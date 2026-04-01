function Stats() {
  return (
    <section className="bg-gradient-to-r from-violet-600 to-fuchsia-600 py-10 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 text-center md:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-5xl font-extrabold">50K+</h3>
          <p className="mt-2 text-lg font-semibold">Active Users</p>
        </div>

        <div className="md:border-x md:border-white/30">
          <h3 className="text-5xl font-extrabold">200+</h3>
          <p className="mt-2 text-lg font-semibold">Premium Tools</p>
        </div>

        <div>
          <h3 className="text-5xl font-extrabold">4.9</h3>
          <p className="mt-2 text-lg font-semibold">Rating</p>
        </div>
      </div>
    </section>
  )
}

export default Stats