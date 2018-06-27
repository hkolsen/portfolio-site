import React from 'react';
import projects from '../data/projects.json';
import '../css/Coding.css';

class Coding extends React.Component {
  render() {
    const projectGrid = projects.map((project) =>
      <div key={project.id} className="project__boxx">
        <div><img src={project.img} alt={project.title} /></div>
        <span className="project__cat">{project.tags}</span>
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        {project.primary_url ? <a className="project__btn" href={project.primary_url}>{project.primary_url_text}</a> : "" }
        {project.secondary_url ? <a href={project.secondary_url}>{project.secondary_url_text}</a> : "" }
      </div>
    );
    return (
      <section className="coding" id="coding">
        <div className="project__hero">
          <div className="project__txt">
            <h2><span>Work</span><span>Work</span><span>Work</span><span>Work</span><span>Work</span></h2>
            <span className="project__cat">Wordpress, PHP, Design System, CSS Animations</span>
            <h3>Care Essentials WordPress Site</h3>
            <p>Architected and developed a fully-editable Wordpress site using custom post types and PHP functions. Built a design system for a cohesive experience.</p>
            <a className="project__btn" href="https://careessentials.org/">View Site</a>
            <a href="http://eroi.com/work/kaiser-permanente-care-essentials/">Read Case Study</a>
          </div>
          <div className="project__img"><img src="images/work__care-essentials.svg" alt="Care Essentials Wordpress Site" /></div>
        </div>
        <div className="project__grid">
          {projectGrid}
        </div>
      </section>
    );
  }
}

export default Coding;