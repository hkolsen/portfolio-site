import React from 'react';
import Header from './Header';
import Introduction from './Introduction';
import Coding from './Coding';
import Speaking from './Speaking';
import Writing from './Writing';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header tagline="Portfolio Site" />
        <Introduction />
        <Coding />
        <Speaking />
        <Writing />
      </div>
    );
  }
}

export default App;