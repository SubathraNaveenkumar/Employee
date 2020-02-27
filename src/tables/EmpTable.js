import React from 'react'
import { IoMdTrash, IoMdCreate } from 'react-icons/io';

const EmpTable = props => (
    <table className="table_height">
      <thead>
        <tr>
          <th>Emp_Id</th>
          <th>Emp_Name</th>
          <th>Emp_Salary</th>
          <th>Emp_Age</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
         {props.employes.length > 0 ? (
          props.employes.map((user,ind) => (
            <tr key={ind}>
              <td>{user.id}</td>
              <td>{user.employee_name}</td>
              <td>{user.employee_salary}</td>
              <td>{user.employee_age}</td>
              <td>
                <button
                      onClick={() => {
                      props.editRow(user)
                    }}
                    className="button muted-button">
                <IoMdCreate />
                </button>

                <button
                    onClick={() => props.deleteEmploy(user.id)}
                    className="button muted-button">
                    <IoMdTrash />
                </button>
               </td>
              </tr>
              ))
              ) : (
            <tr>
                <td colSpan={5}>No employes</td>
            </tr>
            )}
        </tbody>
      </table>
)

export default EmpTable
