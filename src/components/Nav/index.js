import React from 'react';

function Nav() {

    function categorySelected(name) {
        console.log(`${name} clicked`)
      }

    const categories = [
        {
          name: "Portfolio",
          description:
            "portfolio of projects",
        },
        { name: "Contact", description: "Contact Brian" },
        { name: "Resume", description: "Brian Resume" },
        
      ];

  return (
    <header>
  <h2>
    <a href="/">
      <span role="img" aria-label="camera"> 📸</span> Brian Done Portfolio
    </a>
  </h2>
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="#about">
          About Brian
        </a>
      </li>
      {categories.map((category) => (
  <li
    className="mx-1"
    key={category.name}
  >
    <span onClick={() => categorySelected(category.name)} >
      {category.name}
    </span>
  </li>
))}
    
    </ul>
  </nav>
</header>
  );
}

export default Nav;