import {Link} from 'react-router-dom'
import './DefaultLayout.css'
import letter from '../../public/letter-M.jpeg'

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({children}: DefaultLayoutProps) {
  return (
    <>
    <div >
      <header className='navCont'>
      <img src={letter} alt='letterImg' className='imgStyle'/>
          <nav className='navBar'>
            <ul className="nav-link">
              <li>
                <Link to="/" className='Link'>Home</Link>
              </li>
              <li>
                <Link to="/signup" className='Link'>Signup</Link>
              </li>
            </ul>
          </nav>
        </header>
    </div>
      <main>{children}</main>
      </>
  )
}