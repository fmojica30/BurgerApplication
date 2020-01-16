import React, { Component } from 'react';
import axios from '../../../axios-order';

import Button from '../../../Components/UI/Button/Button';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import classes from './ContactData.module.css';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false,

  }

  orderHandler = (event) => {
    event.preventDefault();
    console.log(this.props.ingredients);
    // alert('You Continue');
    this.setState({loading: true});
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        name: 'Max Scharz',
        address: {
          street: 'Test St 1',
          zipCode: '234556',
          country: 'USA',
        },
        email: 'test@gmail.com'
      },
      deliveryMethod: 'fastest'
    }
    console.log(order);
    axios.post('/orders.json', order)
      .then(response => {
        // console.log(response);
        this.setState({
          loading: false
        });
        this.props.history.push('/');
      })
      .catch(error => {
        // console.log(error);
        this.setState({
          loading: false
        })
      });
  };

  render() {
    let form = (
      <form>
        <input type="text" name="name" placeholder="Your name" />
        <input type="text" name="email" placeholder="Your Mail" />
        <input type="text" name="street" placeholder="Your street" />
        <input type="text" name="postal" placeholder="Your postal" />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />
    }
    return(
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  };
};

export default ContactData;