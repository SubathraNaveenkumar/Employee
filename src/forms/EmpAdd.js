import React, { useState } from 'react'

const EmpAdd = props => {
	
	const initialEmployState = { id: null, employee_name: '', employee_salary:'', employee_age:'' }

	const [ user, setUser ] = useState(initialEmployState)

	const handleInputChange = event => {
		const { name, value } = event.target
		setUser({ ...user, [name]: value })
	}


	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.employee_name || !user.employee_salary || !user.employee_age ) return

				props.addEmply(user)
				setUser(initialEmployState)
			}}
		>
			<label>Employee Id</label>
			<input type="text" name="id"  value={user.id} onChange={handleInputChange} />
			<label className="error">Id should be unique</label>

			<label>Employee Name</label>
			<input type="text" name="employee_name"  value={user.employee_name} onChange={handleInputChange} />
			<label className="error">Name Required</label>

			<label>Employee Salary</label>
			<input type="text" name="employee_salary" value={user.employee_salary} onChange={handleInputChange} />
			<label className="error">Salary should be number</label>

			<label>Employee Age</label>
			<input type="text" name="employee_age"  value={user.employee_age} onChange={handleInputChange} />
			<label className="error">Age should be number</label>

			<button>Create</button>
		</form>
	)
}

export default EmpAdd
