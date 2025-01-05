/* eslint-disable react/prop-types */
import { useState } from 'react'
import add from "../assets/add.svg";
import minus from "../assets/minus.png";

const Accordion = ({title,desc}) => {

    const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div>
      <div className="flex justify-between flex-row gap-4">
                      <h2 className="text-lg font-semibold text-slate-800">{title}</h2>
                      <button onClick={() => setAccordionOpen(!accordionOpen)}>
                      {accordionOpen ? <img width={32} src={minus} alt="" /> : <img src={add} alt="" />} 
                      </button>
                      </div>
                     
                      <div className={`grid overflow-hidden mt-4 transition-all duration-300 ease-in-out text-slate-800 ${accordionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                          <div className="overflow-hidden">
                              {desc}
                          </div>
                      </div>
    </div>
  )
}

export default Accordion
