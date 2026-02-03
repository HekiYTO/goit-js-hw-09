const formData = {
    email: "",
    message: ""
}

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";

document.addEventListener("DOMContentLoaded", () => {
const savedData = localStorage.getItem(STORAGE_KEY);

if(savedData) {
    const parseData = JSON.parse(savedData)

    formData.email = parseData.email
    formData.message = parseData.message

    form.elements.email.value = formData.email || "";
    form.elements.message.value = formData.message || "";

}})

document.addEventListener('input', (event) => {
    const {name, value} = event.target;
    formData[name] = value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
})

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    if(!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
    }

    console.log(formData);

    localStorage.removeItem(STORAGE_KEY);
    formData.email = "";
    formData.message = "";
    form.reset();
})