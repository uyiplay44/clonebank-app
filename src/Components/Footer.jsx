import Photo from '../assets/Logo.svg';

export const Footer = () => {
  return (
    <div className="flex w-full h-full py-10 px-10 bg-gray-800">
      <div className="flex items-center justify-between w-full ">
        <div className='flex items-center'>
          <img src={Photo} alt="" />
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-between gap-10'>
            <div>
              <li>About Us</li>
              <li>Contact</li>
              <li>Blog</li>
            </div>
            <div>
              <li>Careers</li>
              <li>Support</li>
              <li>Privacy Policy</li>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <div>
            <button>Request Invite</button>
            <p>@EasyBank All Rights Reserved</p>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}
