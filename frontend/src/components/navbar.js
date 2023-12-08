import { Link } from "react-router-dom";
import { useState } from "react";
import cartIcon from "../extras/red-shopping-cart-10906.png";


function Navbar({ fetchFun }) {
  
  const filter = (param) => {
    try {
      fetchFun(param);
    } 
    catch(error){ }
  };


  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="navbar fixed top-0 w-full z-20 border-b border-white-200 dark:border-white-600 shadow-md">
      <nav className="bg-white">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">

          <Link to="/" className="flex items-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXHioruUWC3sq75RS-TH6bpjqXzDBN9fXuiA&usqp=CAU" className="h-12 mr-3 rounded-full" alt="Logo" />
            <span className="self-center text-2xl font-semibold text-red-500">PESBITES</span>
          </Link>

          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium bg-white rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white-50 dark:bg-white-800 md:dark:bg-white-900 dark:border-white-700">
              <li>
                <Link to="/" className="block py-2 pl-3 pr-4 text-red-700 rounded md:bg-transparent md:text-red-700 md:p-0 md:dark:text-red-500" aria-current="page">Home</Link>
              </li>
              <li>
                <Link to="/" className="block py-2 pl-3 pr-4 text-white-900 rounded hover:bg-white-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover-text-red-500 dark:text-red dark:hover-bg-white-700 dark:hover:text-red md:dark:hover-bg-transparent dark:border-white-700">About</Link>
              </li>
              <li>
                <Link to="/home" className="block py-2 pl-3 pr-4 text-white-900 rounded hover:bg-white-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover-text-red-500 dark:text-red dark:hover-bg-white-700 dark:hover:text-red md:dark:hover-bg-transparent dark:border-white-700">
                  <button onClick={() => filter('')}>Order</button>
                </Link>
              </li>
              <li className="relative group">
                <button
                  onClick={handleDropdownToggle}
                  type="button"
                  className="py-2 pl-3 pr-4 text-white-900 rounded group hover:bg-white-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover-text-red-500 dark:text-red dark:hover-bg-white-700 dark:hover:text-red md:dark:hover-bg-transparent dark:border-white-700 focus:outline-none"
                >
                  Canteens
                  {isDropdownOpen && (
                    <ul className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-lg md:absolute md:flex md:flex-col md:w-40 md:bg-white-50 dark:bg-white-800 md:dark:bg-white-900 dark:border-white-700">
                      <li>
                        <button onClick={() => filter('canteen/4th Floor Left')} className="block py-2 text-red-700 hover:text-white hover:bg-red-100 md:text-red-700 dark:text-red-500 dark:hover:bg-red-700 w-full">
                          4th Floor Left
                        </button>
                      </li>
                      <li>
                        <button onClick={() => filter('canteen/4th Floor Right')} className="block py-2 text-red-700 hover:text-white hover:bg-red-100 md:text-red-700 dark:text-red-500 dark:hover:bg-red-700 w-full">
                          4th Floor Right
                        </button>
                      </li>
                      <li>
                        <button onClick={() => filter('canteen/Butter Canteen')} className="block py-2 text-red-700 hover:text-white hover:bg-red-100 md:text-red-700 dark:text-red-500 dark:hover:bg-red-700 w-full">
                          Butter Canteen
                        </button>
                      </li>
                      <li>
                        <button onClick={() => filter('canteen/Food Court')} className="block py-2 text-red-700 hover:text-white hover:bg-red-100 md:text-red-700 dark:text-red-500 dark:hover:bg-red-700 w-full">
                          Food Court
                        </button>
                      </li>
                      <li>
                        <button onClick={() => filter('canteen/Vakula Mess')} className="block py-2 text-red-700 hover:text-white hover:bg-red-100 md:text-red-700 dark:text-red-500 dark:hover:bg-red-700 w-full">
                          Vakula Mess
                        </button>
                      </li>
                      <li>
                        <button onClick={() => filter('canteen/Food Bus')} className="block py-2 text-red-700 hover:text-white hover:bg-red-100 md:text-red-700 dark:text-red-500 dark:hover:bg-red-700 w-full">
                          Food Bus
                        </button>
                      </li>
                      <li>
                        <button onClick={() => filter('canteen/5th Floor Canteen')} className="block py-2 text-red-700 hover:text-white hover:bg-red-100 md:text-red-700 dark:text-red-500 dark:hover:bg-red-700 w-full">
                          5th Floor Canteen
                        </button>
                      </li>
                    </ul>
                  )}
                </button>
              </li>
            </ul>
          </div>


          <div className="flex md:order-2 items-center">
            <Link to="/cart" className="flex items-center">
              <button type="button"
                className="flex items-center transform transition-transform duration-300 hover:scale-110 focus:outline-none"
                onClick={closeDropdown}
              >
                <img src={cartIcon} alt="Cart Icon" style={{ width: '30px', height: '35px', margin: '10px' }} />
              </button>
            </Link>

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white-500 rounded-lg md:hidden hover:bg-white-100 focus:outline-none focus:ring-2 focus:ring-white-200 dark:text-white-400 dark:hover:bg-white-700 dark:focus:ring-white-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={handleDropdownToggle}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" afia-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

        </div>
      </nav>
    </div>
  );
}

export default Navbar;