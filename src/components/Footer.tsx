"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0f1111] text-white px-6 py-20 font-instrument">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        
        {/* LEFT SIDE */}
        <div className="space-y-10">
          
          {/* Brand */}
          <h2 className="text-3xl tracking-tight">
            FIND <span className="text-gray-500">Real Estate</span>
          </h2>

          {/* Newsletter */}
          <div className="space-y-4">
            <p className="text-lg text-gray-300">
              Subscribe to our Newsletter!
            </p>

            <div className="flex items-center border-b border-gray-700 pb-2 max-w-md">
              <input
                type="email"
                placeholder="Enter address"
                className="bg-transparent outline-none text-sm w-full placeholder-gray-500"
              />
              <button className="text-sm hover:text-gray-300 transition">
                →
              </button>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6 text-sm text-gray-400">
            
            <div>
              <p className="text-white mb-1">Head Office</p>
              <p>
                5 West 37th Street, 12th Floor,<br />
                New York, NY 10018
              </p>
            </div>

            <div>
              <p className="text-white mb-1">Email Us</p>
              <p>hello@findrealestate.com</p>
            </div>

            <div>
              <p className="text-white mb-1">Call Us</p>
              <p>+1 212 994 9965</p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-sm">
          
          {/* Column 1 */}
          <div className="space-y-4">
            <p className="text-white">Explore</p>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">Search</li>
              <li className="hover:text-white cursor-pointer">Agents</li>
              <li className="hover:text-white cursor-pointer">Join</li>
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Agent Portal</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <p className="text-white">Social</p>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">Facebook</li>
              <li className="hover:text-white cursor-pointer">Instagram</li>
              <li className="hover:text-white cursor-pointer">Youtube</li>
              <li className="hover:text-white cursor-pointer">Linkedin</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <p className="text-white">Legal</p>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">Terms</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Fair Housing Notice</li>
              <li className="hover:text-white cursor-pointer">Operating Procedure</li>
              <li className="hover:text-white cursor-pointer">Press</li>
            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-800 text-xs text-gray-500 flex flex-col md:flex-row justify-between gap-4">
        
        <p>Housing Choice Vouchers Welcome</p>
        <p>Se Aceptan Vales de Elección de Vivienda</p>
        <p>© 2026 FIND Real Estate</p>

      </div>

    </footer>
  );
}