/* eslint-disable react/prop-types */
import char from "../assets/char.svg";

const CustomerCard = ({image,country,name,comment}) => {
  return (
    <div className="w-[400px] h-[400px] lg:w-[350px] lg:h-[350px] 2xl:w-[500px] 2xl:h-[500px] bg-slate-950 rounded-[4px] text-white flex flex-col items-start gap-10 pl-8 justify-center">
      <img src={char} className="lg:w-8 2xl:w-14" alt="" />
      <p className="text-md w-[320px] lg:text-sm xl:text-base lg:w-[300px] 2xl:text-lg">{comment}</p>
      <div className="flex flex-row items-center justify-center gap-8">
        <img src={image} alt="" />
        <div className="flex flex-col justify-center items-center gap-2">
            <h3>{name}</h3>
            <p>{country}</p>
        </div>
      </div>

    </div>
  )
}

export default CustomerCard
