import React from 'react'
import FooterSLider from './FooterSLider/FooterSLider'

function Footer() {
  return (
    <footer>
      <div className='relative'>
        <FooterSLider/>
      </div>
        <div className='flex justify-evenly font-semibold mb-11'>
          {/* <div> */}
          <a href="">Dribble</a>
      <a href="">For designers</a>
      <a href="">Hire talent</a>
      <a href="">Inspiration</a>
      <a href="">Advertising</a>
      <a href="">Blog</a>
      <a href="">About</a>
      <a href="">Career</a>
      <a href="">Support</a>
      {/* </div> */}
      <div>
        <a href="">tw</a>
        <a href="">fb</a>
        <a href="">is</a>
        <a href="">pi</a>
      </div>
      </div>
      <div  className='flex justify-around text-gray-500 mt-11'>
        <div>
            <span className='mx-3'>@2024Dribble</span>
            <span className='mx-3'>Terms</span>
            <span className='mx-3'>Privacy</span>
            <span className='mx-3'>Cookies</span>
        </div>
        <div className='flex'>
            <p className='mx-3'>Jobs</p>
            <p className='mx-3'>Designers</p>
            <p className='mx-3'>Freelancers</p>
            <p className='mx-3'>Tags</p>
            <p className='mx-3'>Places</p>
            <p className='mx-3'>Resources</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
