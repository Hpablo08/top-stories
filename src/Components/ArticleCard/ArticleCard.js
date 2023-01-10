import React from "react";
import { Link } from "react-router-dom";

function ArticleCard({ id, title, multimedia, section, url }) {
  return (
    <div className="article-card">
      <h2>{title}</h2>
      <img
        className="article-image"
        alt={`image for ${title}`}
        src={multimedia[1].url}
        onError={(e) => (e.target.src = "/NYT-emblem.jpeg")}
      />
      <p>Section: {section}</p>
      <a href={url}>
        <button className="card-btn">Link To Article</button>
      </a>
      <Link to={`/details/${id}`}>
        <button className="card-btn">Learn More Here</button>
      </Link>
    </div>
  );
}

export default ArticleCard;
