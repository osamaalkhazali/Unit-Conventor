let select = document.querySelector("select")
let input = document.querySelector("#cal")
let result = document.querySelector(".result")

input.placeholder = "Weight on Kg"

select.oninput = function () {
    if (select.value == "kg") {
        input.placeholder = "Weight on Kg"
        result.innerHTML = "Your result will be here"
        input.value = ""
    } else if (select.value == "lb") {
        input.placeholder = "Weight on lb"
        result.innerHTML = "Your result will be here"
        input.value = ""
    }  
}

input.oninput = function () {
    if (select.value == "kg") {
        result.innerHTML=""
        let p = document.createElement("p")
        let spankg = document.createElement("span")
        spankg.textContent = input.value
        let spanlb = document.createElement("span")
        spanlb.textContent = (input.value * 2.2).toFixed(4)
        p.appendChild(spankg)
        p.appendChild(document.createTextNode(" Kg is equal to "))
        p.appendChild(spanlb)
        p.appendChild(document.createTextNode(" Lb"))
        result.appendChild(p)

    } else if (select.value == "lb") {
        result.innerHTML=""
        let p = document.createElement("p")
        let spankg = document.createElement("span")
        spankg.textContent = (input.value / 2.2).toFixed(4)
        let spanlb = document.createElement("span")
        spanlb.textContent = input.value 
        p.appendChild(spanlb)
        p.appendChild(document.createTextNode(" Lb is equal to "))
        p.appendChild(spankg)
        p.appendChild(document.createTextNode(" Kg"))
        result.appendChild(p)
    }
}
