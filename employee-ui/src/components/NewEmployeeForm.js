import React from "react";
import { Button, Form, FormGroup, Input, Label, Alert } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

var DatePicker = require("reactstrap-date-picker");


class NewEmployeeForm extends React.Component {
  state = {
    pk: 0,
    first_name: "",
    last_name: "",
    birth_date: null,
    gender: "",
    hire_date: null,
    error:false,
  };

  componentDidMount() {
    if (this.props.employee) {
      const { pk, first_name, last_name, birth_date, gender, hire_date } = this.props.employee;
      this.setState({ pk, first_name, last_name, birth_date, hire_date, gender });
    }
  }

  onChange = (e,date=null) => {
    date ? 
      date.value && this.setState({[date.name]:date.value.slice(0,10)})
      : 
      this.setState({ [e.target.name]: e.target.value })
  };

  createEmployee = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    }).catch(error => this.setState({error:true}));
  };

  editEmployee = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    }).catch(error => this.setState({error:true}));
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <div>
      {this.state.error &&
      <Alert color="danger">
        All Feilds are required!
      </Alert>
      }
      <Form onSubmit={this.props.employee ? this.editEmployee : this.createEmployee}>
        <FormGroup>
          <Label for="first_name">First name:</Label>
          <Input
            type="text"
            name="first_name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.first_name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="last_name">Last name:</Label>
          <Input
            type="text"
            name="last_name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.last_name)}
          />
        </FormGroup>
        <FormGroup>
        <Label>Birth Date:</Label>
        <DatePicker 
          name = "birth_date" 
          id = "birth_date-datepicker" 
          value={this.defaultIfEmpty(this.state.birth_date)}
          onChange= {(e) => this.onChange(e, {name:"birth_date",value:e})} 
        />            
      </FormGroup>
        <FormGroup tag="fieldset">
        <Label for="gender">Gender:</Label>
        <FormGroup check>
          <Label check>
            <Input 
              type="radio" 
              name="gender" 
              value="M" 
              onChange={this.onChange}
              checked = {this.state.gender === "M"} 
            />{' '}
            Male
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input 
              type="radio" 
              name="gender" 
              value="F" 
              onChange={this.onChange}
              checked = {this.state.gender === "F"}
            />{' '}
            Female
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup>
        <Label>Joining Date:</Label>
        <DatePicker 
          name = "hire_date" 
          id = "hire_date-datepicker" 
          value={this.defaultIfEmpty(this.state.hire_date)}
          onChange= {(e) => this.onChange(e, {name:"hire_date",value:e})} 
        />            
      </FormGroup>
      <Button>Send</Button>
      </Form>
      </div>
    );
  }
}

export default NewEmployeeForm;