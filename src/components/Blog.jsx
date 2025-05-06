import React, { useState } from "react";
import "../style.css"; // make sure this matches your existing styling

const blogData = [
  {
    id: 1,
    title: "Women in Tech: Breaking Barriers",
    category: "Inspiration",
    date: "2025-05-01",
    content: "Discover how women are leading the way in technology.",
  },
  {
    id: 2,
    title: "Upcoming Coding Bootcamps",
    category: "Events",
    date: "2025-06-10",
    content: "Join top-rated bootcamps to enhance your skills.",
  },
  {
    id: 3,
    title: "HerCode Hackathon Highlights",
    category: "Events",
    date: "2025-04-15",
    content: "Take a look at our latest coding competition.",
  },
  {
    id: 4,
    title: "Career Tips for Female Developers",
    category: "Inspiration",
    date: "2025-05-04",
    content: "Land your dream frontend role with these tips.",
  },
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const filteredBlogs = blogData.filter((blog) => {
    const matchesSearch = blog.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "All" || blog.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="blogs" className="blogs-section py-5 bg-light">
      <div className="container">
        <h2 className="section-title text-center mb-4">Our Blogs</h2>

        <div className="row mb-4">
          <div className="col-md-6 mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Search blog titles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="col-md-6 mb-2">
            <select
              className="form-control"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Inspiration">Inspiration</option>
              <option value="Events">Events</option>
            </select>
          </div>
        </div>

        <div className="row">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <div key={blog.id} className="col-md-6 mb-4">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body">
                    <h5 className="card-title text-dark">{blog.title}</h5>
                    <p className="text-muted mb-1">{blog.date}</p>
                    <p className="badge bg-secondary">{blog.category}</p>
                    <p className="card-text mt-2">{blog.content}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No blogs found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
