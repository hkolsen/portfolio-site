import React from 'react';
import '../css/App.css';
import Header from './Header';
import Introduction from './Introduction';
import Coding from './Coding';
import Speaking from './Speaking';
import Writing from './Writing';
import Interests from './Interests';

class App extends React.Component {
  render() {        
    return (
      <div>
        <Header />
        <Introduction />
        <Coding />
        <Speaking />
        <Writing />
        <Interests />
      </div>
    );
  }
}

export default App;