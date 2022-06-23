(() => {
  const birthdayElement = document.getElementById("bday");
  const today = new Date();
  const birthday = new Date("May 28, 1997 04:13:57");
  const age = today.getFullYear() - birthday.getFullYear();

  birthdayElement.innerHTML = age.toString();
})();
