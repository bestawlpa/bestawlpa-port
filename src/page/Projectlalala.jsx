// import React, { useState } from 'react';
// import Header from '../components/Header';
// import { useMediaQuery } from 'react-responsive';

// const Projectlalala = () => {
//   const isPC = useMediaQuery({ minWidth: 1024 });
  
//   return (
//     <div className={`${isPC ? 'min-w-[80vw] max-w-[1200px] min-h-[120px]' : 'min-w-[100vw]  min-h-[50px] '} `}>
//       <Header />
//       {isPC? (
//         <div className=' mt-24'>
//           <div className=' flex justify-center mb-12'>
//             <h1 className=' text-[40px] font-bold text-[#F5F7F8]'>LALALA-SHOP</h1>
//           </div>
//           <div class="grid grid-cols-2 md:grid-cols-3 gap-5 my-10">
//             <div>
//               <img class="h-[230px] w-[370px] rounded-lg" src="/lalala/home-page.png" alt="Gallery image" />
//             </div>

//             <div>
//               <img class="h-[230px] w-[370px] rounded-lg" src="/lalala/home-register.png" alt="Gallery image" />
//             </div>

//             <div>
//               <img class="h-[230px] w-[370px] rounded-lg" src="/lalala/home-login.png" alt="Gallery image" />
//             </div>

//             <div>
//               <img class="h-[230px] w-[370px] rounded-lg" src="/lalala/home-category.png" alt="Gallery image" />
//             </div>

//             <div>
//               <img class="h-[230px] w-[370px] rounded-lg" src="/lalala/home-cart.png" alt="Gallery image" />
//             </div>

//             <div>
//               <img class="h-[230px] w-[370px] rounded-lg" src="/lalala/home-detail.png" alt="Gallery image" />
//             </div>

//             <div>
//               <img class="h-[230px] w-[370px] rounded-lg" src="/lalala/home-detail-addbtn.png" alt="Gallery image" />
//             </div>

//             <div>
//               <img class="h-[230px] w-[370px] rounded-lg" src="/lalala/home-checkout.png" alt="Gallery image" />
//             </div>

//             <div>
//               <img class="h-[230px] w-[370px] rounded-lg" src="/lalala/home-topay.png" alt="Gallery image" />
//             </div>

//             <div>
//               <img class="h-[230px] w-[370px] rounded-lg" src="/lalala/home-pay.png" alt="Gallery image" />
//             </div>
//             <div>
//               <img class="h-[230px] w-[370px] rounded-lg" src="/lalala/home-toship.png" alt="Gallery image" />
//             </div>
//             <div>
//               <img class="h-[230px] w-[370px] rounded-lg" src="/lalala/home-toreceive.png" alt="Gallery image" />
//             </div>
//             <div>
//               <img class="h-[230px] w-[370px] rounded-lg" src="/lalala/home-profile.png" alt="Gallery image" />
//             </div>
//             <div>
//               <img class="h-[230px] w-[370px] rounded-lg" src="/lalala/home-admin-toship.png" alt="Gallery image" />
//             </div>
//             <div>
//               <img class="h-[230px] w-[370px] rounded-lg" src="/lalala/home-admin-toreceive.png" alt="Gallery image" />
//             </div>
//           </div>
//         </div>
//       ):(
//         <div className=' mt-12'>
//           <div className=' flex justify-center mb-12'>
//             <h1 className=' text-[40px] font-bold text-[#F5F7F8]'>LALALA-SHOP</h1>
//           </div>
//           <div class="grid grid-cols-1 gap-5 my-10">
//             <div className=' flex justify-center'>
//               <img className="h-[300px] w-[600px] rounded-lg" src="/lalala/home-page.png" alt="Gallery image" />
//             </div>

//             <div className=' flex justify-center'>
//               <img className="h-[300px] w-[600px] rounded-lg" src="/lalala/home-register.png" alt="Gallery image" />
//             </div>

//             <div className=' flex justify-center'>
//               <img className="h-[300px] w-[600px] rounded-lg" src="/lalala/home-login.png" alt="Gallery image" />
//             </div>

//             <div className=' flex justify-center'>
//               <img className="h-[300px] w-[600px] rounded-lg" src="/lalala/home-category.png" alt="Gallery image" />
//             </div>

//             <div className=' flex justify-center'>
//               <img className="h-[300px] w-[600px] rounded-lg" src="/lalala/home-cart.png" alt="Gallery image" />
//             </div>

//             <div className=' flex justify-center'>
//               <img className="h-[300px] w-[600px] rounded-lg" src="/lalala/home-detail.png" alt="Gallery image" />
//             </div>

//             <div className=' flex justify-center'>
//               <img className="h-[300px] w-[600px] rounded-lg" src="/lalala/home-detail-addbtn.png" alt="Gallery image" />
//             </div>

//             <div className=' flex justify-center'>
//               <img className="h-[300px] w-[600px] rounded-lg" src="/lalala/home-checkout.png" alt="Gallery image" />
//             </div>

//             <div className=' flex justify-center'>
//               <img className="h-[300px] w-[600px] rounded-lg" src="/lalala/home-topay.png" alt="Gallery image" />
//             </div>

//             <div className=' flex justify-center'>
//               <img className="h-[300px] w-[600px] rounded-lg" src="/lalala/home-pay.png" alt="Gallery image" />
//             </div>

//             <div className=' flex justify-center'>
//               <img className="h-[300px] w-[600px] rounded-lg" src="/lalala/home-toship.png" alt="Gallery image" />
//             </div>

//             <div className=' flex justify-center'>
//               <img className="h-[300px] w-[600px] rounded-lg" src="/lalala/home-toreceive.png" alt="Gallery image" />
//             </div>

//             <div className=' flex justify-center'>
//               <img className="h-[300px] w-[600px] rounded-lg" src="/lalala/home-profile.png" alt="Gallery image" />
//             </div>

//             <div className=' flex justify-center'>
//               <img className="h-[300px] w-[600px] rounded-lg" src="/lalala/home-admin-toship.png" alt="Gallery image" />
//             </div>

//             <div className=' flex justify-center'>
//               <img className="h-[300px] w-[600px] rounded-lg" src="/lalala/home-admin-toreceive.png" alt="Gallery image" />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// export default Projectlalala;





import React, { useState } from 'react';
import Header from '../components/Header';
import { useMediaQuery } from 'react-responsive';

const Projectlalala = () => {
  const isPC = useMediaQuery({ minWidth: 1024 });
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openModal = (src) => {
    setCurrentImage(src);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage('');
  };

  const images = [
    "/lalala/home-page.png",
    "/lalala/home-register.png",
    "/lalala/home-login.png",
    "/lalala/home-category.png",
    "/lalala/home-cart.png",
    "/lalala/home-detail.png",
    "/lalala/home-detail-addbtn.png",
    "/lalala/home-checkout.png",
    "/lalala/home-topay.png",
    "/lalala/home-pay.png",
    "/lalala/home-toship.png",
    "/lalala/home-toreceive.png",
    "/lalala/home-profile.png",
    "/lalala/home-admin-toship.png",
    "/lalala/home-admin-toreceive.png",
  ];

  return (
    <div className={`${isPC ? 'min-w-[80vw] max-w-[1200px] min-h-[120px]' : 'min-w-[100vw] min-h-[50px]'}`}>
      <Header />
      {isPC ? (
        <div className='mt-24'>
          <div className='flex justify-center mb-12'>
            <h1 className='text-[40px] font-bold text-[#F5F7F8]'>LALALA-SHOP</h1>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 w-max-[600px] gap-5 mx-auto my-10">
            {images.map((src, index) => (
              <div key={index} onClick={() => openModal(src)}>
                <img className="h-[230px] w-[370px] rounded-lg cursor-pointer" src={src} alt={`Gallery image ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className='mt-12 max-w-[600px] flex flex-col items-center justify-center'>
          <div className='flex justify-center mb-12'>
            <h1 className='text-[40px] font-bold text-[#F5F7F8]'>LALALA-SHOP</h1>
          </div>
          <div className="grid grid-cols-1 gap-5 my-10 mx-auto max-w-[600px]">
            {images.map((src, index) => (
              <div key={index} className='flex justify-center' >
                <img className="h-[250px] w-[380px] rounded-lg cursor-pointer" src={src} alt={`Gallery image ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      )}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50" onClick={closeModal}>
          <img className="max-h-[90vh] max-w-[90vw]" src={currentImage} alt="Full screen" />
        </div>
      )}
    </div>
  );
};

export default Projectlalala;
