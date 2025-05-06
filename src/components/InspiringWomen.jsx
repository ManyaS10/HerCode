import React from "react";
import "../style.css";

const InspiringWomen = () => {
  const womenData = [
    {
      name: "Roshni Nadar Malhotra",
      role: " CEO of HCL Technologies",
      
      image: "/Roshni-Nadar.jpeg",
      quote: " As the first woman to lead a listed Indian IT company, Roshni Nadar has been instrumental in shaping HCL Technologies’ journey and contributing to India's tech landscape."
    },
    {
      name: "Suchi Saria",
      role: "Associate Professor of Computer Science at Johns Hopkins University",
      image: "/suchi-saria.jpeg",
      quote: "Suchi is a leading researcher in the field of machine learning and artificial intelligence, with a focus on healthcare applications.'"
    },
    {
      name: " Aruna Jayanthi",
      role: "Former CEO of Capgemini India",
      image: "/Aruna.avif",
      quote: "Aruna Jayanthi is a well-known name in the Indian IT industry. As the CEO of Capgemini India, she led the company’s growth strategy in India and helped the company emerge as one of the most respected IT firms in the country. "
    }
  ];

  return (
    <section id="inspiring-women" className="inspiring-women-section">
      <div className="container text-center">
        <h2 className="section-title">Inspiring Women in Tech</h2>
        <div className="row">
          {womenData.map((woman, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card inspiring-woman-card">
                <img src={woman.image} className="card-img-top" alt={woman.name} />
                <div className="card-body">
                  <h5 className="card-title">{woman.name}</h5>
                  <p className="card-text">{woman.role}</p>
                  <p className="quote fst-italic">{woman.quote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InspiringWomen;
