function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const taskList = document.getElementById("taskList");

  // Create list item
  const li = document.createElement("li");

  // Create text node
  const textNode = document.createElement("span");
  textNode.textContent = taskText;

  // Create time span
  const timeSpan = document.createElement("span");
  timeSpan.className = "time";

  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  timeSpan.textContent = time;

  // Create Done button
  const doneButton = document.createElement("button");
  doneButton.textContent = "Done";
  doneButton.className = "done-btn";

  // When clicked, remove the task
  doneButton.onclick = function() {
    li.remove();
  };

  // Append elements to li
  li.appendChild(textNode);
  li.appendChild(timeSpan);
  li.appendChild(doneButton);

  // Add to the list
  taskList.appendChild(li);

  // Clear input
  input.value = "";
}

