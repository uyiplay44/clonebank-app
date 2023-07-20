import Photo14 from '../assets/Photo14.jpg';
import Photo17 from '../assets/Photo17.jpg';
import Photo16 from '../assets/Photo16.jpg';
import Photo13 from '../assets/Photo13.jpg';

export const Article = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="w-full h-full p-5">
        <div className="w-full h-full">
          <h1 className="text-4xl">Latest Articles</h1>
        </div>
        <div className='py-3 w-full h-full flex items-center gap-3'>
          <div className='w-auto h-full'>
            <img src={Photo14} alt="" className='w-[400px] h-[230px] object-cover pt-3' />
            <div className='border-2 flex-col bg-slate-50 py-1'>
              <h6 className='pl-2 font-thin'>By Claire Robinson</h6>
              <p className='p-2 cursor-pointer text-2xl font-medium hover:text-green-800 hover:ease-in duration-700'>Receive money in any currency with no Fees</p>
              <p className='pt-2 p-2 text-sm'>The world is getting smaller and we're becoming more mobile. So why should you be forced to oly receive money in a single...</p>
            </div>

          </div>
          <div className=''>
            <img src={Photo17} alt="" className='w-[400px] h-[230px] object-cover pt-3' />
            <div className='border-2 flex-col bg-slate-50'>
              <h6 className='pl-2 font-thin'>By Wilson Hutton</h6>
              <p className='p-2 cursor-pointer text-2xl font-medium hover:text-green-800 hover:ease-in duration-700'>Treat yourself without worrying about money</p>
              <p className='pt-2 p-2 text-sm'>Our simple budgetting feature allows yu to separate out your spending and set realistic limits each month. That means you...</p>
            </div>
          </div>
          <div className='w-auto h-full'>
            <img src={Photo16} alt="" className='w-[400px] h-[230px] object-cover pt-3' />
            <div className='border-2 flex-col bg-slate-50 py-1'>
              <h6 className='pl-2 font-thin'>By Wilson Hutton</h6>
              <p className='p-2 cursor-pointer text-2xl font-medium hover:text-green-800 hover:ease-in duration-700'>Take your EasyBank card wherever you go</p>
              <p className='pt-1 p-2 text-sm'>We want you to enjoy your travels, This is why we don't charge any fee on punchases wile you're aboard. We even show you...</p>
            </div>
          </div>
          <div className='w-auto h-full'>
            <img src={Photo13} alt="" className='w-[400px] h-[230px] object-cover pt-3' />
            <div className='border-2 flex-col bg-slate-50 py-1'>
              <h6 className='pl-2 font-thin'>By Claire Robinson</h6>
              <p className='p-2 cursor-pointer text-2xl font-medium hover:text-green-800 hover:ease-in duration-700'>Our invite-only Beta accounts are now live!</p>
              <p className='pt-1 p-2 text-sm'>After a lot of hard work by the whole team, we're excited to launch our closed beta. it's easy to request an invite through the site...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
