import vivaLogo from "../assets/viva-logo.svg";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row px-4 sm:px-12 justify-between items-center p-4 sm:p-8 mb-24 sm:mb-48 mt-4 gap-4 sm:gap-0">
        <div>
            <img className="w-[120px] sm:w-[177px]" src={vivaLogo} alt="viva decor logo" />
        </div>
        <nav className="hidden sm:block">
            <ul className="flex justify-center items-center flex-row gap-6 sm:gap-10 text-base sm:text-xl decoration-none font-semibold text-slate-800">
                <li><a className="hover:text-slate-500" href="#">Home</a></li>
                <li><a className="hover:text-slate-500" href="#">Services</a></li>
                <li><a className="hover:text-slate-500" href="#">Contact</a></li>
                <li><a className="hover:text-slate-500" href="#">Support</a></li>
            </ul>
        </nav>
        <div className="bg-slate-900 text-white text-center rounded-md">
            <button className="px-8 sm:px-10 lg:px-12 py-2 sm:py-3 font-semibold text-sm sm:text-base lg:text-lg">Sign Up</button>
        </div>
    </header>
  )
}

export default Header
