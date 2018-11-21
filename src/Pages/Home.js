import React, { Component } from 'react';
import './../App.css';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import Header from './../Layout/Header'
import Footer from './../Layout/Footer';


class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="home">
            <h1>Hello Mumu!</h1>
            <p>Welcome to Mumu Invoice Generator!</p>
            <p className="buttonWrapper">
                <Link to="/form">
                    <Button color="success">Create New Invoice</Button>
                </Link>
            </p>
            <p className="buttonWrapper">
                <Link to="/list">
                    <Button color="info">List of Invoices</Button>
                </Link>
            </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
