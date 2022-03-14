import React from 'react';
import brian from "../../assets/images/brian.png";

function About(props) {
  return (
    <section>
      <h1 className="mx-2" id="about">About Brian</h1>
      <img src={brian} className="my-2" style={{ width: "20%", height: "20%" }} alt="brian" title="brian" />
      <div className="my-2 mx-2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
          condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
          mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum.
          Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique
          justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea
          dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh.
          Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
        </p>
      </div>
    </section>
  );
}

export default About;