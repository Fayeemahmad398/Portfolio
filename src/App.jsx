import "./App.css"
import Navbar from "./Components/Navbar/Navbar"
import TopSection from "./Components/TopSection/TopSection"
import "./App.css"
import AboutMe from "./Components/AboutMe/AboutMe"
import Skills from "./Components/Skills/Skills"
import Project from "./Components/Projects/Project"
import Statistics from "./Components/Statistics/Statistics"
import Contact from "./Components/ContactMe/Contact"
const App = () => {
  return (
    <div>
      <Navbar />
      <TopSection />
      <AboutMe />
      <Skills />
      <Project />
      <Statistics />
      <Contact />

    </div>
  )
}

export default App