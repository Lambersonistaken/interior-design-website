import serviceLine from "../assets/service-line.svg";
import serviceLight from "../assets/service-lights.svg";
import serviceInterior from "../assets/service-interior.svg";
import serviceOutdoor from "../assets/service-outdoor.svg";

const Services = () => {
  return (
    <section className="services flex flex-col gap-16 mt-24 mb-12 px-12">
      
    <div className="service-content flex flex-row items-center gap-4">

        <img src={serviceLine} alt="" />
        <h1 className="text-5xl font-semibold">Our Services</h1>

    </div>

    <div className="service-content flex flex-row items-center gap-4">

        <div className="flex flex-row gap-6 px-6">
            <img className="w-[60px] self-start" src={serviceLight} alt="" />
            <div className="flex flex-col gap-4">
                <h2 className="font-semibold text-2xl">Lighting Design</h2>
                <p className="text-slate-800 font-medium">Achieve the perfect balance of ambient, task, and accent lighting for a functional atmosphere.</p>
            </div>
        </div>

        <div className="flex flex-row gap-6 px-6">
        <img className="w-[60px] self-start" src={serviceInterior} alt="" />
        <div className="flex flex-col gap-4">
                <h2 className="font-semibold text-2xl">Interior Design</h2>
                <p className="text-slate-800 font-medium">From concept to completion, we oversee every detail to bring your vision to life efficiently.</p>
        </div>
        </div>      

        <div className="flex flex-row gap-6 px-6">
        <img className="w-[60px] self-start" src={serviceOutdoor} alt="" />
        <div className="flex flex-col gap-4">
                <h2 className="font-semibold text-2xl">Outdoor Design</h2>
                <p className="text-slate-800 font-medium">Celebrate the changing seasons with our seasonal outdoor decor services.</p>
        </div>
        </div>

    </div>

    </section>
  )
}

export default Services
