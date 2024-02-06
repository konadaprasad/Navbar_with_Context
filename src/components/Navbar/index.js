import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onToggleTheme = () => {
        console.log(isDarkTheme)
        toggleTheme()
      }

      return !isDarkTheme ? (
        <nav className="nav-cont1">
          <ul className="un-order">
            <li>
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website logo"
                className="logo"
              />
            </li>
            <div className="cont">
              <Link to="/" className="link-item">
                <li>
                  <p className="para">Home</p>
                </li>
              </Link>
              <Link to="/about" className="link-item">
                <li>
                  <p className="para">About</p>
                </li>
              </Link>
            </div>
            <li>
              <button
                className="btn"
                type="button"
                data-testid="theme"
                onClick={onToggleTheme}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  alt="theme"
                  className="logo"
                />
              </button>
            </li>
          </ul>
          <hr className="line" />
        </nav>
      ) : (
        <nav className="nav-cont">
          <ul className="un-order">
            <li>
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="website logo"
                className="logo"
              />
            </li>
            <div className="cont">
              <Link to="/" className="link-item">
                <li>
                  <p className="para1">Home</p>
                </li>
              </Link>
              <Link to="/about" className="link-item">
                <li>
                  <p className="para1">About</p>
                </li>
              </Link>
            </div>
            <li>
              <button
                className="btn"
                type="button"
                data-testid="theme"
                onClick={onToggleTheme}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  alt="theme"
                  className="logo"
                />
              </button>
            </li>
          </ul>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
