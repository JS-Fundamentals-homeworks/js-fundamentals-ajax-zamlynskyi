// Отримуємо дані з API
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const usersList = document.querySelector(".usersList");
    users.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = user.name;
      usersList.appendChild(li);
    });
  })
  .catch((error) => {
    console.error("Error fetching users:", error);
  });
