import React from 'react';
import Header from './Header';
import TopicNav from './TopicNav';
import '../styles/App.css';

var App = React.createClass({
  render() {
    return(
    <div className="App">
      <div className="App__wrap">
        <Header>
          <TopicNav />
        </Header>
        <div className="App_content">
          {this.props.children}
        </div>
      </div>
    </div>
    );
  }
});

module.exports = App;
