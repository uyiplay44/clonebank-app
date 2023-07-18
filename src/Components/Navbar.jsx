
import Photo from '../assets/Logo.svg';

export const Navbar = () => {
  return (
    <div className="w-full h-auto fixed top-0 left-0 right-0 z-50 bg-opacity-100 bg-slate-100">
      <div className='flex items-center justify-around pt-5 py-5 border-b-2'>
        <div className='flex items-center justify-center'>
          <img src={Photo} alt="bar" className='w-[100px]' />
        </div>
        <nav className='flex items-center justify-around gap-20 text-black font-medium'>
          <li className='list-none border-b-4 pb-3 hover:border-green-600'>Home</li>
          <li className='list-none border-b-4 pb-3 hover:border-green-600'>About</li>
          <li className='list-none border-b-4 pb-3 hover:border-green-600'>Contact</li>
          <li className='list-none border-b-4 pb-3 hover:border-green-600'>Blog</li>
          <li className='list-none border-b-4 pb-3 hover:border-green-600 transition-transform'>Careers</li>
        </nav>
        <button className='bg-[#b3dea3] w-[200px] h-[52px] rounded-[0.9rem] hover:bg-green-100 cursor-pointer'>Request Invite</button>
      </div>
    </div>
  )
}
