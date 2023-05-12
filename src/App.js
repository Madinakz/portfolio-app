
import './App.css';
import CV from './Components/CV/cv';
import Header from './Components/Header/header';
import { ME } from './images/images';

function App() {
  return (
    <div className="App">

      <Header/>
      <CV/>
      <div className='about-me'>
        <div className='about-me-main'>
          <div>
            <p className='about-me-text'>About me</p>
          </div>
          <div>
            <p className='about-me-description'>I`m software developer and this is my portfolio.
                I`m software developer and this is my portfolio.
                I`m software developer and this is my portfolio. 
                I`m software developer and this is my portfolio.</p>
          </div>
          <div className='skills'>
            <div className='skills-description'>
              <p>Lorem Ipsum Description Text</p>
              <p>Lorem Ipsum Description Text</p>
            </div>
            <div>
              <p>Lorem Ipsum Description Text</p>
              <p>Lorem Ipsum Description Text</p>
            </div>
          </div>
        </div>
        <div>
        <img src={ME} className='me-photo'/>
        </div>
      </div>

      <div className='experience-main'>
        <div className='experience-title'>
          <p >Experience</p>
        </div>
        <div className='my-experience'>
          <div>
            <p style={{width:"143px"}}>2021-2022</p>
          </div>
          <div style={{width:"467px"}}>
            <p>The Role at the Company</p>
            <p>Country, City</p>
            <p>I`m software developer and this is my portfolio.
                I`m software developer and this is my portfolio.
                I`m software developer and this is my portfolio.
                I`m software developer and this is my portfolio.</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
