import Header from "../components/Header"
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

const Contact = () => {
  const isPC = useMediaQuery({ minWidth: 1024 });
  return (
    <div className={`${isPC ? 'min-w-[80vw] max-w-[1200px] min-h-[120px]' : 'min-w-[100vw]  min-h-[50px] '} `}>
      <Header />
      
        {isPC ? (
        <div className=" min-w-[1200px] h-[400px] flex flex-col items-center pt-[60px]  mt-[80px] border-t-4 border-[#FFF6C3]">
          <div className=" w-[240px] h-[100px] bg-white rounded-md flex flex-col justify-around py-[20px] px-2 font-semibold">
            <h1><GitHubIcon /><span className=" ml-2 text-red-700"><Link to="https://github.com/bestawlpa">bestawlpa</Link></span></h1>
            <h1><EmailIcon /><span className=" ml-2 text-red-700">apiwat.aunna@gmail.com</span></h1>
          </div>

          <div className=" dot mt-16 relative flex justify-center w-full">
            <div className=" w-[200px] h-[200px] bg-[#002B5A] rounded-full flex justify-center items-center">
              
            </div>
          </div>
        </div>
      ):(
        <div className=" h-[400px] flex flex-col items-center  pt-[60px]  mt-[80px] border-t-4 border-[#FFF6C3]">
          <div className=" w-[300px] h-[100px] bg-white rounded-md flex flex-col justify-around py-[20px] px-2 text-[16px] font-semibold">
            <h1><GitHubIcon /><span className=" ml-4 text-red-700 "><Link to="https://github.com/bestawlpa" >bestawlpa</Link></span></h1>
            <h1><EmailIcon /><span className=" ml-4 text-red-700 ">apiwat.aunna@gmail.com</span></h1>
          </div>

          <div className=" dot mt-[100px] relative flex justify-center w-full">
            <div className=" w-[50px] h-[50px] bg-[#002B5A] rounded-full flex justify-center items-center">
              
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Contact;
