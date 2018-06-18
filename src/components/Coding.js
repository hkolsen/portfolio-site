import React from 'react';
import projects from '../data/projects.json';
import '../css/Coding.css';

class Coding extends React.Component {
  render() {
    const projectGrid = projects.map((project) =>
      <div key={project.id} className="speaker__boxx">
        <span className="project__cat">{project.category}</span>
        <h3><a href={project.conference_url} target="_blank">{project.title}</a></h3>
        <p>{project.date}</p>
        {project.cta ? <a className="project__btn" href={project.cta} target="_blank">{project.cta_text}</a> : "" }
      </div>
    );
    return (
      <section className="coding" id="coding">
        <h2>Coding</h2>
        <div className="project__grid">
          {projectGrid}
        </div>
      </section>
    );
  }
}

export default Coding;