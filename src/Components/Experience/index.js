import { REDPOINT } from '../../images/images'
import'./experience.css'

export default function Experience(){
    return(
        <div className='experience-main'>
            <div className='experience-title'>
            <p >Experience</p>
            </div>
            <div className='my-experience'>
                <div className='period' >
                    <p >2021-2022</p>
                </div>
                <div style={{width:"467px"}}>
                    <div className='position'>
                        <img src={REDPOINT} className='redpoint'/>
                        <p>The Role at the Company</p>
                    </div>
                    <p className='location'>Country, City</p>
                    <p className='description-of-experience'>I`m software developer and this is my portfolio.
                        I`m software developer and this is my portfolio.
                        I`m software developer and this is my portfolio.
                        I`m software developer and this is my portfolio.</p>
                </div>
            </div>
            <div className='my-experience'>
                <div className='period' >
                    <p >2020-2019</p>
                </div>
                <div style={{width:"467px"}}>
                    <div className='position'>
                        <img src={REDPOINT} className='redpoint'/>
                        <p>The Role at the Company</p>
                    </div>
                    <p className='location'>Country, City</p>
                    <p className='description-of-experience'>I`m software developer and this is my portfolio.
                        I`m software developer and this is my portfolio.
                        I`m software developer and this is my portfolio.
                        I`m software developer and this is my portfolio.</p>
                </div>
                
            </div>
            <div className='my-experience'>
                <div className='period' >
                    <p >2019-2017</p>
                </div>
                <div style={{width:"467px"}}>
                    <div className='position'>
                        <img src={REDPOINT} className='redpoint'/>
                        <p>The Role at the Company</p>
                    </div>
                    <p className='location'>Country, City</p>
                    <p className='description-of-experience'>I`m software developer and this is my portfolio.
                        I`m software developer and this is my portfolio.
                        I`m software developer and this is my portfolio.
                        I`m software developer and this is my portfolio.</p>
                </div>
                
            </div>
      </div>
    )
}