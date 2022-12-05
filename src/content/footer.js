import React from 'react'
import '../style/footer.css'
import logo from '../img/navbar_img/logo.png'

function Footer() {
    
    return (
        <React.Fragment>
            <div className='footer'>
                {/* Rendu du footer */}
                <p>© 2022 GameFinder</p>
                <img src={logo} alt="img"></img>
            </div>
        </React.Fragment>
    )
}

export default Footer