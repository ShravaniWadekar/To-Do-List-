//accessing input space bar and list-container where our lists comes when we write them in input field
let inputBox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");


//adding eventlistener "click" to button...and executing some function when we click to the button
//access the button and then add eventlistener
// Attach the event listener with an arrow function to execute some task when the button is clicked

let btn  = document.querySelector("button");
btn.addEventListener("click", () => {
    console.log("task is added");

    //agar jo input box humne banaya uska value = empty hoga tb ek alert msg ayega
    if(inputBox.value === '') {
        alert("Add Some Task To Your List")
    }

    //agar input box ka value humne kuch dala hoga tb...
    //element add krne ka do steps...yaha hum jo likh rahe hai vo as an list add karenge in the listcontainer...
    //1 = create the element
    //2 = phir use add karo i.e (insert element)
    else {
        let li = document.createElement("li")       //created element li
        li.innerHTML = inputBox.value;              //created element ka innerHTMl  = input box ka value hoga jo hume write kiya hai
                                                    //This sets the innerHTML of the newly created <li> element to the value that the user has entered in the input field.
        listContainer.appendChild(li);              //appendChild(li): The appendChild method is used to add a new child node 
                                                    //(in this case, the <li> element) to an existing parent node (the listContainer).
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)                        // This method places the <li> element at the end of the list container’s list of child elements.
    }       
    inputBox.value = "";                            //task add hone ke bad inpurtbox mei jo bhi value likha hai use empty kr do...
    saveData()
})
listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()

    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()

    }

},false)

function saveData () {
    localStorage.setItem("data", listContainer.innerHTML)
}
function showList () {
    listContainer.innerHTML = localStorage.getItem("data");
}
showList();
