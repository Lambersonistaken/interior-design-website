import mailIcon from '../assets/mail-icon.svg'

const Email = () => {
  return (
    
      <div className="container absolute bottom-[-45rem] left-[15rem] xl:left-[15rem] lg:left-[10rem] lg:w-[800px] 2xl:w-[1200px] 2xl:left-[20rem] w-2/3 rounded-md mx-auto flex flex-col items-center justify-center gap-12 p-8 z-20 bg-white">
      <h1 className="font-semibold text-4xl text-black lg:text-3xl">Subscribe to Our Newsletter for Design Insights</h1>
      <p className="text-slate-800 text-lg text-center lg:text-base">Be the first to discover trends, inspirations, and special offers as <br /> we bring the world of design directly to your inbox</p>
      <div className="flex relative bg-white p-2 flex-row items-center justify-center rounded-md gap-4">
      <img width={25} className='absolute left-20' src={mailIcon} alt="" />
      <input type="email" placeholder='Enter your email address' className='px-36 py-4 rounded-md text-lg text-slate-800 bg-white'/>
      <button className="px-12 py-4 bg-[#1F1F1F] text-white rounded-md">Subscribe</button>
      </div>
      
      </div>
    
  )
}

export default Email
