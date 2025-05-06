import React from "react";
import "../style.css";

const stories = [
  {
    name: "Neha Narkhede",
    image: "/neha.jpg",
    quote: "Creator of Apache Kafka • Co-founder of Confluent",
  },
  {
    name: "Aparna Chennapragada",
    image: "/aparna.jpg",
    quote: "Ex-Google VP • Chief Product Officer at Robinhood",
  },
  {
    name: "Ruchi Sanghvi",
    image: "/Ruchi.png",
    quote: "First Woman Engineer at Facebook",
  },
];

const SuccessStories = () => {
  return (
    <section id="success" className="success-section py-5">
      <div className="container text-center">
        <h2 className="section-title mb-4">Success Stories</h2>
        <p className="section-subtitle mb-5">
          Real women. Real impact. Their code changed the world.
        </p>

        <div className="row">
          {stories.map((story, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="success-card">
                <div className="card-img">
                  <img src={story.image} alt={story.name} className="img-fluid" />
                </div>
                <div className="card-overlay">
                  <h5>{story.name}</h5>
                  <p>{story.quote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
