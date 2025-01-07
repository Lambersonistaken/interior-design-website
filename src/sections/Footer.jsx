import vivaLogo from "../assets/viva-logo-white.svg";
import facebook from "../assets/Facebook.svg";
import X from "../assets/X.svg";
import instagram from "../assets/Instagram.svg";
import linkedin from "../assets/Linkedin.svg";

const Footer = () => {
  return (
    <footer className=" bg-[#1F1F1F] text-white flex flex-row justify-between pt-56 pb-16 items-center px-12">

        
        <div className="flex flex-col items-start justify-center gap-8">
            <img src={vivaLogo} alt="" />
            <p className="text-slate-300 font-medium">VivaDecor your premier <br /> destination for luxury and <br /> modern interior design</p>
            <div className="socials flex flex-row items-center justify-center gap-2">
                <img src={facebook} alt="" />
                <img src={X} alt="" />
                <img src={instagram} alt="" />
                <img src={linkedin} alt="" />
            </div>
        </div>

        <div className="flex flex-col items-start justify-center gap-8">
            <h2>Our Services</h2>
            <p className="text-slate-300 font-medium">Interior design</p>
            <p className="text-slate-300 font-medium">Outdoor design</p>
            <p className="text-slate-300 font-medium">Lightning design</p>
            <p className="text-slate-300 font-medium">Office design</p>
        </div>

        <div className="flex flex-col items-start justify-center gap-8">
            <h2>Our Services</h2>
            <p className="text-slate-300 font-medium">Reviews</p>
            <p className="text-slate-300 font-medium">Careers</p>
            <p className="text-slate-300 font-medium">Pricing</p>
            <p className="text-slate-300 font-medium">Press inquires</p>
        </div>

        <div className="flex flex-col items-start justify-center self-start gap-8">
            <h2>Our Services</h2>
            <p className="text-slate-300 font-medium">info@vivadecor.com</p>
            <p className="text-slate-300 font-medium">Design Avenue Cityville, <br /> CA 90210 United States</p>
            
        </div>

    </footer>
  )
}

export default Footer
