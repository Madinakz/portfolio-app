import { TODOLIST, GREYPOINT, TODOLIST_CODE } from '../../images/images'
import './projects.css'

export default function Projects(){
    return(
        <div className="projects">
            <div className='title'>
                <p>Projects I`ve Worked On</p>
            </div>
            <div className='todolist-project'>
                <div>
                    <img src={TODOLIST} className='todolist-image'/>
                </div>
                <div className='project-description'>
                    <p className='project-name'>Project name</p>
                    <p className='project-text'>
                        I`m software developer and this is my portfolio.
                        I`m software developer and this is my portfolio.
                        I`m software developer and this is my portfolio.
                        I`m software developer and this is my portfolio.
                    </p>
                    <div className='skills'>
                        <img src={GREYPOINT} className='greypoint'/>
                        <p style={{marginRight:'50px'}}>Lorem Ipsum Description Text</p>
                    </div>  
                    <div className='skills'>
                        <img src={GREYPOINT} className='greypoint'/>
                        <p style={{marginRight:'50px'}}>Lorem Ipsum Description Text</p>
                    </div> 
                </div>
            </div>

            <div className='todolist-project'>
                <div className='project-description'>
                    <p className='project-name'>Project name</p>
                    <p className='project-text'>
                        I`m software developer and this is my portfolio.
                        I`m software developer and this is my portfolio.
                        I`m software developer and this is my portfolio.
                        I`m software developer and this is my portfolio.
                    </p>
                    <div className='skills'>
                        <img src={GREYPOINT} className='greypoint'/>
                        <p style={{marginRight:'50px'}}>Lorem Ipsum Description Text</p>
                    </div>  
                    <div className='skills'>
                        <img src={GREYPOINT} className='greypoint'/>
                        <p style={{marginRight:'50px'}}>Lorem Ipsum Description Text</p>
                    </div> 
                </div>
                <div>
                    <img src={TODOLIST_CODE} className='todolist-image'/>
                </div>
            </div>
        </div>
    )
}