import customerImg from "../assets/customer-image.svg";
import rightArrow from "../assets/right-arrow.svg";
import leftArrow from "../assets/left-arrow.svg";
import CustomerCard from "../components/CustomerCard";
import customer1 from "../assets/customer1.svg";
import customer2 from "../assets/customer2.svg";
import Email from "../components/Email";


const Customers = () => {
  return (
    <section className="customers relative z-0 flex flex-row gap-16 px-12 mt-36 mb-[40rem]">

      <div>
        <img src={customerImg} alt="" />
      </div>
      <div className="self-start">
        <h1 className="font-semibold xl:text-5xl mt-4 2xl:text-6xl 2xl:px-12 2xl:mt-8 lg:text-4xl">What Our Customers Say About Us</h1>
      </div>

      <div className="flex flex-row gap-16 items-center z-0">
        <img className="absolute bottom-[-6rem] left-[3rem]" src={leftArrow} alt="" />
        <img className="absolute bottom-[-6rem] left-[10rem]" src={rightArrow} alt="" />
      </div>

      <div className="customer-container bottom-[-6rem] left-[18rem] 2xl:left-[28rem] xl:left-[20rem] pl-8 pt-8 pr-2 pb-2 rounded-[4px] flex flex-row gap-8 items-center justify-center z-10 bg-white absolute">
            <CustomerCard image={customer1} name="Sophie Carter" country="New York, USA" comment="Working with your design team was an absolute pleasure. The attention to detail and creativity exceeded my expectations.  Thank you for making my home beautiful!" />
            <CustomerCard image={customer2} name="James Bennett" country="Toronto, Canada" comment="Exceptional service! From the initial consultation to the final reveal, your team demonstrated professionalism and a keen eye for design. Highly recommend!" />
      </div>
      
      
      <Email/>

      
      

    </section>
  )
}

export default Customers
