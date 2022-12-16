import { Link } from 'react-router-dom'
import logo from '../../assets/logo1.png'
import './menu.css'

function Menu() {
    return(
        <>
            <div className='container-menu'>
                <div className='div-logo'>
                    <img className='logo' src={logo}/>
                </div>
                <div className='div-menu'>
                    <ul className="menu">
          
                        <li className="item">
                            <Link className="link" to="/">Inicio</Link>
                        </li>
                        <li className="item">    
                            <Link className="link" to="/projetos">Projetos</Link>
                        </li>
                        <li className="item">    
                            <Link className="link" to="/depoimentos">Depoimentos</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Menu