import Photo2 from '../assets/Photo2.svg';
import Photo3 from '../assets/Photo3.svg';
import Photo8 from '../assets/Photo8.svg';
import Photo9 from '../assets/Photo9.svg'

export const Content = () => {
  return (
    <div className="w-full h-full p-10 pt-10 bg-gray-100">
      <div className="w-full h-full">
        <div className="flex-col pl-5 text-xl">
          <h2 className='text-4xl capitalize'>Why choose EasyBank</h2>
          <p className='w-[800px] pl-0 font-light text-3xl'>We leverage open banking to your bank account into your financial hub. Control your finances like never before.
          </p>
        </div>
        <div className='flex items-center justify-center py-10'>
          <div className='w-full h-full'>
          <img src={Photo9} alt="content" className='p-3 rounded' />
            <h2 className='p-3 text-[1.5rem]'>Online Banking</h2>
            <p className='p-3 text-[15px]'>Our modern web and mobile application allow you to keep track of your finances whenever you are in the world </p>
          </div>
          <div className='w-full h-full'>
            <img src={Photo3} alt="content" className='p-3 rounded' />
            <h2 className='p-3 text-[1.5rem]'>Simple Budgeting</h2>
            <p className='p-3 text-[15px]'>See exactly where your money goes each month. Receive notifications when you're close to hitting your limts.</p>
          </div>
          <div className='w-full h-full'>
            <img src={Photo8} alt="content"  className='p-3 rounded'/>
            <h2 className='p-3 text-[1.5rem]'>Fast Onboading</h2>
            <p className='p-3 text-[15px]'>We don't do branches. Open your account in minutes online and start taking control of your finances right away.</p>
          </div>
          <div className='w-full h-full'>
            <img src={Photo2} alt="centent" className='p-3 rounded' />
            <h2 className='p-3 text-[1.5rem]'>Open API</h2>
            <p className='p-3 text-[15px]'>Manager your savings, investments, pension and much more from one account. Tracking your money has never been easier.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
