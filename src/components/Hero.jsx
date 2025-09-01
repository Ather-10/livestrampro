import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className="relative h-screen">
  {/* <!-- Background Pattern --> */}
  <div className="absolute inset-0">
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
  </div>
  
  {/* <!-- Hero Content --> */}
  <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
    <div className="max-w-3xl text-center">
      <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-white">
        Your Next Great
        <span className="text-orange-400">Project</span>
      </h1>
      <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
        Build modern and beautiful websites with this collection of stunning background patterns. 
        Perfect for landing pages, apps, and dashboards.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a href='/#joinroom' className="rounded-lg px-6 py-3 font-medium bg-orange-400 text-slate-900 hover:bg-orange-300">
          Go Live
        </a>
        <button className="rounded-lg border px-6 py-3 font-medium border-slate-700 bg-slate-800 text-white hover:bg-slate-700">
          Learn More
        </button>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Hero