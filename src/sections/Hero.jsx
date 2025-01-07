import heroImg1 from "../assets/hero-image-1.svg";
import heroImg2 from "../assets/hero-image-2.svg";
import heroRect from "../assets/hero-rectangle.svg";
import heroArrow from "../assets/hero-arrow.svg";

const Hero = () => {
  return (
    <section className="hero-container mx-auto px-12 mt-16 flex flex-col mb-48 gap-16">

        <div className="hero-content flex flex-row justify-between gap-12 lg:gap-24 items-center">
            <div className="flex flex-col gap-8">
                <h1 className="text-[110px] 2xl:text-[150px] font-medium lg:text-[85px] xl:text-[90px]">Interior Design</h1>
                <p className="text-slate-800 text-xl font-medium ml-1 w-[550px] 2xl:text-2xl">Step into a world where the art of Interior Design is meticulously crafted to bring together timeless elegance and cutting-edge 
                modern Innovation, Allowing you to transform your living spaces into the epitome of luxury and sophistication.</p>
            </div>
            <div>
                <img src={heroImg1} className="w-[450px]" alt="" />
            </div>
        </div>

        <div className="hero-content flex flex-row justify-between px-4 gap-12 items-center">
            <div className="flex flex-col gap-24">
                <button className="py-4 w-[250px] bg-slate-950 font-semibold rounded-md text-white">Start Project</button>
                <ul className="flex gap-8 items-center text-center">
                    <li>
                        <h1 className="text-7xl text-gray-500">400+</h1>
                        <p className="text-xl text-gray-500">Project Complete</p>
                    </li>
                    <li>
                        <h1 className="text-7xl text-gray-500">600+</h1>
                        <p className="text-xl text-gray-500">Satisfied Clients</p>
                    </li>
                    <li>
                        <h1 className="text-7xl text-gray-500">100+</h1>
                        <p className="text-xl text-gray-500">Unique Styles</p>
                    </li>
                </ul>
            </div>
            <div className="relative">
                <img className="absolute top-[-1rem] left-[-1rem] -z-10" src={heroRect} alt="" />
                <img className="absolute bottom-0 right-[-2.75rem] w-[150px]" src={heroArrow} alt="" />
                <img className="w-[600px] mr-8 z-10" src={heroImg2} alt="" />
                
            </div>
        </div>
    </section>
  )
}

export default Hero
