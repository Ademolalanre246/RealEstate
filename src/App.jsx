import Header from "./component/Header";
import Hero from "./component/Hero/Hero";
import "./App.css"
import Companies from "./component/Companies/companies";
import Residencies from "./component/Residencies/Residencies";
import Value from "./Value/Value";
import Contact from "./component/Contact/Contact";
import GetStarted from "./component/GetStarted/GetStarted";
import Footer from "./component/Footer/Footer";





function App() {
  return (
    <div className="App">
    <div>
      <div className="white-gradient"/>
        <Header />
        <Hero />
    </div>
    <Companies/>
   <Residencies/>
   <Value/>
   <Contact/>
   <GetStarted/>
   <Footer/>
</div>

  );
}

export default App;
