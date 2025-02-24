const userNameInput = document.getElementById("userNameInput");
const getUserButton = document.getElementById("getUserButton");
const userCity = document.getElementById("userCity");

// Обробник кліку на кнопку
getUserButton.addEventListener("click", () => {
  const userName = userNameInput.value.trim();

  if (userName) {
    userCity.textContent = "Завантаження...";

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        const user = data.find(
          (user) => user.name.toLowerCase() === userName.toLowerCase()
        );

        if (user) {
          userCity.textContent = `${user.address.city}`;
        } else {
          userCity.textContent = "Користувача не знайдено!";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        userCity.textContent = "Сталася помилка при запиті.";
      });
  } else {
    userCity.textContent = "Будь ласка, введіть ім'я користувача.";
  }
});
