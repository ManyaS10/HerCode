import React from "react";
import "../style.css";

const events = [
  {
    title: "Code & Coffee Meetup",
    date: "March 10, 2025",
    location: "Mumbai",
    description: "A casual event where women coders shared projects, ideas, and coffee!",
    image: "/Cofee-Meetups.jpeg",
  },
  {
    title: "HerCode Hackathon",
    date: "May 1, 2025",
    location: "Bengaluru",
    description: "A 24-hour hackathon that celebrated innovation and sisterhood in tech.",
    image: "/hackthone.avif",
  },
];

const Events = () => {
  return (
    <section id="events" className="events-section py-5">
      <div className="container text-center">
        <h2 className="section-title mb-4">Events</h2>
        <p className="section-subtitle mb-5">
          Celebrate the power of women in tech, join the movement!
        </p>

        <div className="row">
          {events.map((event, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="event-card">
                <div className="event-card-img">
                  <img src={event.image} alt={event.title} className="img-fluid" />
                </div>
                <div className="event-card-info">
                  <div className="event-card-title">
                    <h5>{event.title}</h5>
                    <p className="event-date">{event.date}</p>
                  </div>
                  <p className="event-location"><strong>Location:</strong> {event.location}</p>
                  <p className="event-description">{event.description}</p>
                  {/* <a href="#" className="btn btn-event">RSVP Now</a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
