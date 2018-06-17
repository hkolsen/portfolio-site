import React from 'react';
import '../css/App.css';
import Header from './Header';
import Introduction from './Introduction';
import Coding from './Coding';
import Speaking from './Speaking';
import Writing from './Writing';
import Interests from './Interests';
import Patterns from './Patterns';


class App extends React.Component {
  render() {        
    return (
      <div>
        <Header tagline="Portfolio Site" />
        <Introduction />
        <Coding />
        <Speaking />
        <Writing />
        <Interests />
        <Patterns />
      </div>
    );
  }
}

export default App;