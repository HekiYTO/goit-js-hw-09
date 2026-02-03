const formData = {
    email: "",
    message: ""
};

document.addEventListener("DOMContentLoaded", () => {

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";

const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
    const parseData = JSON.parse(savedData);

    formData.email = parseData.email || "";
    formData.message = parseData.message || "";

    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}

form.addEventListener('input', (event) => {
    const { name, value } = event.target;
    if (!name) return;

    formData[name] = value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }

    console.log(formData);

    localStorage.removeItem(STORAGE_KEY);
    form.reset();
});

});