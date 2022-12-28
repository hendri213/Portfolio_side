import React from 'react'

const Projects = () => {
  return (
          <div className="mt-10">
            <h1 className="text-center text-white text-5xl font-bold ml-2 mt-[90px]">Projects</h1> 
            <div className="flex flex-row items-center justify-center mt-[30px] ml-2">
              <div>
                <div>
                  <img className="md:w-[430px] md:h-[270px] ml-8" src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Homepage Ecommerce" />
                </div>
                <div>
                  <a href="#homepage" className="text-center  text-white text-2xl font-bold ml-[100px]">Homepage Ecommerce</a>
                   <h3 className="ml-[75px] text-white text-sm mt-2">Dibuat dengan : NEXT JS, React JS, TAILWIND CSS</h3>
                </div>
              </div>
              <div>
                <div>
                  <img className="md:w-[430px] md:h-[270px] ml-8" src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Mvoie List" />
                </div>
                <div>
                  <a href="#movielist" className="text-white text-2xl font-bold ml-[180px]">Movie List</a>
                  <h3 className="ml-[80px] text-white text-sm mt-2">Dibuat dengan : NEXT JS, React JS, TAILWIND CSS</h3>
                </div>
              </div>
              <div>
                <div>
                  <img className="md:w-[430px] md:h-[270px] ml-8" src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Feature Login" />
                </div>
                <div>
                  <a href="#loginfeature" className="text-white text-2xl font-bold ml-[180px]">Login Feature</a>
                  <h3 className="ml-[px] text-white text-sm mt-2">Dibuat dengan : NEXT JS, React JS, TAILWIND CSS</h3>
                </div>
              </div>
            </div>
          </div>
        )
}

export default Projects