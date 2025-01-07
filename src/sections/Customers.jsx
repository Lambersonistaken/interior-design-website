import customerImg from "../assets/customer-image.svg";
import rightArrow from "../assets/right-arrow.svg";
import leftArrow from "../assets/left-arrow.svg";
import CustomerCard from "../components/CustomerCard";
import customer1 from "../assets/customer1.svg";
import customer2 from "../assets/customer2.svg";
import Email from "../components/Email";


const Customers = () => {
  return (
    <section className="customers relative z-0 flex flex-col md:flex-row gap-8 md:gap-16 px-4 sm:px-12 mt-16 sm:mt-36 mb-[45rem] sm:mb-[40rem]">
      <div className="w-full md:w-auto">
        <img src={customerImg} className="w-full md:w-auto" alt="" />
      </div>
      
      <div className="self-start max-w-[600px]">
        <h1 className="font-semibold text-3xl sm:text-4xl lg:text-4xl 2xl:text-6xl mt-2 sm:mt-4 2xl:mt-8 2xl:px-12">
          What Our Customers Say About Us
        </h1>
      </div>

      <div className="flex flex-row gap-8 sm:gap-16 items-center z-0">
        <img className="absolute bottom-[-6rem] left-4 sm:left-[3rem] w-8 sm:w-auto" src={leftArrow} alt="" />
        <img className="absolute bottom-[-6rem] left-16 sm:left-[10rem] w-8 sm:w-auto" src={rightArrow} alt="" />
      </div>

      <div className="customer-container absolute bottom-[-6rem] left-1/2 transform -translate-x-1/2
                    mx-4 sm:mx-0 pl-4 sm:pl-8 pt-8 pr-2 pb-2 rounded-[4px]  lg:left-[40rem]
                    flex flex-col sm:flex-row gap-8 items-center justify-center z-10 bg-white">
        <CustomerCard 
          image={customer1} 
          name="Sophie Carter" 
          country="New York, USA" 
          comment="Working with your design team was an absolute pleasure. The attention to detail and creativity exceeded my expectations. Thank you for making my home beautiful!" 
        />
        <CustomerCard 
          image={customer2} 
          name="James Bennett" 
          country="Toronto, Canada" 
          comment="Exceptional service! From the initial consultation to the final reveal, your team demonstrated professionalism and a keen eye for design. Highly recommend!" 
        />
      </div>
      
      <Email/>
    </section>
  )
}

export default Customers
