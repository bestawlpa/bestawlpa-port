import React,{useState} from 'react';
import Header from '../components/Header';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';

const Projectlalala = () => {
  const isPC = useMediaQuery({ minWidth: 1024 });
  const [clickedItem, setClickedItem] = useState(null); 

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
  
  const handleClick = (index) => {
    setClickedItem(clickedItem === index ? null : index); 
  };
  
  return (
    <div className={`${isPC ? 'min-w-[80vw] min-h-[120px]' : 'min-w-[100vw]  min-h-[50px] '} `}>
      <Header />
      {isPC? (
          <div className=' mt-24 flex flex-col'>
            <div className=' flex flex-col min-w-[1200px] items-center  mb-12'>
              <div  className=' text-[50px] font-extrabold text-[#141E46]'>
                <h1>LALALA-SHOP</h1>
              </div>
              <div className=' max-w-[900px] font-semibold mt-6 text-[20px] text-[#F5F7F8]'>
                <p>LALALA-SHOP is an online shopping platform designed to offer a wide range of products, including electronics, apparel, and household items. 
                  The platform aims to provide a seamless shopping experience with user-friendly navigation and a secure checkout process.</p>
                <p className=' mt-4 text-[25px] text-[#141E46]'>Features</p>
                <ul className=' '>
                  <li>- Homepage</li>
                  <li>- Product Listing</li>
                  <li>- Product Details</li>
                  <li>- Category Product</li>
                  <li>- Shopping Cart</li>
                  <li>- Checkout Process</li>
                  <li>- Admin Role</li>
                  <li>- User Registration and Login System</li>
                </ul>
                <div className=' mt-4 flex flex-col'>
                  <p>You can use this template as a starting point and modify it according to your specific needs</p>
                  <p className=' text-[#FCE09B]'><GitHubIcon />  <Link to="https://github.com/bestawlpa/lalala-shop" className=' text-[#2B2A4C]'>bestawlpa</Link></p>
                </div>
              </div>
            </div>

          
            <div className=' min-w-[1200px] flex justify-center'>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-5 my-10">
                {images.map((src,index) => (
                  <div key={index} onClick={() => handleClick(index)}>
                    <img src={src} class="h-[230px] w-[370px] rounded-lg" alt="Gallery image"/>
                  </div>
                ))}
             </div>
            </div>
          </div>
        ):(
          <div className='mt-12 flex flex-col items-center justify-center'>
            <div className=' max-w-[600px]'>
              <div className='flex justify-center mb-12'>
                <h1 className='text-[40px] font-bold text-[#141E46]'>LALALA-SHOP</h1>
              </div>

              <div className=' max-w-[370px] mx-auto font-semibold mt-6 text-[20px] text-[#F5F7F8]'>
                <p>LALALA-SHOP is an online shopping platform designed to offer a wide range of products, including electronics, apparel, and household items. 
                  The platform aims to provide a seamless shopping experience with user-friendly navigation and a secure checkout process.</p>
                <p className=' mt-4 text-[25px] text-[#141E46]'>Features</p>
                <ul className=' '>
                  <li>- Homepage</li>
                  <li>- Product Listing</li>
                  <li>- Product Details</li>
                  <li>- Category Product</li>
                  <li>- Shopping Cart</li>
                  <li>- Checkout Process</li>
                  <li>- Admin Role</li>
                  <li>- User Registration and Login System</li>
                </ul>
                <div className=' mt-4 flex flex-col'>
                  <p>You can use this template as a starting point and modify it according to your specific needs</p>
                  <p className=' text-[#FCE09B]'><GitHubIcon />  <Link to="https://github.com/bestawlpa/lalala-shop" className=' text-[#2B2A4C]'>bestawlpa</Link></p>
                </div>
              </div>
            </div>
            
            
            <div className="grid grid-cols-1 gap-5 my-10 mx-auto max-w-[600px]">
              {images.map((src, index) => (
                  <div key={index} className='flex justify-center' >
                    <img className="h-[250px] w-[370px] rounded-lg cursor-pointer" src={src} alt="Gallery image" />
                  </div>
              ))}
            </div>
          </div>
        )}

        {/* fullscreen */}

        {clickedItem !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50" onClick={() => setClickedItem(null)}>
          <img className="max-h-[90vh] max-w-[80vw] rounded-lg" src={images[clickedItem]} alt="Full screen" />
        </div>
      )}
    </div>
  );
}
export default Projectlalala;





