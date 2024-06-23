import Header from "../components/Header"
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className=" min-w-[1200px] h-[400px] flex justify-center  pt-[60px]  mt-[60px] border-t-4">
        <div className=" w-[240px] h-[100px] bg-white rounded-md flex flex-col justify-around py-[20px] px-2 font-semibold">
          <h1><GitHubIcon /><span className=" ml-2 hover:text-red-500"><Link to="https://github.com/bestawlpa">bestawlpa</Link></span></h1>
          <h1><EmailIcon /><span className=" ml-2">apiwat.aunna@gmail.com</span></h1>
        </div>
      </div>
    </div>
  )
}

export default Contact;
