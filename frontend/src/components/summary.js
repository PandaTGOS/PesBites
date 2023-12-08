function Summary({ cartItems }) {
    let totalPrice = 0;
  
    return ( 
      <div className="p-7 border rounded-lg fixed right-16 top-[150px] h-[70vh] z-20 overflow-y-auto bg-white dark:bg-gray-700 w-1/4">
        <h2 className="text-4xl font-bold mb-4 text-white dark:text-white">Order Summary</h2>
        <div className="flex flex-col h-full">
          <table className="w-full mb-8">
            <thead>
              <tr>
                <th className="text-center text-red-500 text-2xl dark:text-red">Food</th>
                <th className="text-center text-red-500 text-2xl dark:text-red">Qty</th>
                <th className="text-center text-red-500 text-2xl dark:text-red">Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems && cartItems.map((item) => {
                const itemTotalPrice = item.price * item.qty;
                totalPrice += itemTotalPrice;
                return (
                  <tr key={item._id} className="mb-8">
                    <td className="text-xl text-white dark:text-white">{item.title}</td>
                    <td className="text-xl text-center text-white dark:text-white">{item.qty}</td>
                    <td className="text-xl text-center text-white dark:text-white">₹{itemTotalPrice}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {cartItems && cartItems.length > 0 && (
            <div className="flex justify-end">
              <p className="text-xl font-bold text-white">CART TOTAL: ₹{totalPrice}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
  
  export default Summary;
  