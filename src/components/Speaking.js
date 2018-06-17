import React from 'react';
import talks from '../data/talks.json';
 
class Speaking extends React.Component {
  render() {
    return (
      <section>
        <h2>Speaking</h2>
        <ul> 
          { talks.map(function(talks){
            return <li>
              <h3>{talks.title}</h3>
              <p>{talks.date}</p>
              <p>{talks.desc}</p>
              <p><a href="{talks.url}" target="_blank">View Slides</a></p>
            </li>;
            })
          }
        </ul>
      </section>
    );
  }
}

export default Speaking;