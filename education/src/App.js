import "./App.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Best from "./components/best/Best";
import Features from "./components/features/Features";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Best></Best>
      <Features></Features>
    </>
  );
}

export default App;
