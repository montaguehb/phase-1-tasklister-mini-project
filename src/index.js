document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("#create-task-form").addEventListener("submit", (event) => {
    event.preventDefault()
    addFormInfo(event.target["new-task-description"].value)
  })
});

const addFormInfo = (text) => {
  let li = document.createElement('li');
  li.textContent = text;
  document.querySelector('#tasks').appendChild(li);
}
