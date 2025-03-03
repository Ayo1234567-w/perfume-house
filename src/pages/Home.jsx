import React, { useState } from 'react';
import Product from '../features/Product';
import Cart from '../features/Cart';

const Home = () => {
  const [cart, setCart] = useState([]);

  // Sample product list
  const products = [
    { id: 1, title: 'Ralph Laren Perfume', price: '$3,000', rating:"5.0", discountPrice: '$4000', rateCount:"24", image: 'https://res.cloudinary.com/eguono/image/upload/v1724144617/perfume%20house%20jpg/Ralph_Lauren_Perfume_z8v8mw.jpg' },
    { id: 2, title: 'Oud Touch Franck', price: '$3000', discountPrice: '$4000', image: 'https://res.cloudinary.com/eguono/image/upload/v1724144617/perfume%20house%20jpg/Oud_Touch_Franck_Oliver_snhuff.jpg' },
    { id: 3, title: 'Elegance Essence', price: '$3,000', rating:"5.0", discountPrice: '$4000', rateCount:"24", image: 'https://res.cloudinary.com/eguono/image/upload/v1724144617/perfume%20house%20jpg/Elegance_Essence_ah22rz.jpg' },
    { id: 4, title: 'Timeless Bouquet', price: '$3,000', rating:"5.0", discountPrice: '$4000', rateCount:"24", image: 'https://res.cloudinary.com/eguono/image/upload/v1724144617/perfume%20house%20jpg/Timeless_Bouquet_exajsl.jpg' },
    { id: 5, title: 'Aventos Blue for Him', price: '$3,000', rating:"5.0", discountPrice: '$4000', rateCount:"24", image: 'https://res.cloudinary.com/eguono/image/upload/v1724144617/perfume%20house%20jpg/Aventos_Blue_for_Him_sg2dxx.jpg' },
    { id: 6, title: 'Asad Mousouff', price: '$3,000', rating:"5.0", discountPrice: '$4000', rateCount:"24", image: 'https://res.cloudinary.com/eguono/image/upload/v1724144617/perfume%20house%20jpg/Asad_Mousouff_p29rk3.jpg' },

  ];

  // Function to add items to the cart
  const addToCart = (product) => {
    if (cart.length >= 3) {
      alert('You can only add 3 items to the cart!');
      return;
    }
    if (!cart.some((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  // Function to remove items from the cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <>
      <main className="container mx-auto p-[25px] md:px-[15px] lg:py-[33px] lg:px-[99px] md:grid grid-cols-3 gap-8">
        {/* Product List Section */}
        <section className="col-span-2">
          <div className="grid grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="border p-4 rounded-lg shadow-lg text-center">
                <img src={product.image} alt={product.title} className="w-32 mx-auto rounded-lg" />
                <h4 className="text-lg font-semibold mt-2">{product.title}</h4>
                <p className="text-gray-500">
                  Price: <span className="text-[#8D34FF] font-bold">{product.price}</span>
                </p>
                <p className="text-sm text-gray-400 line-through">Discount: {product.discountPrice}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-2  text-white bg-[#8D34FF] px-4 py-1 rounded-lg hover:bg-blue-600"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Cart Section */}
        <section >
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </section>
      </main>
    </>
  );
};

export default Home;

