import React from 'react';
import Search from './Search';
import Saved from './Saved';

// Include React
// var React = require("react");
//
// var Search = require("./Search");
//
// var Saved = require("./Saved");


// Create the Main component.
var Main = React.createClass({
  // Describe Main Component's render method
  render: function() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>New York Times Article Finder</h1>
          <p>Search for your Favorite Articles!</p>
        </div>
        <div className="row">
          <Search />
        </div>
        <div className="row">
          <Saved />
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
export default Main;
