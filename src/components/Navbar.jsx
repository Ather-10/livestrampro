import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="w-full fixed top-0 left-0 z-50 bg-black/70 backdrop-blur-md shadow-md">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      
      {/* <!-- Logo --> */}
      <div className="flex-shrink-0 text-white font-bold text-xl">
        Live<span className="text-orange-400">Stream</span>
      </div>

      {/* <!-- Desktop Menu --> */}
      <div className="hidden md:flex space-x-8 text-white font-medium">
        <a href="#" className="hover:text-orange-400 transition">Home</a>
        <a href="#" className="hover:text-orange-400 transition">Features</a>
        <a href="#pricing" className="hover:text-orange-400 transition">Pricing</a>
        <a href="#" className="hover:text-orange-400 transition">Contact</a>
      </div>

      {/* <!-- Call to Action --> */}
      <div className="hidden md:block">
        <a href="#joinroom" className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-md text-white font-semibold hover:from-pink-500 hover:to-orange-500 transition-all">
          Go Live
        </a>
      </div>

      {/* <!-- Mobile Menu Button --> */}
      <div className="md:hidden flex items-center">
        <button id="menu-toggle" className="text-white focus:outline-none">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>

  {/* <!-- Mobile Menu --> */}
  <div id="mobile-menu" className="md:hidden hidden px-4 pb-4">
    <a href="#" className="block py-2 text-white hover:text-orange-400">Home</a>
    <a href="#" className="block py-2 text-white hover:text-orange-400">Features</a>
    <a href="#pricing" className="block py-2 text-white hover:text-orange-400">Pricing</a>
    <a href="#" className="block py-2 text-white hover:text-orange-400">Contact</a>
    <a href="#" className="block mt-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-md text-center hover:from-pink-500 hover:to-orange-500 transition-all">Live Stream</a>
  </div>
</nav>

    </div>
  )
}

export default Navbar