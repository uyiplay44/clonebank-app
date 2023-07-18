import Photo15 from '../assets/Photo15.png';
import Photo from '../assets/Photo.svg';

export const Body = () => {
  return (
    <div className="bg-gray-200 w-[100%] h-[100%] absolute top-5">
      <div className="flex items-center justify-center w-full h-full overflow-hidden">
        <div className='flex-col pb-40 w-full p-10'>
          <h1 className='font-normal text-[3rem] w-[400px] h-[150px]'>Next generation digital banking</h1>
          <p className='text-5xl font-thin'>Take your financial life online. Your Easybank account will be a one-stp-shop for spending, saving, budgeting, investing and much more.</p>
        </div>
        <div className='w-full h-full'>
          <img src={Photo} alt="" className='w-[100%] relative top-[-30px] left-[80px] z-[100px]' />
          <img src={Photo15} alt="" className='relative top-[-670px] right-[-170px] opacity-[100] z-10 w-[90%]' />
        </div>
      </div>
    </div>
  )
}
