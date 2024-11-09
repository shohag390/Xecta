import "./App.css";
import About from "./components/About/About";
import ClientHappy from "./components/ClientHappy/ClientHappy";
import Clients from "./components/Clients/Clients";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import GoTop from "./components/GoTop/GoTop";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Price from "./components/Price/Price";
import Projects from "./components/Projects/Projects";
import Service from "./components/Service/Service";
import Team from "./components/Team/Team";

const App = () => {
  return (
    <div>
      <Navbar />
      <GoTop />
      <Hero />
      <About />
      <ClientHappy />
      <Service />
      <Team />
      <Projects />
      <Price />
      <Clients />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
