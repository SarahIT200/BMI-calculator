const result = document.querySelector("#display")
const inputHeight = document.querySelector("#height")
const inputWeight = document.querySelector("#weight")
const button = document.querySelector("button")
const categoreis = document.querySelector(".categoreis")

button.addEventListener("click", function () {
    bmiHeight = Number((inputHeight.value / 100) ** 2)
    console.log(bmiHeight)
    bmiWeight = Number(inputWeight.value)
    bmi = bmiWeight / bmiHeight
    console.log(bmi)
    result.value = bmi.toFixed(1)
    console.log(result.value)
    weight = Number(result.value)
    console.log(weight)
    if (weight <= 18.5) {
        categoreis.innerHTML = `   <div class="active">
        <h2>underweight</h2>
        <h3>less than 18.5</h3>
    </div>
`
    } else if (weight > 18.5 && weight <= 24.9) {
        categoreis.innerHTML = `<div class="active">
            <h2>normal weight</h2>
            <h3>between 18.5-24.9</h3>
        </div>`
    } else if (weight >= 25 && weight <= 29.9) {
        categoreis.innerHTML = `<div class="active">
        <h2>overweight</h2>
        <h3>between 25-29.9</h3>
    </div>`
    } else {
        categoreis.innerHTML = ` <div class="active">
        <h2>obesity</h2>
        <h3>30 or greater</h3>
    </div>`
    }
})


