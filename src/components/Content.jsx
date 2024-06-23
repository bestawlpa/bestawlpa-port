import { useMediaQuery } from 'react-responsive';

const Content = () => {
  const isPC = useMediaQuery({ minWidth: 1024 });

  return (
    <div className = {`flex flex-col justify-start mt-[80px] ${isPC ? 'min-w-[80vw]  ' : 'min-w-[100vw]  '} dm-sans-text`}>
      {isPC?(
        
          <div className=' บน  flex justify-around'> 
            <div className=' w-[600px] h-[400px] flex justify-center items-center relative'>
              <div className=' w-[380px] h-[380px] rounded-full bg-[#002B5A] flex justify-center items-center absolute  '>
                <img src="/profile.png" alt="profile-image" className=' h-[280px] w-[280px] rounded-full' />
              </div>
            </div>

            <div className=' w-[600px] h-[400px] flex flex-col rounded-lg justify-center items-end font-black text-[35px] overflow-clip '>
              <div className=' w-[500px] text-[#FFF5E1]'>
                <h1>Hey, I'm bestawIpa</h1>
                <p>I like to craft solid frontend product, turning ideas into real life products is my calling.</p>
              </div>
            </div>
          </div>

      
       
      ):(
        // <div className='flex flex-col  min-w[80%vw] bg-white'> 
        //     <div className=' w-[600px] h-[400px] flex justify-center items-center relative'>
        //       <div className=' w-[380px] h-[380px] rounded-full bg-[#002B5A] flex justify-center items-center absolute  '>
        //         <img src="/profile.png" alt="profile-image" className=' h-[280px] w-[280px] rounded-full' />
        //       </div>
        //     </div>

        //     <div className=' w-[600px] h-[400px] flex flex-col rounded-lg justify-center items-end font-black text-[35px] overflow-clip '>
        //       <div className=' w-[500px] text-[#FFF5E1]'>
        //         <h1>Hey, I'm bestawIpa</h1>
        //         <p>I like to craft solid frontend product, turning ideas into real life products is my calling.</p>
        //       </div>
        //     </div>
        //   </div>
        <div className=' min-w[80%vw]  h-[900px]'> 
          <div className=' mt-[40px]  flex flex-col items-center '>
            <div className=' w-[300px] h-[300px] rounded-full bg-[#002B5A] flex justify-center items-center'>
              <img src="/profile.png" alt="" className=' w-[250px] h-[250px] rounded-full'/>
            </div>

            <div className=' mt-[20px] w-[230px] flex justify-center text-[#FFF5E1] font-black text-[18px]'>
              <div>
                <h1>Hey, I'm bestawIpa</h1>
                <p>I like to craft solid frontend product, turning ideas into real life products is my calling.</p>
              </div>
            </div>
          </div>
        </div>
      )}
      


    </div>
  )
}

export default Content





