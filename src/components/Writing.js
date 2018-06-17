import React from 'react';
import blogs from '../data/blogs.json';
 
class Writing extends React.Component {
  render() {
    return (
      <section>
        <h2>Writing</h2>
        <ul> 
          { blogs.map(function(blogs){
            return <li>
              <h3>{blogs.title}</h3>
              <p>{blogs.date}</p>
              <p>{blogs.desc}</p>
              <p><a href="{blogs.url}" target="_blank">Read More</a></p>
            </li>;
            })
          }
        </ul>
      </section>
    );
  }
}

export default Writing;