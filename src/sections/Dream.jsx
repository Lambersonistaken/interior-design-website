import dreamImg from "../assets/dream-img.svg"
import rocket from "../assets/rocket.svg"
import lamp from "../assets/lamp.svg"
import check from "../assets/check.svg"
import line from "../assets/line.svg"

const Dream = () => {
  return (
    <section className="dream flex flex-row gap-16 px-12 mt-36 mb-48">
      

      <div className="dream-content">

      <div className="mb-12 text-4xl font-bold">
          <h1>Designing Your Dream in Three Simple Steps</h1>
      </div>
        
        <div className="flex flex-row gap-8">
          <div className="flex flex-col gap-8">
            <img src={rocket} alt="" />
            <img src={line} className="h-12 w-12" alt="" />
            <img src={lamp} alt="" />
            <img src={line} className="h-12 w-12" alt="" />
            <img src={check} alt="" />
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-bold text-black text-xl mb-4">Start Project</h2>
              <p className="font-medium text-slate-800 text-lg">Embark on your design adventure by initiating your project. Share your vision and set the stage for a bespoke design experience</p>
            </div>
            
            <div>
              <h2 className="font-bold text-black text-xl mb-4">Craft</h2>
              <p className="font-medium text-slate-800 text-lg">Collaborate closely to achieve design excellence refining your vision and crafting brilliance into every aspect of your space</p>
            </div>

            <div>
              <h2 className="font-bold text-black text-xl mb-4">Execute</h2>
              <p className="font-medium text-slate-800 text-lg">Witness your vision becoming a reality as we execute the design plan with precision. Celebrate the joy of your newly transformed space</p>
            </div>
          </div>
        </div>

      </div>

      <div className="dream-content">
        <img src={dreamImg} alt="" />
      </div>

    </section>
  )
}

export default Dream
