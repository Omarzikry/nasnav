import React, { Component } from "react";
import Layout from "./components/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";
import ShowCase from "./components/ShowCase";
import MapSection from "./components/MapSection";
class App extends Component {
  render() {
    return (
      <Router basename={"/nasnav"}>
        <div className="App">
          <Layout>
            <Hero />
            <ShowCase />
            <MapSection />
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
