function CartCard({ cardData, fetchFun }) {

  const updateQuantity = async (newQty) => {
    try {
      const response = await fetch(`/api/cart/${cardData._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ qty: newQty }),
      });

      if (response.ok) {
        console.log('Quantity updated successfully!');
        fetchFun('/api/cart');
      } else {
        console.error('Failed to update quantity');
      }
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  const decreaseQuantity = () => {
    if (cardData.qty > 1) {
      updateQuantity(cardData.qty - 1);
    }
  };

  const increaseQuantity = () => {
    updateQuantity(cardData.qty + 1);
  };


  const deleteItem = async () => {
    try {
      const response = await fetch(`/api/cart/${ cardData._id }`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        console.log('Item deleted successfully!');
        fetchFun('/api/cart')
      } else {
        console.error('Failed to delete item');
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div className="relative mt-4 flex flex-col items-center bg-white border border-gray-100 rounded-lg shadow md:flex-row md:max-w-2xl hover:bg-gray-100 dark:border-gray-600 ">
      <img
        className="object-cover w-48 h-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
        src={cardData.imageSrc}
        alt="leopard"
      />
      <div className="p-4 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h5 className="m-2 text-2xl font-bold tracking-tight text-black">
              {cardData.title}
            </h5>
            <p className="mb-3 font-bold text-lg text-red-800">
              Price: ₹{cardData.price}
            </p>
          </div>
          <div className="flex items-center space-x-2 mb-2 md:mb-0">
            <p className="m-2 text-xl tracking-tight text-black">
              Quantity:
            </p>
            <button onClick={decreaseQuantity} className="px-2 py-1 bg-gray-300 rounded-full hover:bg-gray-300 focus:outline-none w-8 text-center">
              -
            </button>
            <span className="text-gray-900 ">
              {cardData.qty}
            </span>
            <button onClick={increaseQuantity} className="px-2 py-1 bg-gray-300 rounded-full hover:bg-gray-300 focus:outline-none w-8 text-center">
              +
            </button>
          </div>
          <button onClick={deleteItem} className="ml-2 px-2 py-1 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
