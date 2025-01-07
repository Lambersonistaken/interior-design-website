/* eslint-disable react/prop-types */
import char from "../assets/char.svg";

const CustomerCard = ({image, country, name, comment}) => {
  return (
    <div className="w-full sm:w-[280px] lg:w-[300px] xl:w-[320px] 2xl:w-[400px] 
                    h-auto min-h-[280px] sm:h-[300px] xl:h-[320px] 2xl:h-[400px] 
                    bg-slate-950 rounded-[4px] text-white 
                    flex flex-col items-start gap-6 sm:gap-8 
                    p-6 sm:pl-8 justify-center">
      <img src={char} className="w-6 lg:w-6 2xl:w-12" alt="" />
      <p className="text-sm sm:text-base lg:text-sm 2xl:text-lg max-w-[240px] sm:max-w-[220px] xl:max-w-[280px]">
        {comment}
      </p>
      <div className="flex flex-row items-center gap-4 sm:gap-6">
        <img src={image} className="w-10 sm:w-12" alt="" />
        <div className="flex flex-col justify-center gap-1">
          <h3 className="text-sm sm:text-base">{name}</h3>
          <p className="text-xs sm:text-sm">{country}</p>
        </div>
      </div>
    </div>
  )
}

export default CustomerCard
