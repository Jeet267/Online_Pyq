
import './App.css'
import FeaturedPYQSection from './components/FeaturepyqSection'
import Footer from './components/Footer'
// import HeroSection from './components/Hero'
import Navbar from './components/Navbar'
import PYQSection from './components/PYQSection'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <FeaturedPYQSection/>
    <PYQSection/>
    {/* <HeroSection/> */}
    <Footer/>
     
       
    </>
  )
}

export default App
