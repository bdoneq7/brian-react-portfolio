import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import './App.css';

function App() {
  const [categories] = useState([
    {
      name: 'portfolio',
      description: 'featured projects',
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div>
          <Portfolio></Portfolio>
          <About></About>
        </div>
      </main>
    </div>
  );
}

export default App;
