import React, { Component } from "react";
import { Table } from "reactstrap";
import NewEmployeeModal from "./NewEmployeeModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal.js";

class EmployeeList extends Component {
  render() {
    const employees = this.props.employees;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Emp.ID</th>
            <th>Name</th>
            <th>Birth Date</th>
            <th>Gender</th>
            <th>Hire date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {!employees || employees.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            employees.map(employee => (
              <tr key={employee.pk}>
                <td>{employee.pk}</td>
                <td>{employee.first_name} {employee.last_name}</td>
                <td>{employee.birth_date}</td>
                {employee.gender === 'F' ? (
                <td>Female</td>) : (<td>Male</td>)
                }
                <td>{employee.hire_date}</td>
                <td align="center">
                  <NewEmployeeModal
                    create={false}
                    employee={employee}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={employee.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default EmployeeList;