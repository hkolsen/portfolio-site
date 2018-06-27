import React from 'react';
import conferences from '../data/conferences.json';
import talks from '../data/talks.json';
import '../css/Speaking.css';

class Speaking extends React.Component {
  render() {
    const speakerGrid = conferences.map((conference) =>
      <div key={conference.id} className="speaker__boxx">
        <div className="speaker__border"></div>
        <span className="speaker__cat">{conference.category}</span>
        <span className="speaker__location">{conference.location}</span>
        <h3><a href={conference.conference_url}>{conference.title}</a></h3>
        <p>{conference.date}</p>
        {conference.cta ? <a className="speaker__btn" href={conference.cta}>{conference.cta_text}</a> : "" }
      </div> 
    );
    const talkGrid = talks.map((talk) =>
      <div key={talk.id} className="speaker__boxx">
        <span className="speaker__cat">{talk.category}</span>
        <span className="speaker__location">{talk.location}</span>
        <h3><a href={talk.conference_url}>{talk.title}</a></h3>
        <p>{talk.date}</p>
        {talk.cta ? <a className="speaker__btn" href={talk.cta}>{talk.cta_text}</a> : "" }
      </div> 
    );
    return (
      <section className="speaking" id="speaking">
        <div className="speaker__headline"><h1>Speaking <span className="and">&amp;</span> Sharing</h1></div>
        <div className="speaker__grid">
          {speakerGrid}
        </div>
        <div className="talk__grid">
          {talkGrid}
        </div>
      </section>
    );
  }
}

export default Speaking;