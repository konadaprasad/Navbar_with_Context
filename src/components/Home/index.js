import ThemeContext from '../../context/ThemeContext'

import './index.css'

import Navbar from '../Navbar'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return !isDarkTheme ? (
        <div className="home1">
          <Navbar />
          <div className="home-cont1">
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
              alt="home"
              className="home-img"
            />
            <h1 className="heading1">Home</h1>
          </div>
        </div>
      ) : (
        <div className="home1">
          <Navbar />
          <div className="home-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
              alt="home"
              className="home-img"
            />
            <h1 className="heading">Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
