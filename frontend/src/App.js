import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ElasticSearch from 'elasticsearch'

class App extends Component {
  render() {
    const style = {
      textAlign: "center",

    }
    return (
      <div style={style}>
        <h1>Basic Search Application</h1>
        <p>I'm going to be using this to practice building a search engine.
        I need to familiarize myself with ElasticSearch for work. </p>
        <form>
            <input type="text" input="Search" />
            <input type="submit" value="Go!" />
        </form>
      </div>
    );
  }
}

export default App;
