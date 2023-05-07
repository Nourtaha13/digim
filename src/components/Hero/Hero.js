import "./hero.css"
import Navbar from '../Navbar/Navbar'
import HeroContent from './HeroContent'
import CompanyLogs from "./CompanyLogs"

function Hero() {
   return (
      <section>
         <Navbar />
         <HeroContent />
         <CompanyLogs />
      </section>
   )
}

export default Hero