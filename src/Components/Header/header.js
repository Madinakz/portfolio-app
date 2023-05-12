import './header.css';

export default function Header(){
    return(
        <div class = "Header">
            <div class="Headerleft" >
               
                <h3>Madina</h3>
                </div>
                
            <div class="Headerright">
                <button class="Transparent">About</button>
                <button class="Transparent">Experience</button>
                <button class="Transparent">Projects</button>
                <button class ="Transparent">Contacts</button>
            </div>
        </div>
    )
}