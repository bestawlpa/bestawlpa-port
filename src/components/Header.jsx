import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function Header() {
  const isPC = useMediaQuery({ minWidth: 1024 });
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className={`${isPC ? 'min-w-[80vw] max-w-[1200px] min-h-[120px]' : 'min-w-[100vw]  min-h-[50px] '} `}>
      {isPC? (
        <div className=" flex text-[50px] h-[100px] font-bold my-[60px] dm-sans-text">
          <div className=' flex w-[50%]  justify-around font-black'>
            <Link to="/" className=' flex w-full justify-around text-[#F19ED2] text-[50px]'>

              <div className=' w-[50px] h-[120px] flex items-center'>
                <ul className=' w-[50px] h-[80px] bg-white hover:bg-[#F1F8E8] hover:text-[#55AD9B] text-center rounded-lg'>b</ul>
              </div>

              <div  className=' w-[50px] h-[120px] flex items-center'>
                <ul className=' w-[50px] h-[100px] bg-white hover:bg-[#987070] hover:text-[#F1E5D1] text-center rounded-lg'>e</ul>
              </div>
              
              <div  className=' w-[50px] h-[120px] flex items-center'>
                <ul className=' w-[50px] h-[70px] bg-white hover:bg-[#FFD0D0] hover:text-[#3AA6B9] text-center rounded-lg'>s</ul>
              </div>
              
              <div className=' w-[50px] h-[120px] flex items-start'>
                <ul className=' w-[50px] h-[100px] bg-white hover:bg-[#8EACCD] hover:text-[#D7E5CA] text-center rounded-lg'>t</ul>
              </div>
              
              <div className=' w-[50px] h-[120px] flex items-center'>
                <ul className=' w-[50px] h-[80px] bg-white hover:bg-[#FBA1B7] hover:text-[#FFDBAA] text-center rounded-lg'>a</ul>
              </div>
              
              <div className=' w-[50px] h-[120px] flex items-center'>
                <ul className=' w-[50px] h-[100px] bg-white hover:bg-[#CBFFA9] hover:text-[#FF9B9B] text-center rounded-lg'>w</ul>
              </div>
              
              <div className=' w-[50px] h-[120px] flex items-center'>
                <ul className=' w-[50px] h-[70px] bg-white hover:bg-[#F2E8C6] hover:text-[#A73121] text-center rounded-lg'>l</ul>
              </div>
              
              <div className=' w-[50px] h-[120px] flex items-center'>
                <ul className=' w-[50px] h-[100px] bg-white hover:bg-[#0D9276] hover:text-[#BBE2EC] text-center rounded-lg'>p</ul>
              </div>
              
              <div className=' w-[50px] h-[120px] flex items-center'>
                <ul className=' w-[50px] h-[80px] bg-white hover:bg-[#40A2E3] hover:text-[#FFF6E9] text-center rounded-lg'>a</ul>
              </div>
            </Link>
          </div>

          <div  className=' flex w-[50%]  justify-end items-end text-[30px] font-bold relative'>
            <div className=' flex w-[400px] h-[130px] justify-around items-end absolute top-4 '>
              <Link to="/project" className=' w-[130px] h-[60px] hover:bg-[#FFF5E1] hover:text-[#0C1844] text-[#FFF5E1] flex justify-center items-center rounded-full'>Project</Link>
              <Link to="/about" className=' w-[120px] h-[60px] hover:bg-[#FFF5E1] hover:text-[#0C1844] text-[#FFF5E1] flex justify-center items-center rounded-full'>About</Link>
              <Link to="/contact" className=' w-[140px] h-[60px] hover:bg-[#FFF5E1] hover:text-[#0C1844] text-[#FFF5E1] flex justify-center items-center rounded-full'>Contact</Link>
            </div>
            
          </div>
        </div>
        
      ):(
        <div className=" flex h-[70px]  text-[30px] dm-sans-text mt-6">
          <div className=' w-[80%]  h-full flex items-center mx-[10px] text-[#DC5F00] font-extrabold'>
            <a href="/">
              <div className=' flex items-center'>

                <div className=' w-[25px] h-[40px] bg-white rounded-md flex justify-center items-center'>
                  <ul>b</ul>
                </div>
              
                <div className=' w-[25px] h-[50px] bg-white rounded-md flex justify-center items-center mx-[8px]'>
                  <ul>e</ul>
                </div>
              
                <div className=' w-[25px] h-[60px] bg-white rounded-md flex justify-center items-center'>
                 <ul>s</ul>
                </div>
              
                <div className=' w-[25px] h-[40px] bg-white rounded-md flex justify-center items-center mx-[8px]'>
                  <ul>t</ul>
                </div>
              
                <div className=' w-[25px] h-[60px] bg-white rounded-md flex justify-center items-center'>
                  <ul>a</ul>
                </div>
              
                <div className=' w-[25px] h-[50px] bg-white rounded-md flex justify-center items-center mx-[8px]'>
                  <ul>w</ul>
                </div>
              
                <div className=' w-[25px] h-[40px] bg-white rounded-md flex justify-center items-center'>
                  <ul>l</ul>
                </div>
              
                <div className=' w-[25px] h-[60px] bg-white rounded-md flex justify-center items-center mx-[8px]'>
                  <ul>p</ul>
                </div>
              
                <div className=' w-[25px] h-[50px] bg-white rounded-md flex justify-center items-center'>
                  <ul>a</ul>
                </div>
        
              </div>
            </a>
          </div>
          
          <div className="relative w-full flex items-center justify-end top-5">
            <div>
              <button onClick={toggleDropdown} className="text-black w-[25px] h-[25px] bg-slate-50 rounded-md flex justify-center items-center mr-[10px] ">
                <MenuIcon />
              </button>
            </div>
            
            {dropdownOpen && (
              <div className="absolute top-[50px] rounded-md w-[60px] right-[10px] bg-gray-800 flex flex-col items-center dm-sans-text">
                <Link to="/project" className="text-white flex justify-end pr-1 h-[34px] text-[13px] py-2 w-full text-center border-b border-gray-600">Project</Link>
                <Link to="/about" className="text-white flex justify-end pr-1 h-[34px] text-[13px] py-2 w-full text-center border-b border-gray-600">About</Link>
                <Link to="/contact" className="text-white flex justify-end pr-1 h-[34px] text-[13px] py-2 w-full text-center">Contact</Link>
              </div>
            )}
          </div>
        
        </div>
      )}
      
    </div>
  )
}

export default Header;
