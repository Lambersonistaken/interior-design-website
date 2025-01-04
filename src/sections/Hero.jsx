import heroImg1 from "../assets/hero-image-1.svg";
import heroImg2 from "../assets/hero-image-2.svg";

const Hero = () => {
  return (
    <section className="hero-container mx-auto px-12 mt-16 flex flex-col mb-8 gap-8">

        <div className="hero-content flex flex-row justify-between gap-4 items-center">
            <div className="flex flex-col gap-8">
                <h1 className="text-[120px] font-medium">Interior Design</h1>
                <p className="text-slate-800 text-xl font-medium ml-1 w-[550px]">Step into a world where the art of Interior Design is meticulously crafted to bring together timeless elegance and cutting-edge 
                modern Innovation, Allowing you to transform your living spaces into the epitome of luxury and sophistication.</p>
            </div>
            <div>
                <img src={heroImg1} className="w-[450px]" alt="" />
            </div>
        </div>

        <div className="hero-content flex flex-row justify-between gap-4 items-center">
            <div className="flex flex-col gap-24">
                <button className="py-4 w-[250px] bg-slate-950 font-semibold rounded-md text-white">Start Project</button>
                <ul className="flex gap-8">
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
            <div>
                <img className="w-[600px]" src={heroImg2} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Hero
