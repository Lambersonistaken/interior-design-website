import vivaLogo from "../assets/viva-logo.svg";

const Header = () => {
  return (
    <header className="flex flex-row px-12 justify-between items-center p-8 mt-4 bg">
        <div>
            <img className="w-[177px]" src={vivaLogo} alt="viva decor logo" />
        </div>
        <div>
            <nav>
                <ul className="flex justify-center items-center flex-row gap-10 text-xl decoration-none font-semibold text-slate-800">
                    <li><a className="hover:text-slate-500" href="#">Home</a></li>
                    <li><a className="hover:text-slate-500" href="#">Services</a></li>
                    <li><a className="hover:text-slate-500" href="#">Contact</a></li>
                    <li><a className="hover:text-slate-500" href="#">Support</a></li>
                </ul>
            </nav>
        </div>
        <div className="bg-slate-900 text-white text-center p-2 rounded-md">
            <button className="px-8 py-1 font-semibold">Sign Up</button>
        </div>
    </header>
  )
}

export default Header
