function onOff() {
  document
    .querySelector("#modal")
    .classList
    .toggle("hide")

  document
    .querySelector("body")
    .classList
    .toggle("hideScroll")

  document
    .querySelector("#modal")
    .classList
    .toggle("addScroll")
}

function checkFields(event) {

	const valuesToCheck = [
		"title",
		"image",
		"category",
		"description",
		"link",
	]

	const isEmpty = valuesToCheck.find(function (value) {
		
		const checkIfIsString = typeof event.target[value].value === 'string'
		const checkIfIsEmpty = !event.target[value].value.trim() // .trim() vai cortar os excessos de espaços;;;
		

		if ( checkIfIsString && checkIfIsEmpty ) {
			return true // retornará 'true' se for 'string' e vazio
		}
	})

	if (isEmpty) {
		event.preventDefault()
		alert("Por favor, preencha todos os campos!")
	}

}