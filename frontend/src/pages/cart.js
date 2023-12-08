import { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import CartCard from '../components/cartCard';
import Summary from '../components/summary';

function Cart() {
    const [dishes, setDishes] = useState(null)

    const fetchRecords = async (url) => {
        try {
            const response = await fetch(url);
            const json = await response.json();

            if (response.ok) {
                setDishes(json);
            }
        } catch (error) {
            console.error('Error fetching records:', error);
        }
    };

    useEffect(() => {
        fetchRecords('/api/cart');
    }, []);

  return (
    <div className="relative mt-20">
      <div className="absolute inset-0 min-h-screen" style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/568370/pexels-photo-568370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))' }}></div>
      </div>

      <div className="grid grid-cols-2 gap-8 relative z-10">
        <div>
          <Navbar />

          <div className="p-5 text-left ml-12 mt-5">
            <h1 className="text-4xl text-center ml-16 mr-16 font-bold text-red-500 dark:text-red">Your Cart</h1>
            {dishes && dishes.map((dish) => (
              <CartCard key={dish._id} cardData={dish} fetchFun={fetchRecords} />
            ))}
          </div>

        </div>
      </div>
      <Summary cartItems={dishes} />
    </div>
  );
}

export default Cart;