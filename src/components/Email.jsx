// import mailIcon from '../assets/mail-icon.svg'

const Email = () => {
  return (
    
      <div className="container flex flex-col items-center justify-center gap-8 p-8 z-20 bg-white">
      <h1 className="font-semibold text-4xl text-black">Subscribe to Our Newsletter for Design Insights</h1>
      <p className="text-slate-800 text-lg text-center">Be the first to discover trends, inspirations, and special offers as <br /> we bring the world of design directly to your inbox</p>
      <input type="email" placeholder='Enter your email address' className='px-36 py-4 mt-4 text-lg text-slate-800 bg-slate-50'/>
      </div>
    
  )
}

export default Email
