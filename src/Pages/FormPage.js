import React, { Component } from 'react';
import './../App.css';
import { Link } from 'react-router-dom';
import { Button, Col, Form, FormGroup, Label, Input, ListGroup, ListGroupItem } from 'reactstrap';
import NumberFormat from 'react-number-format';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import Header from '../Layout/Header'
import Footer from '../Layout/Footer';

library.add(faTimes)

class FormPage extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      invoiceItems: [],
      item_name: '',
      quantity: '',
      price: '',
      counter: 0,
      total_amount: 0
    }
    this.addToList = this.addToList.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleDelete = (index) => {
    const total_amount = this.state.total_amount
    var array = [...this.state.invoiceItems]; // make a separate copy of the array
    let new_total_amount = Number.parseInt(total_amount, 10) - (Number.parseInt(array[index].quantity, 10) * Number.parseInt(array[index].price, 10))
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({
        invoiceItems: array,
        total_amount: new_total_amount
      });
    }
  }

  addToList() {
    const invoiceItems = this.state.invoiceItems
    const counter = this.state.counter
    const total_amount = this.state.total_amount
    this.setState({
      invoiceItems: invoiceItems.concat(
        {
          item_name: this.state.item_name, 
          quantity: this.state.quantity, 
          price: this.state.price
        }
      ),
      counter: counter+1,
      total_amount: Number.parseInt(total_amount, 10) + (Number.parseInt(this.state.quantity, 10) * Number.parseInt(this.state.price, 10)),
      item_name: '',
      quantity: '',
      price: ''
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <h3>Items : </h3>
        <ListGroup>
          {this.state.invoiceItems.map((item, index) => (
            <ListGroupItem key={ index }>
              <Button color="secondary" onClick={() => this.handleDelete(index)}><FontAwesomeIcon icon="times" /></Button>&nbsp;
              { item.item_name } | { item.quantity } | { item.price }
            </ListGroupItem>
          ))}
        </ListGroup>
        <p  className="buttonForm">
          Total Amount: <NumberFormat value={ this.state.total_amount } displayType={'text'} thousandSeparator={true} prefix={'Rp. '} />
        </p>
        <p className="buttonForm">
          <Link to="/">
            <Button color="secondary">Back to Home</Button>
          </Link>
          &nbsp;
          <Button color="primary">
            Save
          </Button>
        </p>
        <p>&nbsp;</p>
        <h3>Add new items : </h3>
        <Form>
          <FormGroup row>
            <Label for="item_name" sm={2}>Item Name</Label>
            <Col sm={10}>
              <Input value={this.state.item_name} type="text" name="item_name" id="item_name" placeholder="Type item name" onChange={this.handleChange} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="quantity" sm={2}>Quantity</Label>
            <Col sm={5}>
              <Input value={this.state.quantity} type="text" name="quantity" id="quantity" placeholder="Type quantity value" onChange={this.handleChange} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="price" sm={2}>Item Price</Label>
            <Col sm={10}>
              <Input value={this.state.price} type="text" name="price" id="price" placeholder="Type item price" onChange={this.handleChange} />
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col className="buttonForm">
              <Button color="primary" onClick={ this.addToList }>Add</Button>
            </Col>
          </FormGroup>
        </Form>
        <Footer />
      </div>
    );
  }
}

export default FormPage;
