const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

function createTaskItem(text) {
  const li = document.createElement("li");
  li.className = "item";

  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = text;

  const delBtn = document.createElement("button");
  delBtn.type = "button";
  delBtn.className = "btn btn-danger";
  delBtn.textContent = "Delete";

  delBtn.addEventListener("click", () => {
    li.classList.add("is-removing");
    li.addEventListener(
      "animationend",
      () => {
        li.remove();
      },
      { once: true }
    );
  });

  li.append(span, delBtn);
  return li;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();

  if (!text) {
    alert("Please enter a task.");
    input.focus();
    return;
  }

  list.prepend(createTaskItem(text));
  input.value = "";
  input.focus();
});
