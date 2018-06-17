import React from 'react';
import conferences from '../data/conferences.json';
import webinars from '../data/webinars.json';
import meetups from '../data/meetups.json';
import '../css/Speaking.css';

class Speaking extends React.Component {
  render() {
    return (
      <section className="speaking" id="speaking">
      <h2>Speaking</h2>
        <div className="speaking-container">
          <h3>Conferences</h3>
          <ul>  
             { conferences.map(function(conferences) {
              return <li>
                <h3>{conferences.title}</h3>
                <p>{conferences.date}</p>
                <p>{conferences.desc}</p>
                <p><a href="{conferences.url" target="_blank">View Slides</a></p>
              </li>;
              })
            }
          </ul>
        </div>
        <div className="speaking-container">
          <h3>Webinars</h3>
          <ul>  
             { webinars.map(function(webinars) {
              return <li>
                <h3>{webinars.title}</h3>
                <p>{webinars.date}</p>
                <p>{webinars.desc}</p>
                <p><a href="{webinars.url}" target="_blank">View Slides</a></p>
              </li>;
              })
            }
          </ul>
        </div>
        <div className="speaking-container">
          <h3>Meetups</h3>
          <ul>  
             { meetups.map(function(meetups) {
              return <li>
                <h3>{meetups.title}</h3>
                <p>{meetups.date}</p>
                <p>{meetups.desc}</p>
                <p><a href="{meetups.url}" target="_blank">View Slides</a></p>
              </li>;
              })
            }
          </ul>
        </div>
      </section>
    );
  }
}

export default Speaking;


