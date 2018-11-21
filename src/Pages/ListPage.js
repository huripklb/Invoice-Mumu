import React, { Component } from 'react';
import './../App.css';
import { Link } from 'react-router-dom';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';

import Header from '../Layout/Header'
import Footer from '../Layout/Footer';


class ListPage extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p>List of generated invoices : </p>
        <ListGroup flush>
            <ListGroupItem>Invoice sample A.</ListGroupItem>
            <ListGroupItem>Invoice sample B.</ListGroupItem>
            <ListGroupItem>Invoice sample C.</ListGroupItem>
        </ListGroup>
        <p className="buttonForm">
            <Link to="/">
                <Button>Back to Home</Button>
            </Link>
        </p>
        <Footer />
      </div>
    );
  }
}

export default ListPage;
