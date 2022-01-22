validate=(a, b, ...args)=>{
	if(a === "" || b === "") {
		alert("Enter a value.")
		return false	
	}
	else if(isNaN(a) || isNaN(b)) {
		alert("Entered value must be a number.")
		return false
	}

	args.forEach((i) => {
		if(i === "division") {
			if(b == 0) {
				alert("The value of B cannot be Zero.")
				return false
			}
		}
	})
	return true
}


addition=()=>{
	let a = document.getElementById("valueOfA").value
	let b = document.getElementById("valueOfB").value
	if(!validate(a, b)){
		return false
	}
	let c = "<hr/><br/><h2>Result: "
	c += parseInt(a) + parseInt(b) + "</h2>"
	document.getElementById("result").innerHTML = c
	return true
}

substraction=()=>{
	let a = document.getElementById("valueOfA").value
	let b = document.getElementById("valueOfB").value
	if(!validate(a, b)){
		return false
	}
	let c = "<hr/><br/><h2>Result: "
	c += parseInt(a) - parseInt(b) + "</h2>"
	document.getElementById("result").innerHTML = c
	return true
}

multiplication=()=>{
	let a = document.getElementById("valueOfA").value
	let b = document.getElementById("valueOfB").value
	if(!validate(a, b)){
		return false
	}
	let c = "<hr/><br/><h2>Result: "
	c += parseInt(a) * parseInt(b) + "</h2>"
	document.getElementById("result").innerHTML = c
	return true
}

division=()=>{
	let a = document.getElementById("valueOfA").value
	let b = document.getElementById("valueOfB").value
	let type = "division"
	if(!validate(a, b, type)){
		return false
	}
	let c = "<hr/><br/><h2>Result: "
	c += parseInt(a) / parseInt(b) + "</h2>"
	document.getElementById("result").innerHTML = c
}
