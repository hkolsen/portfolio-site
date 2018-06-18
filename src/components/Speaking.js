import React from 'react';
import talks from '../data/talks.json';
import '../css/Speaking.css';

class Speaking extends React.Component {
  render() {
    const speakerGrid = talks.map((talk) =>
      <div key={talk.id} className="speaker__boxx">
        <div className="speaker__border"></div>
        <span className="speaker__cat">{talk.category}</span>
        <span className="speaker__location">{talk.location}</span>
        <h3><a href={talk.conference_url} target="_blank">{talk.title}</a></h3>
        <p>{talk.date}</p>
        {talk.cta ? <a className="speaker__btn" href={talk.cta} target="_blank">{talk.cta_text}</a> : "" }
      </div>
    );
    return (
      <section className="speaking" id="speaking">
        <h2>Speaking</h2>
        <div className="speaker__grid">
          {speakerGrid}
        </div>
      </section>
    );
  }
}

export default Speaking;