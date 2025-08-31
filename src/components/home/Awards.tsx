export default function Awards() {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="rounded-3xl border border-orange-300 p-10 md:p-16 flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              An award-winning media <br /> intelligence solution
            </h1>
            <p className="mt-6 text-[18px] sm:text-[20px] lg:text-[24px] font-medium leading-[28px] sm:leading-[32px] lg:leading-[36px] max-w-[900px]">
              Confirmed as a high-performing product by customers and tech experts in various industries.
            </p>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-x-14 gap-y-10 flex-1">
            <div>
              <h1 className="text-4xl font-bold text-orange-500">#1</h1>
              <p className="mt-2 text-sm">
                top leader in worldwide SaaS industry
              </p>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-orange-500">12</h1>
              <p className="mt-2 text-sm">
                years of experience in the business
              </p>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-orange-500">14</h1>
              <p className="mt-2 text-sm">
                top leader in worldwide SaaS industry
              </p>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-orange-500">4.9/5</h1>
              <p className="mt-2 text-sm">
                average rating review score
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}