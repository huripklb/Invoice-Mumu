import React, { Component } from 'react';
import './../App.css';
import { Link } from 'react-router-dom';
import { Button, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import Header from '../Layout/Header'
import Footer from '../Layout/Footer';


class FormPage extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p><h3>Add new Invoice : </h3></p>
        <Form>
          <FormGroup row>
            <Label for="item_name" sm={2}>Item Name</Label>
            <Col sm={10}>
              <Input type="text" name="item_name[]" id="item_name" placeholder="Type item name" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="quantity" sm={2}>Quantity</Label>
            <Col sm={5}>
              <Input type="text" name="quantity[]" id="quantity" placeholder="Type quantity value" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="price" sm={2}>Item Name</Label>
            <Col sm={10}>
              <Input type="text" name="price[]" id="price" placeholder="Type item price" />
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col className="buttonForm">
              <Button color="primary">Save</Button>
            </Col>
          </FormGroup>
        </Form>
        <p className="buttonForm">
            <Link to="/">
                <Button color="secondary">Back to Home</Button>
            </Link>
        </p>
        <Footer />
      </div>
    );
  }
}

export default FormPage;
