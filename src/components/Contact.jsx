import React from 'react'

const Contact = () => {
  return (
    <div className="mt-10">
        <h1 className="ml-6 text-5xl font-bold text-center text-white">Contact</h1>
        <div className="flex flex-row justify-center mt-10">
        <a href="https://github.com/hendri213">
            <img src="img/github.png" alt="github" className="ml-8 rounded-full w-[120px] h-[120px]" />
          </a>
          <a href="https://www.instagram.com/dri.010">
            <img src="img/instagram.png" alt="instagram" className="ml-8 rounded-full w-[120px] h-[120px]" />
          </a>
          <a href="https://wa.me/089655968557">
            <img src="img/whatsapp.png" alt="whatsapp" className="ml-8 rounded-full w-[120px] h-[120px]" />
           </a>
        </div>
    </div>
  )
}

export default Contact