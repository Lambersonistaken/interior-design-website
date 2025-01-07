import heroImg1 from "../assets/hero-image-1.svg";
import heroImg2 from "../assets/hero-image-2.svg";
import heroRect from "../assets/hero-rectangle.svg";
import heroArrow from "../assets/hero-arrow.svg";

const Hero = () => {
  return (
    <section className="hero-container mx-auto px-4 sm:px-6 lg:px-12 mt-8 sm:mt-16 flex flex-col mb-24 sm:mb-48 gap-8 sm:gap-16">
        <div className="hero-content flex flex-col md:flex-row justify-between gap-8 md:gap-8 lg:gap-12 items-center">
            <div className="flex flex-col gap-4 sm:gap-6">
                <h1 className="text-4xl sm:text-6xl md:text-[70px] lg:text-[80px] xl:text-[110px] 2xl:text-[150px] font-medium">Interior Design</h1>
                <p className="text-slate-800 text-base sm:text-lg lg:text-xl font-medium ml-1 max-w-[450px] xl:max-w-[550px] 2xl:text-2xl">Step into a world where the art of Interior Design is meticulously crafted to bring together timeless elegance and cutting-edge modern Innovation, Allowing you to transform your living spaces into the epitome of luxury and sophistication.</p>
            </div>
            <div>
                <img src={heroImg1} className="w-full max-w-[350px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[550px]" alt="" />
            </div>
        </div>

        <div className="hero-content flex flex-col sm:flex-row justify-between px-4 gap-8 sm:gap-12 items-center">
            <div className="flex flex-col gap-12 sm:gap-24">
                <button className="py-4 w-[250px] bg-slate-950 font-semibold rounded-md text-white">Start Project</button>
                <ul className="flex gap-4 sm:gap-8 items-center text-center">
                    <li>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-gray-500">400+</h1>
                        <p className="text-base sm:text-lg xl:text-xl text-gray-500">Project Complete</p>
                    </li>
                    <li>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-gray-500">600+</h1>
                        <p className="text-base sm:text-lg xl:text-xl text-gray-500">Satisfied Clients</p>
                    </li>
                    <li>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-gray-500">100+</h1>
                        <p className="text-base sm:text-lg xl:text-xl text-gray-500">Unique Styles</p>
                    </li>
                </ul>
            </div>
            <div className="relative">
                <img className="absolute top-[-1rem] left-[-1rem] -z-10 w-[80px] sm:w-auto" src={heroRect} alt="" />
                <img className="absolute bottom-0 right-[-2rem] w-[100px] sm:w-[150px]" src={heroArrow} alt="" />
                <img className="w-full max-w-[450px] sm:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] mr-4 sm:mr-8 z-10" src={heroImg2} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Hero
