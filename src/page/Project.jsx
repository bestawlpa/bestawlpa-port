import { Link } from "react-router-dom";
import Header from "../components/Header"
import { useMediaQuery } from 'react-responsive';

const Project = () => {
  const isPC = useMediaQuery({ minWidth: 1024 });

  return (
    <div className={`${isPC ? 'min-w-[80vw] max-w-[1200px] min-h-[120px]' : 'min-w-[100vw]  min-h-[50px] '} `}>
      <Header />
      {isPC? (
        <div className=" my-[40px] flex justify-center">
          <div className="my-[80px] w-[1200px] flex justify-around">
            <div className=" w-[500px] h-[250px]">
              <Link to="https://demo-todos-nine.vercel.app/" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-[300px] h-[150px] rounded-t-lg  md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/todoimg.png" alt="todo" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 h-[50px] text-2xl font-bold tracking-tight text-gray-900 dark:text-white">To-doList</h5>
                  <p className="mb-3 -mt-5  h-[100px] font-normal text-gray-700 dark:text-gray-400">The To-Do List allows you to add tasks that you need to complete. Additionally, you can edit and delete tasks as needed.</p>
                </div>
              </Link>

            </div>

            <div className=" w-[500px] h-[250px]">
              <Link to="/lalala" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-[300px] h-[150px] rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/lalala/home-page.png" alt="homepage" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2  h-[50px] text-2xl font-bold tracking-tight text-gray-900 dark:text-white">lalala-shop Ecommerce</h5>
                  <p className="mb-3 -mt-5 h-[100px] font-normal text-gray-700 dark:text-gray-400">Features: User Registration and Login System, Shopping Cart Functionality, Admin Panel,  Database Management.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      ):(
        <div className=" my-[40px] flex justify-center">
          <div className="my-[80px] w-[80%] min-h-[700px] flex flex-col justify-around items-center">

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg  w-[300px] mb-20">
              <Link to="https://demo-todos-nine.vercel.app/">
                <img className="rounded-t-lg" src="/todoimg.png" alt="todo" />
              </Link>
              <div className="p-5">
                <Link to="https://demo-todos-nine.vercel.app/">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">To-doList</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">The To-Do List allows you to add tasks that you need to complete. Additionally, you can edit and delete tasks as needed.</p>
              </div>
            </div>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg w-[300px] ">
              <Link to="/lalala">
                <img className="rounded-t-lg" src="/lalala/home-page.png" alt="homepage" />
              </Link>
              <div className="p-5">
                <Link to="/lalala">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">lalala-shop Ecommerce</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Features: User Registration and Login System, Shopping Cart Functionality, Admin Panel,  Database Management.</p>
              </div>
            </div>
            
          </div>
        </div>
      )}
    </div>
  )
}

export default Project;
