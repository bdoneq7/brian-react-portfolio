import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import featuredOne from "../../assets/images/featured/whatsoutthere.PNG";

function Portfolio(props) {
    const currentCategory = {
      name: "Portfolio",
      description:
        "Featured Projects",
    };
    return (
        <section>
        <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
        <p>{currentCategory.name}</p>
        <div className="flex-row">
          <img
            src={featuredOne}
            alt="What's Out There"
            className="img-thumbnail mx-1"
          />
      </div>
      </section>
    );
  }
export default Portfolio;