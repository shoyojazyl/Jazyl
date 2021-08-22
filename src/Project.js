import { useState } from "react";
import React from "react";
import "./Project.css";
const Project = () => {
  const [blogs, setBlogs] = useState([
    {
      image: "https://www.w3schools.com/w3images/house5.jpg",
      title: "Summer House",
      id: 1,
    },
    {
      image: "https://www.w3schools.com/w3images/house2.jpg",
      title: "Brick House",
      id: 2,
    },
    {
      image: "https://www.w3schools.com/w3images/house3.jpg",
      title: "Renovated",
      id: 3,
    },
    {
      image: "https://www.w3schools.com/w3images/house4.jpg",
      title: "Summer House",
      id: 4,
    },
    {
      image: "https://www.w3schools.com/w3images/house2.jpg",
      title: "Brick House",
      id: 5,
    },
    {
      image: "https://www.w3schools.com/w3images/house5.jpg",
      title: "Renovated",
      id: 6,
    },
    {
      image: "https://www.w3schools.com/w3images/house4.jpg",
      title: "Summer House",
      id: 7,
    },
    {
      image: "https://www.w3schools.com/w3images/house3.jpg",
      title: "Barn House",
      id: 8,
    },
  ]);
  return (
    <div className="project-text">
      <h1>Projects</h1>
      <div className="container-project">
        {blogs.map((blog) => (
          <div className="project-preview" key={blog.id}>
            <img src={blog.image} alt={blog.title} />
            <h2 className="project-preview-h2" style={{ margin: 0 }}>
              {blog.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
