import Header from "../components/Header"
import { useMediaQuery } from 'react-responsive';

const About = () => {
  const isPC = useMediaQuery({ minWidth: 1024 });

  return (
    <div className={`${isPC ? 'min-w-[80vw] max-w-[1200px] min-h-[120px]' : 'min-w-[100vw]  min-h-[50px] '} `}>
      <Header />
      {isPC? (
        <div className=" w-full  mt-20 border-t-4 border-[#FFF6C3] ">
          <div className=" flex flex-col items-center my-[40px]">
            <div>
              <h1 className=" font-extrabold text-[60px] text-[#FBF8DD]">ABOUT</h1>
            </div>

            <div className=" flex flex-col">
              <div className=" flex justify-between my-[40px] max-w-[650px] ">
                <div className=" w-[250px] ">
                  <img src="/it'sme.jpg" alt="" className=" h-[250px] w-[250px] rounded-full"/>
                </div>
                <div className=" w-[350px] text-[#FFF6E9] font-semibold ml-3 text-[21px] flex items-end">
                  <h2>Hey! I'm Best and I'm a developer,<br /> I love working on the web and making sure it continues to be a place for everyone and our creative, personal, and weird passions.</h2>
                </div>
              </div>
              <div className=" max-w-[600px]  text-[#FFF6E9] font-semibold text-[21px] -mt-[20px]">
                <h2>As a civil engineer with experience in managing construction projects, I have developed strong skills in problem analysis, planning, and teamwork. Transitioning to a Developer, I apply these skills in a new perspective. I am proficient in HTML, JavaScript, and CSS, and have created a 
                  <span className=" text-[#F0DE36]"><a href="https://demo-todos-nine.vercel.app/"> To-Do List </a></span>project using React and Firebase.
                </h2>
                  <br />
                <h2>I also developed an e-commerce site using Next.js, Node.js, Express, and MongoDB, which has enhanced my knowledge and passion for development.</h2>
                <br />
                <h2>Switching from civil engineering to development has allowed me to acquire new skills and apply my engineering background in software development, enabling me to create effective solutions and add value to organizations.</h2>
              </div>
            </div>

            <div className=" min-w-[600px] mt-10 h-[250px] flex flex-col items-center">
              <h2 className=" font-extrabold text-[30px] text-[#FBF8DD]">SKILL</h2>
              <div className=" mt-10 text-[#E7D37F]  h-full ">
                <div className=" flex justify-around min-w-[600px] h-[70px] text-[18px] font-bold ">
                  <div className=" w-[20%] bg-[#365E32] rounded-lg flex justify-center items-center">HTML</div>
                  <div className=" w-[20%] bg-[#365E32] rounded-lg flex justify-center items-center">CSS</div>
                  <div className=" w-[20%] bg-[#365E32] rounded-lg flex justify-center items-center">Javascript</div>
                  <div className=" w-[20%] bg-[#365E32] rounded-lg flex justify-center items-center">React</div>
                </div>
                
                <div className=" flex justify-around min-w-[600px] h-[70px] text-[18px] font-bold my-8">
                  <div className=" w-[20%] bg-[#365E32] rounded-lg flex justify-center items-center">Next.js</div>
                  <div className=" w-[20%] bg-[#365E32] rounded-lg flex justify-center items-center">Node.js</div>
                  <div className=" w-[20%] bg-[#365E32] rounded-lg flex justify-center items-center">Firebase</div>
                  <div className=" w-[20%] bg-[#365E32] rounded-lg flex justify-center items-center">MongoDb</div>
                </div> 
              </div>
            </div>

          </div>
        </div>
      ):(
        <div className="  my-[40px] border-t-4 border-[#FFF6C3] ">
          <div className=" flex flex-col items-center my-[40px]">
            <div>
              <h1 className=" font-extrabold text-[60px] text-[#EEEEEE]">ABOUT</h1>
            </div>
            <div className=" flex flex-col items-center">
              <div className=" flex justify-center flex-col items-center my-[40px] max-w-[300px] ">
                <div className=" w-[150px] ">
                  <img src="/it'sme.jpg" alt="" className=" h-[150px] w-[150px] rounded-full"/>
                </div>
                <div className=" w-[350px] text-[#FFF6E9] mt-6 font-semibold text-[18px] flex justify-center">
                  <h2>Hey! I'm Best and I'm a developer,<br /> I love working on the web and making sure it continues to be a place for everyone and our creative, personal, and weird passions.</h2>
                </div>
              </div>
              <div className=" w-[350px]  text-[#FFF6E9] font-semibold text-[18px] -mt-[20px]">
                <h2>As a civil engineer with experience in managing construction projects, I have developed strong skills in problem analysis, planning, and teamwork. Transitioning to a Developer, I apply these skills in a new perspective. I am proficient in HTML, JavaScript, and CSS, and have created a 
                  <span className=" text-[#F0DE36]"><a href="https://demo-todos-nine.vercel.app/"> To-Do List </a></span>project using React and Firebase.
                </h2>
                  <br />
                <h2>I also developed an e-commerce site using Next.js, Node.js, Express, and MongoDB, which has enhanced my knowledge and passion for development.</h2>
                <br />
                <h2>Switching from civil engineering to development has allowed me to acquire new skills and apply my engineering background in software development, enabling me to create effective solutions and add value to organizations.</h2>
              </div>

              <div className=" max-w-[350px] mt-10 h-[250px] flex flex-col items-center">
                <h2 className=" font-extrabold text-[30px] text-[#FBF8DD]">SKILL</h2>
                <div className=" mt-10 text-[#E7D37F]  h-full text-[14px]">
                  <div className=" flex justify-around min-w-[400px] h-[50px]  font-bold ">
                    <div className=" w-[20%] bg-[#365E32] rounded-lg flex justify-center items-center">HTML</div>
                    <div className=" w-[20%] bg-[#365E32] rounded-lg flex justify-center items-center">CSS</div>
                    <div className=" w-[20%] bg-[#365E32] rounded-lg flex justify-center items-center">Javascript</div>
                    <div className=" w-[20%] bg-[#365E32] rounded-lg flex justify-center items-center">React</div>
                  </div>
                
                  <div className=" flex justify-around min-w-[300px] h-[50px] ] font-bold my-8">
                    <div className=" w-[20%] bg-[#365E32] rounded-lg flex justify-center items-center">Next.js</div>
                    <div className=" w-[20%] bg-[#365E32] rounded-lg flex justify-center items-center">Node.js</div>
                    <div className=" w-[20%] bg-[#365E32] rounded-lg flex justify-center items-center">Firebase</div>
                    <div className=" w-[20%] bg-[#365E32] rounded-lg flex justify-center items-center">MongoDb</div>
                  </div> 
                </div>
              </div>
              
            </div>
          </div>
        </div>
      )}
      

    </div>
  )
}

export default About


