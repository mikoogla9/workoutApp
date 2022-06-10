import React from "react"
import "./ExpenseItem.css"

function ExpenseItem() {
	return (
		<div className='todo--main'>
			<div className='todo'>
				<div className='header'>
					<h1>ToDo List</h1>
					<input
						type='text'
						className='todo--input'
						placeholder='Wpisz treść zadania...'
					/>

					<button className='btn-add'>Add</button>
				</div>
			</div>
		</div>
	)
}

export default ExpenseItem
