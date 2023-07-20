import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Photo from '../assets/Logo.svg';

export const Navbar = () => {
  const handleClick = () => {
    alert('thank you for contacting')
  }
  return (
    <div className="w-full h-auto fixed top-0 left-0 right-0 z-20 bg-opacity-100 bg-white">
      <div className='flex items-center justify-around pt-5 py-5 border-b-'>
        <div className='flex items-center justify-center'>
          <img src={Photo} alt="bar" className='w-[100px]' />
        </div>
        <nav className='flex items-center justify-around gap-20 text-black font-medium'>
          <li className='list-none border-b-4 pb-3 hover:border-green-600 ease-in-out duration-700'>Home</li>
          <li className='list-none border-b-4 pb-3 hover:border-green-600 ease-in-out duration-500'>About</li>
          <li className='list-none border-b-4 pb-3 hover:border-green-600 ease-in-out duration-500'>Contact</li>
          <li className='list-none border-b-4 pb-3 hover:border-green-600 ease-in-out duration-500'>Blog</li>
          <li className='list-none border-b-4 pb-3 hover:border-green-600 ease-in-out duration-500'>Careers</li>
        </nav>
        <div className='hidden'>
          <AiOutlineMenu />
          <AiOutlineClose />
        </div>
        <button className='bg-[#b3dea3] w-[200px] h-[52px] rounded-[0.9rem] hover:bg-green-500 hover:ease-in-out duration-700 cursor-pointer' onClick={handleClick}>Request Invite</button>
      </div>
    </div>
  )
}
