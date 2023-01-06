import './style.css'

export function Footer () {
    
    return (

        <div className='container'>

                <div id="social-links">

                    <a href="https://github.com/arTiwnl" target="_blank">
                        <ion-icon name="logo-github"></ion-icon>
                    </a>   

                    <a href="https://www.instagram.com/carvalhoarthur.dev/" target="_blank">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>

                    <a href="https://www.linkedin.com/in/arthur-iwnl/?original_referer=https%3A%2F%2Farthurcarvalho.carrd.co%2F" target="_blank">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a>



                </div>

                <footer>
                    <a>Feito com ❤ por Arthur Carvalho</a>
                </footer>
        </div>
    )
}