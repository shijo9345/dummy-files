import React, { useState, useContext } from "react"; 

let context = React.createContext(null);  // creating a context

function Parent() {
	const [fName] = useState("Gerald");
	const [lName] = useState("Briyolan");
	return (
		<context.Provider value={{ fName, lName }}>
			<div>This is a Parent component</div>
			<br />
			<ChildA />
		</context.Provider>
	);
}

function ChildA() {
	return (
		<>
			This is ChildA Component.
			<br />
			<ChildB />
		</>
	);
}

function ChildB() {
	return (
		<>
			This is ChildB Component.
			<br />
			<ChildC />
		</>
	);
}

function ChildC() {
	const { fName, lName } = useContext(context);
	return (
		<>
			This is ChildC component.
			<br />
			<h3> Data from Parent component is as follows:</h3>
			<h4>{fName}</h4>
			<h4>{lName}</h4>
		</>
	);
}

export default Parent;
