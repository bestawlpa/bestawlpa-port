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
            <div className=' w-[600px] text-[#FFF5E1] pr-5'>
              <h1>Hey, I'm bestawIpa</h1>
              <p>I like to craft solid frontend product, turning ideas into real life products is my calling.</p>
            </div>
          </div>
        </div>
       
      ):(

        <div className=' min-w[80%vw] max-h-[1290px] '> 
          <div className=' mt-[10px] h-full   flex flex-col items-center '>
            <div className=' w-[300px] h-[300px] rounded-full bg-[#002B5A] flex justify-center items-center'>
              <img src="/profile.png" alt="" className=' w-[250px] h-[250px] rounded-full'/>
            </div>

            <div className=' mt-[10px] w-[300px] min-h-[200px] flex justify-center items-center font-black text-[18px]'>
              <div className='  w-full h-full ml-4 text-[#F6E6CB]'>
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





