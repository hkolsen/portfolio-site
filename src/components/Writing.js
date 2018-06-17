import React from 'react';
import blogs from '../data/blogs.json';
import '../css/Writing.css';
 
class Writing extends React.Component {
  render() {
    return (
      <section className="writing" id="writing">
        <h2>Writing</h2>
        <ul> 
          { blogs.map(function(blogs){
            return <li>
              <p>{blogs.tags}</p>
              <h3>{blogs.title}</h3>
              <p>{blogs.desc}</p>
              <p><a href="{blogs.url}" target="_blank">{blogs.url_text}</a></p>
            </li>;
            })
          }
        </ul>
      </section>
    );
  }
}

export default Writing;