import designImg from "../assets/design-img.svg";
import Accordion from "../components/Accordion";


const Design = () => {

  return (
    <section className="design flex flex-row gap-16 px-12 mt-36 mb-48">

        <div className="design-content">
            <img className="w-[900px]" src={designImg} alt="" />
        </div>

        <div className="design-content flex flex-col gap-8 xl:gap-8 2xl:gap-14 lg:gap-6">
            <h1 className="text-5xl font-semibold  2xl:text-[58px] lg:text-4xl">Designing Your Dream With Brilliance</h1>
            <p className="text-slate-800 font-medium text-base 2xl:text-lg mb-6">Elevate your spaces with bespoke interior designs that reflect your unique style and aspirations, crafted with precision and brilliance for an unforgettable living experience</p>
            <div className="flex flex-col justify-between gap-4">

                <Accordion title="Living Room Interior Design" desc="You can create beautiful Living Room Interior Design."/>

            </div>
            <hr />
            <div className="flex flex-col justify-between gap-4">

                <Accordion title="Commercial Office Room Interior Design" desc="You can create beautiful Commercial Office Room Interior Design."/>
                
            </div>
            <hr />
            <button className="self-start px-12 py-4 bg-slate-950 text-white font-semibold rounded-md">Learn More</button>
        </div>
      
    </section>
  )
}

export default Design
