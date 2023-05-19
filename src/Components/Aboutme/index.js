
import { GREYPOINT, ME } from '../../images/images'
import './aboutme.css'


export default function Aboutme(){
    return(

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
                    <img src={GREYPOINT} className='greypoint'/>
                    <p style={{marginRight:'50px'}}>Lorem Ipsum Description Text</p>

                    <img src={GREYPOINT} className='greypoint'/>
                    <p>Lorem Ipsum Description Text</p>
        </div>

        <div className='skills'>
                    <img src={GREYPOINT} className='greypoint'/>
                    <p style={{marginRight:'50px'}}>Lorem Ipsum Description Text</p>

                    <img src={GREYPOINT} className='greypoint'/>
                    <p>Lorem Ipsum Description Text</p>
        </div>
        
    </div>
    <div>
        <img src={ME} className='me-photo'/>
    </div>
</div>

    )
}
