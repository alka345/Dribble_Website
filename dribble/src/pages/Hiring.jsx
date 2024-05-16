import React from 'react'

function Hiring() {
  return (
    <div>
      <div className='mt-11'>
        <h3 className='text-purple-500 font-semibold mt-11'>DRIBBBLE HIRING</h3>
        <h1 className='text-5xl mt-8 font-semibold tracking-wide '>Hire the world’s top designers</h1>
        <p className='font-semibold text-xl mt-8'>Find the perfect match for your next project using Designer Search, or let designers come to you through<br />  our Job Board. Dribbble Hiring makes it easier than ever to source top-notch design talent.</p>
      </div>
      {/* card */}
      <div className='flex mt-11 mb-10 justify-around'>
        {/* Card -1 */}
        <div className=' flex-start border-gray-600 bg-slate-200 rounded-2xl p-11'>
          <h3 className='font-semibold text-4xl text-gray-700'>Job Board</h3>
          <p className='mt-6 font-medium'>Let top creative talent come to you by posting  <br /> your listing on #1 design job board</p>
          <h2 className='mt-6 text-3xl text-gray-700'> $5/day</h2>
          <p>billed monthly</p>
          <ul className='font-medium mt-6'>
            <li className='flex mt-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>

              Average of 1.1k targeted clicks per month</li>
            <li className='flex mt-4'> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>

              Easily hire for full-time or freelance placements</li>
            <li className='flex mt-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>

               Swap out listings as needed</li>
          </ul>
          <button type="button" class="py-3.5 px-11 w-full me-2 mb-2 mt-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Post a job</button>
          <p className='text-gray-500 font-medium mt-4'>Cancel anytime. No strings attached.</p>
        </div>
        {/* Card -2 */}
        <div className='bg-purple-300 border rounded-2xl p-8'>
          <h3 className='font-normal  text-4xl pt-9'>Hiring Suite</h3>
          <p className='text-xl mt-6'>Tap into our ready-to-hire community of top <br /> designers with our seamless hiring solution.
          </p>
          <h2 className='text-3xl font-normal mt-4'>$10/day</h2>
          <p className='text-gray-600 font-medium'>billed monthly</p>

          <ul className='mt-6'>
            <li className='flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
              Job Board included</li>

            <li className='flex mt-4'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
              Search our entire database of available designers</li>

            <li  className='flex mt-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
              Filter by work, location, budget, and more</li>
            <li  className='flex mt-3'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>

              Unlimited messages for designer outreach</li>
          </ul>
          <li  className='flex mt-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>

            Save and bookmark designers for future needs</li>
          <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mt-4 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full">Get started</button>
          <p>Cancel anytime. No strings attached.</p>
        </div>
      </div>
      <h3 className='font-semibold text-xl mt-11'>We’ve helped some of the world’s best design-forward companies hire expert creatives</h3>
      {/* logo scroll carousel */}
      {/* 2 section */}
      <div className='flex mt-11 bg-green-300 '>
        <div><img src="https://images.pexels.com/photos/274025/pexels-photo-274025.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></div>
        <div className='mb-11 ml-11'>
          <h2 className='flex-end font-semibold text-3xl p-10 '>Hire faster & smarter with <br /> our designer search</h2>
          <p className='font-medium'>Easily find quality freelancers and full-time <br /> creatives using our powerful search engine <br /> with filters for specialty, location, experience <br /> level, and more. Search for available talent in <br /> the largest professional creative community <br /> with just a few clicks.</p>
          <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-8 py-2.5 me-2 mb-2 mt-5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Start your search</button>
        </div>
      </div>

      <div className='flex  bg-blue-300 justify-between rounded-3xl'>
        <div>
          <h3 className='font-semibold text-3xl text-gray-700 p-8'>The #1 job board for top design <br /> talent</h3>
          <p>Our job board postings receive an average of 1.1k targeted <br /> clicks per month and are viewed by over 1 million top <br /> designers globally. With a proven track record assisting <br /> over 60,000 companies, you’ll spend less time sorting <br /> through unqualified candidates and more time hiring <br />amazing talent.</p>
          <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-8 py-2.5 me-2 mb-2 mt-5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Post your job</button>
        </div>
        <div><img src="https://images.pexels.com/photos/7527911/pexels-photo-7527911.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></div>
      </div>
      <div className='flex w-full justify-center items-center border bg-green-400 rounded-3xl p-5 '>
        <div>

          <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

            
            <div className='flex-col mx-auto'>
              <p class="font-normal text-gray-700 dark:text-gray-400 tracking-widest text-2xl w-full">"Dribble is my go-to for hiring designs. <br />It always provides wealth of quality candidatees and instantly builds my pipelines"</p>
              <div className='flex mt-5'>
                <p >
                  <img
                width={50} height={50}
                className='rounded-full'
                src="https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></p>Lee Munre -<span>Head of design,OneSignal</span></div>
            </div>
          </a>

        </div>
        <div className='ml-4 rounded-xl' >
          
          <img
            className='rounded-xl tracking-wider font-medium'
            src="data:image/jpeg;base64,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" alt="" />

        </div>
      </div>

      <div className='mb-11'>
        <h1 className='text-3xl text-gray-700 font-semibold mt-11 mb-11'>Why brands choose Dribbble to hire design talent</h1>
        <div className='flex justify-between'>

          <div >

            <div>
              <h4 className='mt-6'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg>
</h4>
              <span className='text-xl bg-blue-300 flex items-start mt-4 p-2'>WORLD-CLASS TALENT</span>
              <p className='mt-5 flex items-start font-medium'>From graphic design to UX/UI, our community is home <br /> to the world’s leading designers and creative agencies.</p>
            </div>

            <div>
              <h4 className='mt-6'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</h4>
              <span className='bg-red-300 flex items-start mt-4 p-2'>$0 PLACEMENT FEES</span>
              <p className='mt-5 flex items-start  font-medium'>We make the hiring process as seamless and cost- <br />  effective as possible, so you can focus on building your <br /> business.</p>
            </div>
            <div>
              <h4 className='mt-6'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
</svg>
</h4>
              <span className='bg-green-300 flex items-start mt-4 p-2'>GLOBAL REACH</span>
              <p className='mt-5 flex items-start  font-medium'>With a network of designers spanning over 170 countries, <br />
                we make it easy to find world-class talent, wherever you <br /> are in the world.</p>
            </div>

          </div>

          <div>
            <img
              className='border-black object-fill rounded-3xl'
              src="https://images.pexels.com/photos/7658253/pexels-photo-7658253.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></div>
        </div>
      </div>

      <div className='mt-11 bg-slate-200'>
        <h1 className='font-semibold text-5xl pt-11 tracking-wide'>Find your next creative <br /> professional today!</h1>
        <div className='flex mt-11 mb-10 justify-around'>
        {/* Card -1 */}
        <div className=' flex-start border-gray-600 bg-slate-200 rounded-2xl p-11'>
          <h3 className='font-semibold text-4xl text-gray-700'>Job Board</h3>
          <p className='mt-6 font-medium'>Let top creative talent come to you by posting  <br /> your listing on #1 design job board</p>
          <h2 className='mt-6 text-3xl text-gray-700'> $5/day</h2>
          <p>billed monthly</p>
          <ul className='font-medium mt-6'>
            <li className='flex mt-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>

              Average of 1.1k targeted clicks per month</li>
            <li className='flex mt-4'> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>

              Easily hire for full-time or freelance placements</li>
            <li className='flex mt-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>

               Swap out listings as needed</li>
          </ul>
          <button type="button" class="py-3.5 px-11 w-full me-2 mb-2 mt-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Post a job</button>
          <p className='text-gray-500 font-medium mt-4'>Cancel anytime. No strings attached.</p>
        </div>
        {/* Card -2 */}
        <div className='bg-purple-300 border rounded-2xl p-8'>
          <h3 className='font-normal  text-4xl pt-9'>Hiring Suite</h3>
          <p className='text-xl mt-6'>Tap into our ready-to-hire community of top <br /> designers with our seamless hiring solution.
          </p>
          <h2 className='text-3xl font-normal mt-4'>$10/day</h2>
          <p className='text-gray-600 font-medium'>billed monthly</p>

          <ul className='mt-6'>
            <li className='flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
              Job Board included</li>

            <li className='flex mt-4'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
              Search our entire database of available designers</li>

            <li  className='flex mt-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
              Filter by work, location, budget, and more</li>
            <li  className='flex mt-3'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>

              Unlimited messages for designer outreach</li>
          </ul>
          <li  className='flex mt-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>

            Save and bookmark designers for future needs</li>
          <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mt-4 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full">Get started</button>
          <p>Cancel anytime. No strings attached.</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Hiring
