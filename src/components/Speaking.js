import React from 'react';
import talks from '../data/talks.json';
import '../css/Speaking.css';

class Speaking extends React.Component {
  render() {
    const speakerGrid = talks.map((talk) =>
      <div key={talk.id} className="speaker__boxx">
        <div class="border"></div>
        <h4>{talk.category}</h4>
        <h3><a href={talk.conference_url} target="_blank">{talk.title}</a></h3>
        <p>{talk.date}</p>
        <p>{talk.location}</p>
        {talk.cta ? <button href={talk.cta} target="_blank">{talk.cta_text}</button> : "" }
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