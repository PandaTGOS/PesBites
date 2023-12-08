import { Link } from 'react-router-dom';
import { useState } from 'react';

function Card({ cardData }) { 
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  const addToCart = async () => {
    try {
      const response = await fetch('/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imageSrc: cardData.imageSrc,
          title: cardData.title,
          canteen: cardData.canteen,
          price: cardData.price,
          qty: quantity,
        }),
      });

      if (response.ok) {
        console.log('Item added to cart successfully!');
      } else {
        console.error('Failed to add item to cart');
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow m-6 transition transform hover:scale-105">
      <img src={`${cardData.imageSrc}?w=480&h=750`} alt="leopard" className="rounded-t-lg h-60 w-full" />
      <div className="p-5">
        <Link to="/">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{cardData.title}</h5>
        </Link>
        <p className="mb-3">{cardData.canteen}</p>
        <div className="flex justify-center items-center m-1">
          <p className="mr-2">Quantity:</p>
          <select
            value={quantity}
            onChange={handleQuantityChange}
            className="px-3 py-2 text-sm font-medium text-center text-white bg-[#457b9d] rounded-lg hover:bg-[#457b8a] focus:ring-4 focus:outline-none focus:ring-[#457b9d] dark:bg-[#457b9d] dark:hover:bg-[#457b8a] dark:focus:ring-[#457b9d] m-1"
          >
            {Array.from(Array(6), (e, i) => (
              <option key={i + 1} value={i + 1}>
                {' '}
                {i + 1}
              </option>
            ))}
          </select>
        </div>
        <p className="mb-3 font-bold">₹{cardData.price}</p>
        <button
          onClick={addToCart}
          className="w-full text-white bg-[#457b9d] hover:bg-[#457b8a] focus:ring-4 focus:outline-none focus:ring-[#457b9d] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#457b9d] dark:hover:bg-[#52a8c0] dark:focus:ring-[#4b99af]"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default Card;