import mailIcon from '../assets/mail-icon.svg'

const Email = () => {
  return (
    <div className="container absolute bottom-[-45rem] left-1/2 transform -translate-x-1/2
                    w-[90%] max-w-[1200px] rounded-md mx-auto 
                    flex flex-col items-center justify-center gap-6 sm:gap-12 
                    p-4 sm:p-8 z-20 bg-white">
      <h1 className="font-semibold text-2xl sm:text-4xl text-black text-center">
        Subscribe to Our Newsletter for Design Insights
      </h1>
      <p className="text-slate-800 text-base sm:text-lg text-center">
        Be the first to discover trends, inspirations, and special offers...
      </p>
      <div className="flex flex-col sm:flex-row relative bg-white p-2 items-center justify-center rounded-md gap-4 w-full max-w-[800px]">
        <div className="relative w-full sm:w-auto">
          <img 
            src={mailIcon} 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" 
            alt="mail icon" 
          />
          <input 
            type="email" 
            placeholder='Enter your email address' 
            className='w-full sm:w-auto pl-12 sm:pl-12 pr-4 sm:pr-36 py-4 rounded-md text-base sm:text-lg text-slate-800 bg-white border border-gray-200'
          />
        </div>
        <button className="w-full sm:w-auto px-8 sm:px-12 py-4 bg-[#1F1F1F] text-white rounded-md">
          Subscribe
        </button>
      </div>
    </div>
  )
}

export default Email
