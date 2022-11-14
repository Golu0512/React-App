import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">{props.aboutTxtUtils}</a>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            <div className={`form-check form-switch text-${props.mode==='light' ? 'dark':'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
          </div>
          </div>
        </div>
      </nav>
  )
}

// this is checks for data type........
Navbar.propTypes = { 
  title: PropTypes.string.isRequired, //isRequired is use for this is mandatory to pass as props otherwise showing warning on console
  aboutTxtUtils: PropTypes.string
}


// set default props if there is no props value send through main component
Navbar.defaultProps = {
  title: 'Title here',
  aboutTxtUtils: 'about text here'
}