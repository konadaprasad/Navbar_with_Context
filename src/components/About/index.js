import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return !isDarkTheme ? (
        <div className="home">
          <Navbar />
          <div className="home-cont1">
            <img
              src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
              alt="about"
              className="home-img"
            />
            <h1 className="heading1">About</h1>
          </div>
        </div>
      ) : (
        <div className="home">
          <Navbar />
          <div className="home-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
              alt="about"
              className="home-img"
            />
            <h1 className="heading">About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
