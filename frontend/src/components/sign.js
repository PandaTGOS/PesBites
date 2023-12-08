import { Link } from 'react-router-dom';

function Signin() {
    return ( 
    <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black opacity-40"></div>
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-white">
                  <h2 className="text-2xl font-bold text-red-900 dark:text-black">
                      SIGN IN PESTICIDES
                  </h2>
                  <form className="mt-8 space-y-6" action="#">
                  <div className="mb-2">
                      <label htmlFor="email" className="block text-sm font-medium text-red-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" className="bg-red-50 border border-red-300 text-red-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-700 dark:border-red-600 dark:placeholder-red-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="name@company.com" required/>
                  </div>
                  <div className="mb-2">
                      <label htmlFor="password" className="block text-sm font-medium text-red-900 dark:text-white">
                          Your password
                      </label>
                      <input type="password" name="password" id="password" className="border bg-gray-800 border-red-300 text-red-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-700 dark:border-red-600 dark:placeholder-red-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="••••••••" required/>
                  </div>
                  <div className="flex items-start">
                      <Link to="/" className="ml-auto text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                          Are you lost bbg?
                      </Link>
                  </div>
                <Link to = "/home" className="w-full px-5 py-3 text-base font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 sm:w-auto dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                    Login to your account
                </Link>
                <div className="text-sm font-medium text-red-900 dark:text-white">
                    <Link to="/home" className="text-red-600 hover:underline dark:text-red-500">
                    Create account
                    </Link>
              </div>
              </form>
            </div>
        </div>
    </div>

     );
}

export default Signin;