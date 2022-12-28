import React from 'react'

const Header = () => {
  return (
    <div className="container mx-auto text-white">
        <div className="grid md:grid-cols-2 md:ml-0 ml-8">
            <div className="mt-10">
                <h1 className="text-4xl  font-bold">Hendri Setiawan</h1>
                <p className="text-xl mt-5">Hai, saya Hendri Setiawan  Saya adalah seorang frontend developer.</p>
                 <p className="text-xl mt-3"> saya selalu haus akan rasa ingin tahu sebuah ilmu.dan saya telah mempelajari teknologi teknologi seputar web developer seperti HTML, CSS, JAVASCRIPT, REACT, serta NEXT JS. dan telah membuat beberapa aplikasi website seperti Homepage Ecommerce, Website List Film, serta Login Feature.</p>
            </div>
            <div>
                <img src="img/programming.png" alt="programming" />
            </div>
        </div>
    </div>
  )
}

export default Header