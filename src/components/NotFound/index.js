import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return !isDarkTheme ? (
        <Link to="/notfound" className="link-item">
          <div className="home">
            <Navbar />
            <div className="home-cont1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
                className="home-img"
              />
              <h1 className="heading1">Lost Your Way?</h1>
              <p className="para">
                We cannot seem to find the page your looking for.
              </p>
            </div>
          </div>
        </Link>
      ) : (
        <Link to="/notfound" className="link-item">
          <div className="home">
            <Navbar />
            <div className="home-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
                className="home-img"
              />
              <h1 className="heading">Lost Your Way?</h1>
              <p className="para1">
                We cannot seem to find the page your looking for.
              </p>
            </div>
          </div>
        </Link>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
