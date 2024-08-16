import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // Correct imports
import Navbar from './Components/Navbar/Navbar'; // Adjust the path to your Navbar component

function Home() {
  return <div>Home Page</div>; // Example: Replace with your actual home component
}

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
