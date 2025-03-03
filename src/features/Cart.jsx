import React, { useState } from 'react';

const Cart = () => {
const [showPopup, setShowPopup] = useState(false);

// Default cart items (3 fixed products)
const [cart, setCart] = useState([
{ id: 1, title: 'Ralph Lauren Perfume', price: '$3,000', rating: "5.0", discountPrice: '$4000', rateCount: "24", image: 'https://res.cloudinary.com/eguono/image/upload/v1724144617/perfume%20house%20jpg/Ralph_Lauren_Perfume_z8v8mw.jpg' },
{ id: 2, title: 'Oud Touch Franck', price: '$3,000', discountPrice: '$4000', image: 'https://res.cloudinary.com/eguono/image/upload/v1724144617/perfume%20house%20jpg/Oud_Touch_Franck_Oliver_snhuff.jpg' },
{ id: 3, title: 'Elegance Essence', price: '$3,000', rating: "5.0", discountPrice: '$4000', rateCount: "24", image: 'https://res.cloudinary.com/eguono/image/upload/v1724144617/perfume%20house%20jpg/Elegance_Essence_ah22rz.jpg' },
]);

// Function to remove an item from the cart
const removeFromCart = (id) => {
setCart(cart.filter((item) => item.id !== id));
};

return (
<>
<div className="w-55 h-110 border p-4 rounded-lg shadow-lg">
<h3 className="text-xl font-semibold mb-4">Cart ({cart.length}/3)</h3>

{cart.length === 0 ? (  
      <p className="text-gray-500">Cart is empty</p>  
    ) : (  
      cart.map((item) => (  
        <div key={item.id} className="flex items-center justify-between border-b pb-2 mb-2">  
          <img src={item.image} alt={item.title} className="w-16 h-16 rounded-lg" />  
          <p className="text-sm font-semibold">{item.title}</p>  
          <button  
            onClick={() => removeFromCart(item.id)}  
            className="text-red-500 hover:text-red-700 border border-1px cursor-pointer"   
          >  
            Remove  
          </button>  
        </div>  
      ))  
    )} 
      

    <button  
      onClick={() => setShowPopup(true)}  
      className="mt-4 bg-[#8D34FF] text-white px-4 py-2 rounded-lg w-full hover:bg-green-600"  
    >  
      Confirm  
    </button> 
   
  </div>  

  {/* Cart Popup */}  
  {showPopup && (  
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">  
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">  
        <h3 className="text-xl font-bold mb-4">Cart Items</h3>  
        <div className="flex gap-4">  
          {cart.map((item) => (  
            <img key={item.id} src={item.image} alt={item.title} className="w-30 h-30 rounded-lg" />  
          ))}  
        </div>  
        <button  
          onClick={() => setShowPopup(false)}  
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"  
        >  
          Close  
        </button>  
      </div>  
    </div>  
  )}  
</>

);
};
export default Cart;