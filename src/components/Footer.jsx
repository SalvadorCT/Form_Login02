import '../assets/all.css';

export const Footer = () => {
    return (
        
        <div className="footergeneral lanimation">
        
        <footer className="container">
            <hr></hr>
            <div className="nav">
                <div className="footer-nav-block">
                    <a target="_blank" href="#a">Términos y Condiciones</a>
                </div>
                <div className="footer-nav-block">
                    <a target="_blank" href="#a">Preguntas Frecuentes</a>
                </div>
                <div className="footer-nav-block">
                    <a href="#a">Regresar a Teletubbies Perú</a>
                </div>
            </div>
            <hr></hr>
            <div className="footer-copyright">
            &copy; 2022 Teletubbies Perú | Todos los derechos reservados. {/*|  <a href='https://www.freepik.es/fotos/tienda-online'>Foto de tienda online creado por mego-studio - www.freepik.es</a>} */}
            </div>
        </footer>
        
        </div>
        
    );
}
