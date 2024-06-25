import React, { useState } from 'react';
import Header from '../components/Header';
import { useMediaQuery } from 'react-responsive';

const Projectlalala = () => {
  const isPC = useMediaQuery({ minWidth: 1024 });
  // const [isFullScreen, setIsFullScreen] = useState(false);
  // const [currentImageIndex, setCurrentImageIndex] = useState(null);
  // const images = [
  //   '/lalala/home-toship.png',
  //   '',
  // ];

  // const handleImageClick = (index) => {
  //   setIsFullScreen(true);
  //   setCurrentImageIndex(index);
  // };

  // const handleCloseFullScreen = () => {
  //   setIsFullScreen(false);
  //   setCurrentImageIndex(null);
  // };

  // const handleKeyDown = (event) => {
  //   if (isFullScreen && event.key === 'Escape') {
  //     handleCloseFullScreen();
  //   }
  // };

  // React.useEffect(() => {
  //   document.addEventListener('keydown', handleKeyDown);

  //   return () => document.removeEventListener('keydown', handleKeyDown);
  // }, [isFullScreen]); 


  return (
    <div className={`${isPC ? 'min-w-[80vw] max-w-[1200px] min-h-[120px]' : 'min-w-[100vw]  min-h-[50px] '} `}>
      <Header />
      {isPC? (
        <div className=' mt-24'>
          <div className=' flex justify-center mb-12'>
            <h1 className=' text-[40px] font-bold text-[#F5F7F8]'>LALALA-SHOP</h1>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-5 my-10">
            <div>
              <img class="h-[230px] w-[370px] rounded-lg" src="/lalala/home-page.png" alt="Gallery image" />
            </div>

            <div>
              <img class="h-[230px] w-[370px] rounded-lg" src="/lalala/home-register.png" alt="Gallery image" />
            </div>

            <div>
              <img class="h-[230px] w-[370px] rounded-lg" src="/lalala/home-login.png" alt="Gallery image" />
            </div>

            <div>
              <img class="h-[230px] w-[370px] rounded-lg" src="/lalala/home-category.png" alt="Gallery image" />
            </div>

            <div>
              <img class="h-[230px] w-[370px] rounded-lg" src="/lalala/home-cart.png" alt="Gallery image" />
            </div>

            <div>
              <img class="h-[230px] w-[370px] rounded-lg" src="/lalala/home-detail.png" alt="Gallery image" />
            </div>

            <div>
              <img class="h-[230px] w-[370px] rounded-lg" src="/lalala/home-detail-addbtn.png" alt="Gallery image" />
            </div>

            <div>
              <img class="h-[230px] w-[370px] rounded-lg" src="/lalala/home-checkout.png" alt="Gallery image" />
            </div>

            <div>
              <img class="h-[230px] w-[370px] rounded-lg" src="/lalala/home-topay.png" alt="Gallery image" />
            </div>

            <div>
              <img class="h-[230px] w-[370px] rounded-lg" src="/lalala/home-pay.png" alt="Gallery image" />
            </div>
            <div>
              <img class="h-[230px] w-[370px] rounded-lg" src="/lalala/home-toship.png" alt="Gallery image" />
            </div>
            <div>
              <img class="h-[230px] w-[370px] rounded-lg" src="/lalala/home-toreceive.png" alt="Gallery image" />
            </div>
            <div>
              <img class="h-[230px] w-[370px] rounded-lg" src="/lalala/home-profile.png" alt="Gallery image" />
            </div>
            <div>
              <img class="h-[230px] w-[370px] rounded-lg" src="/lalala/home-admin-toship.png" alt="Gallery image" />
            </div>
            <div>
              <img class="h-[230px] w-[370px] rounded-lg" src="/lalala/home-admin-toreceive.png" alt="Gallery image" />
            </div>
          </div>
        </div>
      ):(
        <div className=' mt-12'>
          <div className=' flex justify-center mb-12'>
            <h1 className=' text-[40px] font-bold text-[#F5F7F8]'>LALALA-SHOP</h1>
          </div>
          <div class="grid grid-cols-1 gap-5 my-10">
            <div className=' flex justify-center'>
              <img className="h-[300px] w-[600px] rounded-lg" src="/lalala/home-page.png" alt="Gallery image" />
            </div>

            <div className=' flex justify-center'>
              <img className="h-[300px] w-[600px] rounded-lg" src="/lalala/home-register.png" alt="Gallery image" />
            </div>

            <div className=' flex justify-center'>
              <img className="h-[300px] w-[600px] rounded-lg" src="/lalala/home-login.png" alt="Gallery image" />
            </div>

            <div className=' flex justify-center'>
              <img className="h-[300px] w-[600px] rounded-lg" src="/lalala/home-category.png" alt="Gallery image" />
            </div>

            <div className=' flex justify-center'>
              <img className="h-[300px] w-[600px] rounded-lg" src="/lalala/home-cart.png" alt="Gallery image" />
            </div>

            <div className=' flex justify-center'>
              <img className="h-[300px] w-[600px] rounded-lg" src="/lalala/home-detail.png" alt="Gallery image" />
            </div>

            <div className=' flex justify-center'>
              <img className="h-[300px] w-[600px] rounded-lg" src="/lalala/home-detail-addbtn.png" alt="Gallery image" />
            </div>

            <div className=' flex justify-center'>
              <img className="h-[300px] w-[600px] rounded-lg" src="/lalala/home-checkout.png" alt="Gallery image" />
            </div>

            <div className=' flex justify-center'>
              <img className="h-[300px] w-[600px] rounded-lg" src="/lalala/home-topay.png" alt="Gallery image" />
            </div>

            <div className=' flex justify-center'>
              <img className="h-[300px] w-[600px] rounded-lg" src="/lalala/home-pay.png" alt="Gallery image" />
            </div>

            <div className=' flex justify-center'>
              <img className="h-[300px] w-[600px] rounded-lg" src="/lalala/home-toship.png" alt="Gallery image" />
            </div>

            <div className=' flex justify-center'>
              <img className="h-[300px] w-[600px] rounded-lg" src="/lalala/home-toreceive.png" alt="Gallery image" />
            </div>

            <div className=' flex justify-center'>
              <img className="h-[300px] w-[600px] rounded-lg" src="/lalala/home-profile.png" alt="Gallery image" />
            </div>

            <div className=' flex justify-center'>
              <img className="h-[300px] w-[600px] rounded-lg" src="/lalala/home-admin-toship.png" alt="Gallery image" />
            </div>

            <div className=' flex justify-center'>
              <img className="h-[300px] w-[600px] rounded-lg" src="/lalala/home-admin-toreceive.png" alt="Gallery image" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Projectlalala;


{/* <div className="grid grid-cols-2 gap-6">
      {images.map((imageSrc, index) => (
        <div key={index} className="relative">
          <img
            className="h-auto max-w-full rounded-lg cursor-pointer"
            src={imageSrc}
            alt="Gallery image"
            onClick={() => handleImageClick(index)}
          />
        </div>
      ))}

      {isFullScreen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-75 flex justify-center items-center"
          onClick={handleCloseFullScreen}
        >
          <img
            className="h-auto max-w-full object-contain rounded-lg"
            src={images[currentImageIndex]}
            alt="Full-screen image"
          />
        </div>
      )} */}
    // </div>