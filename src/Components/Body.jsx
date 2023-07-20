import Photo15 from '../assets/Photo15.png';
import Photo from '../assets/Photo.svg';

export const Body = () => {
  return (
    <div className="bg w-full h-full ">
      <div className="flex items-center justify-around overflow-hidden relative w-[400] h-[90vh]">
        <div className='flex-col w-full h-full pt-44 px-20' data-aos="fade-up-right">
          <h1 className='font-normal text-[3rem] w-[400px] h-[150px] capitalize'>Next generation digital banking</h1>
          <p className='w-[700px] h-[50%] text-3xl font-light'>Take your financial life online. Your Easybank account will be a one-stp-shop for spending, saving, budgeting, investing and much more.</p>
        </div>
        <div className='w-full h-full absolute top-20' data-aos="fade-up-right">
          <img src={Photo} alt="body" className='w-[50%] relative top-[-30px] left-[880px] z-[100px]' />
          <img src={Photo15} alt="body" className='relative top-[-670px] right-[-950px] opacity-[100] z-10 w-[40%]' />
        </div>
      </div>
    </div>
  )
}
