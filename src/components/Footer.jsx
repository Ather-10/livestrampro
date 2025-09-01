import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="pt-10 bg-gray-800">
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">

        {/* <!-- Newsletter Section (Updated for side-by-side input and button) --> */}
        <div className="flex justify-between items-center gap-12 md:flex-row flex-col">
            <div className="flex-1 max-w-lg">
                <h3 className="text-white text-2xl font-bold">
                    Get our beautiful newsletter straight to your inbox.
                </h3>
            </div>
            <div className="flex items-center mt-6 md:mt-0 gap-4">
                <div className="relative w-full md:w-64">
                    <svg className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5..."></path>
                    </svg>
                    <input type="email" placeholder="Enter your email" className="w-full pl-12 pr-3 py-2 text-gray-500 bg-white outline-none border focus:border-orange-600 shadow-sm rounded-lg"/>      
                </div>
                <button className="py-3 px-4 font-medium text-sm text-center text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 active:shadow-none rounded-lg shadow">
                    Subscribe
                </button>
            </div>
        </div>

        {/* <!-- Footer Navigation --> */}
        <div className="flex-1 mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 justify-between">
            <ul className="space-y-4 text-gray-300">
                <h4 className="text-gray-200 font-semibold sm:pb-2">Resources</h4>
                <li><a href="https://javascript:void()" className="duration-150 hover:text-gray-400">Contact</a></li>
                <li><a href="https://javascript:void()" className="duration-150 hover:text-gray-400">Support</a></li>
                <li><a href="https://javascript:void()" className="duration-150 hover:text-gray-400">Documentation</a></li>
                <li><a href="https://javascript:void()" className="duration-150 hover:text-gray-400">Pricing</a></li>
            </ul>
            <ul className="space-y-4 text-gray-300">
                <h4 className="text-gray-200 font-semibold sm:pb-2">About</h4>
                <li><a href="https://javascript:void()" className="duration-150 hover:text-gray-400">Terms</a></li>
                <li><a href="https://javascript:void()" className="duration-150 hover:text-gray-400">License</a></li>
                <li><a href="https://javascript:void()" className="duration-150 hover:text-gray-400">Privacy Policy</a></li>
                <li><a href="https://javascript:void()" className="duration-150 hover:text-gray-400">About TemplateSee</a></li>
            </ul>
            <ul className="space-y-4 text-gray-300">
                <h4 className="text-gray-200 font-semibold sm:pb-2">Explore</h4>
                <li><a href="https://javascript:void()" className="duration-150 hover:text-gray-400">Showcase</a></li>
                <li><a href="https://javascript:void()" className="duration-150 hover:text-gray-400">Roadmap</a></li>
                <li><a href="https://javascript:void()" className="duration-150 hover:text-gray-400">Languages</a></li>
                <li><a href="https://javascript:void()" className="duration-150 hover:text-gray-400">Blog</a></li>
            </ul>
            <ul className="space-y-4 text-gray-300">
                <h4 className="text-gray-200 font-semibold sm:pb-2">Company</h4>
                <li><a href="https://javascript:void()" className="duration-150 hover:text-gray-400">Partners</a></li>
                <li><a href="https://javascript:void()" className="duration-150 hover:text-gray-400">Team</a></li>
                <li><a href="https://javascript:void()" className="duration-150 hover:text-gray-400">Careers</a></li>
            </ul>
        </div>

        {/* <!-- Bottom Footer --> */}
        <div className="mt-10 py-10 border-t border-gray-700 flex items-center justify-between sm:flex-row flex-col">
            <p className="text-gray-300">
                © 2025 Live-Stream. All rights reserved.
            </p>
            <div className="flex items-center gap-x-6 text-gray-400 mt-6 sm:mt-0">
                {/* <!-- Social Media Icons --> */}
                <a href="https://javascript:void()">
                    <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="currentColor" viewBox="0 0 48 48">
                        {/* <!-- Facebook icon --> */}
                    </svg>
                </a>
                <a href="https://javascript:void()">
                    <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="currentColor" viewBox="0 0 48 48">
                        {/* <!-- Twitter icon --> */}
                    </svg>
                </a>
                <a href="https://javascript:void()">
                    <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="currentColor" viewBox="0 0 48 48">
                        {/* <!-- Github icon --> */}
                    </svg>
                </a>
            </div>
        </div>
    </div>
</footer>


    </div>
  )
}

export default Footer