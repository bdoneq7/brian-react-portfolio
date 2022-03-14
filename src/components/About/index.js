import React from 'react';
import brian from "../../assets/images/brian.png";

function About() {
  return (
    <section>
      <h1 id="about">About Brian</h1>
      <img src={brian} className="my-2" style={{ width: "20%", height: "20%" }} alt="brian" title="brian" />
    </section>
  );
}

export default About;