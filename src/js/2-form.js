const STORAGE_KEY = "feedback-form-state";


let formData = {
  email: "",
  message: "",
};


const form = document.querySelector(".feedback-form");


function onInput(event) {
  formData[event.target.name] = event.target.value.trim(); // Очищаємо зайві пробіли
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    formData = JSON.parse(savedData);
    form.email.value = formData.email || "";
    form.message.value = formData.message || "";
  }
}


function onSubmit(event) {
  event.preventDefault();

 
  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  console.log("Form Data:", formData);

 
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData = { email: "", message: "" };
}


populateForm();


form.addEventListener("input", onInput);
form.addEventListener("submit", onSubmit);
