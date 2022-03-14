import React from 'react';
import brianImage from "../../assets/images/brian-small.png";

function Nav(props) {
  const {
    handlePageChange
  } = props;

  return (
    <header>
      <nav className="flex-row">
        <h1 className="flex-row vcenter">
          <img id="my-header-pic" src={brianImage} alt="Brian Done" title="Brian Done" />
            Brian Done
        </h1>
        <ul className="flex-row center-content">
          <li className={`mx-2`}>
            <button id="navAbout" onClick={() => handlePageChange('About')}>About Brian</button>
          </li>
          <li className={`mx-2`}>
            <button id="navContact" onClick={() => handlePageChange('Contact')}>Contact</button>
          </li>
          <li className={`mx-2`}>
            <button id="navProjects" onClick={() => handlePageChange('Projects')}>Portfolio</button>
          </li>
          <li className={`mx-2`}>
          <button id="navResume" onClick={() => handlePageChange('Resume')}>Resume</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
