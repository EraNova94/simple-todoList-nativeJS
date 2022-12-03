const input = document.querySelector("#inp");
const button = document.querySelector("#btn");
const taskList = document.querySelector("#task-list");
const totalRes = document.querySelector("#task-total");
let i = 0;

button.addEventListener("click", e => {
  if (input.value === "") {
    return;
  }
  createTask(input.value);
  input.value = "";
});

function createTask(value) {
  i++;
  console.log(value);
  const li = document.createElement("li");
  const btn = document.createElement("button");

  li.className = "li";
  li.textContent = value;

  btn.textContent = "delete";
  li.append(btn);

  btn.addEventListener("click", e => {
    i--;
    totalRes.textContent = i;
    taskList.removeChild(li);
  });
  totalRes.textContent = i;
  taskList.appendChild(li);
  li.addEventListener("click", () => {
    li.classList.toggle("active");
  });
}
