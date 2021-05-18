import React, { Component } from 'react';

class Example extends Component {
	state = {
		people: [],
		filterPeople: []
	}

	async componentDidMount() {
		const url = "https://randomuser.me/api/?results=15";
		const response = await fetch(url);
		if (response.status == 200 ) {
			const data = await response.json()
			this.setState({people: data.results, filterPeople: data.results})
			console.log(data.results.length)
		}

		else {
			console.log("requestfail")
		}
	}

	filterForm(e){
		const filter = e.target.value.toLowerCase()
		const filteredPeople = this.state.people.filter(p => p.name.first.toLowerCase().includes(filter))
		console.log(this, filteredPeople)
		this.setState({filterPeople:filteredPeople})
		}

		
	render() {
		

return (
	<div><input onChange = {(e) => this.filterForm(e)} ></input>
	<button> Submit </button>
	<table className = "table" >
		<thead>
			<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>Phone Number</th>
					</tr>
				</thead>
				<tbody>
					{ this.state.filterPeople.map(randomUser => (
					<tr>
						<td>{randomUser.name.first}</td>
						<td>{randomUser.name.last}</td>
						<td>{randomUser.name.email}</td>
						<td>{randomUser.name.phone}</td>
					</tr>
					))
				}
				</tbody>
			</table>
			</div>
		)
	}
}

			

export default Example