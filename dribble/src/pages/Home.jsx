import React ,{useState} from 'react'
import Images from '../components/Images'
import Footer from '../components/Footer';
import Carousel from '../components/carousel/Carousel';
import Slider from '../components/slider/Slider';


function Home() {
  const [designs, setDesigns] = useState([]);
  return (
    <div className='w-full h-full mt-11'>
      <div >
    <button className='bg-yellow-200 rounded-full border-none py-2.5 px-10'>
      Over 3 million ready-to-work creatives!
    </button>
    <h1 className='font-semibold text-7xl flex-col justify-center items-center my-11'>The world's destination <br />
    for design</h1>
    <p className='font-medium text-xl '>Get inspired by the work of millions of top-rated designers&agencies around the world.</p>
    <button className='bg-black text-white rounded-full p-4 mt-10'>Get started</button>
    </div>
    <div className=' relative'>
      <Slider/>
    </div>
    <h2 className='font-normal text-5xl mb-10'>Explore inspiring designs</h2>
    <div className='mt-10 mb-10'>
      <Images/>
    </div>
    
    <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-8 py-3.5 me-2 mb-11 dark:bg-gray-900 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-900">Browse more inspiration</button>

<div className='bg-yellow-500 mt-11 mb-11'>
  <h1 className='font-medium text-7xl pt-11'>Find your next <br />designer today</h1>
  <p className='mt-6 text-lg font-medium font-sans'>The world's leading brands use Dribble to hire creative talent. <br />
    Browse millions of top-rated portfolios to find your <br /> perfect creative match
  </p>
  <div className='mt-6'>
  <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-3.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Get started now</button>
  <button type="button" class="py-3.5 px-5 me-2 mb-2 mt-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Learn about hiring</button>
  <p className='mt-10 pb-11 font-semibold'>Are you a designer?<a href="">Join Dribble</a></p>
  </div>
  
</div>


    </div>
   
      
    
  )
}

export default Home
