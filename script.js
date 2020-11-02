const list = document.getElementById("list")
const entry = document.getElementById("todo")
const entrylabel = document.getElementById("textlabel")
const submit = document.getElementById("submit")
const classcheck = document.getElementsByClassName("column")

let shouldEnter = true

let arrayList = []


const checkErrors = () => {
	if (entry.value.length < 3) {
	shouldEnter = false
	entrylabel.innerHTML = "Please enter."
	} else {
	shouldEnter = true
	entrylabel.innerHTML = ""
	}

	arrayList.forEach((item) => {
	if (entry.value == item) {
		shouldEnter = false
		entrylabel.innerHTML = "Please enter different characters."
	}
	})
}

const addToList = (event) => {
	event.preventDefault()
	checkErrors()
	if (shouldEnter) {
		arrayList.push(entry.value);
		printList();
		entrylabel.innerHTML = "";
	 }
	 entry.value = "";
	 addToLS()
}

const printList = () => {
let listItem = `<li class="is-flex is-size-6" onclick="openDrawer(this)">
        <blockquote>${entry.value}</blockquote>
        <span class="has-background-danger is-uppercase is-size-7 has-text-white" style='cursorointer' onclick="removeItem(this, '${entry.value}')">
           <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 26 26" width="16px" height="16px"><path d="M 11 -0.03125 C 10.164063 -0.03125 9.34375 0.132813 8.75 0.71875 C 8.15625 1.304688 7.96875 2.136719 7.96875 3 L 4 3 C 3.449219 3 3 3.449219 3 4 L 2 4 L 2 6 L 24 6 L 24 4 L 23 4 C 23 3.449219 22.550781 3 22 3 L 18.03125 3 C 18.03125 2.136719 17.84375 1.304688 17.25 0.71875 C 16.65625 0.132813 15.835938 -0.03125 15 -0.03125 Z M 11 2.03125 L 15 2.03125 C 15.546875 2.03125 15.71875 2.160156 15.78125 2.21875 C 15.84375 2.277344 15.96875 2.441406 15.96875 3 L 10.03125 3 C 10.03125 2.441406 10.15625 2.277344 10.21875 2.21875 C 10.28125 2.160156 10.453125 2.03125 11 2.03125 Z M 4 7 L 4 23 C 4 24.652344 5.347656 26 7 26 L 19 26 C 20.652344 26 22 24.652344 22 23 L 22 7 Z M 8 10 L 10 10 L 10 22 L 8 22 Z M 12 10 L 14 10 L 14 22 L 12 22 Z M 16 10 L 18 10 L 18 22 L 16 22 Z"/></svg>
        </span>
        </li>`
list.insertAdjacentHTML("beforeend", listItem)

}

const printListAtStart = () => {
	arrayList.forEach(function(item){
	let listItem = `<li class="is-flex is-size-6" onclick="openDrawer(this)">
			<blockquote>${item}</blockquote>
			<span class="has-background-danger is-uppercase is-size-7 has-text-white" style='cursorointer' onclick="removeItem(this, '${item}')">
			<svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 26 26" width="16px" height="16px"><path d="M 11 -0.03125 C 10.164063 -0.03125 9.34375 0.132813 8.75 0.71875 C 8.15625 1.304688 7.96875 2.136719 7.96875 3 L 4 3 C 3.449219 3 3 3.449219 3 4 L 2 4 L 2 6 L 24 6 L 24 4 L 23 4 C 23 3.449219 22.550781 3 22 3 L 18.03125 3 C 18.03125 2.136719 17.84375 1.304688 17.25 0.71875 C 16.65625 0.132813 15.835938 -0.03125 15 -0.03125 Z M 11 2.03125 L 15 2.03125 C 15.546875 2.03125 15.71875 2.160156 15.78125 2.21875 C 15.84375 2.277344 15.96875 2.441406 15.96875 3 L 10.03125 3 C 10.03125 2.441406 10.15625 2.277344 10.21875 2.21875 C 10.28125 2.160156 10.453125 2.03125 11 2.03125 Z M 4 7 L 4 23 C 4 24.652344 5.347656 26 7 26 L 19 26 C 20.652344 26 22 24.652344 22 23 L 22 7 Z M 8 10 L 10 10 L 10 22 L 8 22 Z M 12 10 L 14 10 L 14 22 L 12 22 Z M 16 10 L 18 10 L 18 22 L 16 22 Z"/></svg>
			</span>
			</li>`
	list.insertAdjacentHTML("beforeend", listItem)
})
}

const removeItem = (item, listtext) => {
  console.log(item.parentNode)
	let result = arrayList.filter((it) => it != listtext)
   arrayList = result
   addToLS()
	item.parentNode.remove()
}

const openDrawer = (el) => {
	el.classList.toggle("active")
}

const addToLS = () => {
	localStorage.setItem("list", JSON.stringify(arrayList))
	console.log(localStorage.getItem("list"))
}

const getFromLS = () => {
	let tempArray = localStorage.getItem("list")
   tempArray ? (arrayList = JSON.parse(tempArray)) + printListAtStart() : null
  
}

// localStorage.getItem("list") ? console.log(true) : console.log(false);
getFromLS()



let demoText = document.getElementById("demoText")

const demoPrint = () => {
	let demoText = (50 * 60)
	console.log(demoText)
}

let carbox = document.getElementById('carbox')

var car = {
	name : "Tesla",
	model : "X",
	color : "Blue",
}

const carDetails = () => {
	let dfd = `The car name is ` + car.name
	console.log(dfd)
}
