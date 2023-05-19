
import './App.css';
import Aboutme from './Components/Aboutme';
import CV from './Components/CV';
import Contacts from './Components/Contacts';
import Experience from './Components/Experience';
import Footer from './Components/Footer/footer';
import Header from './Components/Header';
import Projects from './Components/Projects';


function App() {
  return (
    <div className="App">
      <Header/>
      <CV/>
      <Aboutme/>
      <Experience/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </div>
  );
}


export default App;
