import React from 'react';
import blogs from '../data/blogs.json';
import '../css/Writing.css';

class Writing extends React.Component {
  render() {
    const blogGrid = blogs.map((blog) =>
      <div key={blog.id} className="blog__boxx">
        <span className="blog__tags">{blog.tags}</span>
        <img src={blog.img} alt={blog.title} />
        <div className="blog__content">
          <h3>{blog.title}</h3>
          <a className="blog__btn" href={blog.url}>{blog.url_text}</a>
        </div>
      </div>
    );
    return (
      <section className="writing" id="writing">
        <div className="blog__headline"><h1>Teach <span className="and">&amp;</span> Inspire</h1></div>
        <div className="blog__grid">
          {blogGrid}
        </div>
      </section>
    );
  }
}

export default Writing;