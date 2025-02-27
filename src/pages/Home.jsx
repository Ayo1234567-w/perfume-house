import React from 'react'
import Product from '../features/Product'
import Cart from '../features/Cart'

const Home = () => {
  return (
    <>
  
    <main className='container mx-auto p-[25px] md:px-[15px] lg:py-[33px] lg:px-[99px] md:grid grid-cols-3 gap-8'>
       <section className='col-span-2'>
         <Product/>   
       </section>

       <section className='border'>
           <Cart/>
       </section>
    </main>
    </>
  )
}

export default Home