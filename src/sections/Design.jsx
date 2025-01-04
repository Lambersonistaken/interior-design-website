import designImg from "../assets/design-img.svg";
import add from "../assets/add.svg";

const Design = () => {

  


  return (
    <section className="design flex flex-row gap-16 px-12 mt-36 mb-16">

        <div className="design-content">
            <img className="w-[900px]" src={designImg} alt="" />
        </div>

        <div className="design-content flex flex-col gap-8">
            <h1 className="text-4xl font-semibold">Designing Your Dream With Brilliance</h1>
            <p className="text-slate-800 font-medium text-base mb-6">Elevate your spaces with bespoke interior designs that reflect your unique style and aspirations, crafted with precision and brilliance for an unforgettable living experience</p>
            <div className="flex flex-row justify-between gap-4">
                <h2 className="text-lg font-semibold text-slate-800">Living Room Interior Design</h2>
                <img src={add} alt="" />
            </div>
            <p className="hidden"></p>
            <hr />
            <div className="flex flex-row justify-between gap-4">
                <h2 className="text-lg font-semibold text-slate-800">Commercial Office Room Interior Design</h2>
                <img src={add} alt="" />
            </div>
            <p className="hidden"></p>
            <hr />
            <button className="self-start px-12 py-4 bg-slate-950 text-white font-semibold rounded-md">Learn More</button>
        </div>
      
    </section>
  )
}

export default Design
