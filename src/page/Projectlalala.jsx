import React from 'react'
import Header from '../components/Header';
import { useMediaQuery } from 'react-responsive';

const Projectlalala = () => {
  const isPC = useMediaQuery({ minWidth: 1024 });

  return (
    <div className={`${isPC ? 'min-w-[80vw] max-w-[1200px] min-h-[120px]' : 'min-w-[100vw]  min-h-[50px] '} `}>
      <Header />
      {isPC? (
        <div>
          <div id="gallery" className="relative w-full mt-[60px]" data-carousel="slide ">
    
            <div className="relative h-[430px] overflow-hidden rounded-lg ">
         
              
              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="/public/home-page.png" className="absolute block w-[1000px] h-[400px] rounded-xl -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
              </div>

              <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                <img src="/public/profile.png" className="rounded-xl absolute block w-[1000px] h-[400px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
              </div>

        

            </div>
    
            <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>

            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>

          <div>
            <img src="/pf.png" alt="" width={100} height={100} />
          </div>
        </div>
      ) : (
        <div>
          <div id="gallery" className="relative w-full mt-[60px]" data-carousel="slide ">
    
            <div className="relative h-[430px] overflow-hidden rounded-lg ">
         
              
<div className="hidden duration-700 ease-in-out" data-carousel-item>
  <img src="/home-page.png" className="absolute block w-[1000px] h-[400px] rounded-xl -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
</div>

<div className="hidden duration-700 ease-in-out" data-carousel-item="active">
  <img src="profile.png" className="rounded-xl absolute block w-[1000px] h-[400px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
</div>


            </div>
    
            <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>

            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
      )}
      
      
    </div>
  )
}

export default Projectlalala;
