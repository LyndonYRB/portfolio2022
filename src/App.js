import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Banner } from "./components/Banner";
import NavBar from "../src/components/NavBar";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";


export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects /> 
      <Footer />
    </div>
  );
}
