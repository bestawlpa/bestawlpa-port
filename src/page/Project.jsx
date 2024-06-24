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
            <div className=" w-[500px] h-[200px]">

              <Link to="https://demo-todos-nine.vercel.app/" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img class="object-cover w-[300px] rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/todoimg.png" alt="" />
                <div class="flex flex-col justify-between p-4 leading-normal">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">To-doList</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">The To-Do List allows you to add tasks that you need to complete. Additionally, you can edit and delete tasks as needed.</p>
                </div>
              </Link>

            </div>

            <div className=" w-[500px]">
              <Link to="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img class="object-cover w-[300px] rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/todoimg.png" alt="" />
                <div class="flex flex-col w-[200px justify-between p-4 leading-normal">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      ):(
        <div className=" my-[40px] flex justify-center">
          <div className="my-[80px] w-[80%] min-h-[700px] flex flex-col justify-around items-center">

            <div className=" w-[500px] mb-10">
              <Link to="https://demo-todos-nine.vercel.app/" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img class="object-cover w-[300px] rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/todoimg.png" alt="" />
                <div class="flex flex-col justify-between p-4 leading-normal">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">To-doList</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">The To-Do List allows you to add tasks that you need to complete. Additionally, you can edit and delete tasks as needed.</p>
                </div>
              </Link>
            </div>

            <div className=" w-[500px]">
              <Link to="/lalala" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img class="object-cover w-[300px] rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/home-page.png" alt="" />
                <div class="flex flex-col w-[200px justify-between p-4 leading-normal">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">lalala-shop Ecommerce</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Project;
