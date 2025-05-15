function toggleTheme() {
  const html = document.documentElement
  const image = document.querySelector("#profile img")

  //html.classList.toggle("light")
  if (html.classList.contains("light")) {
    html.classList.remove("light")
    image.setAttribute("src", "./assets/avatar.png")
    image.setAttribute("alt", "foto-padrão-dark")
  } else {
    html.classList.add("light")
    image.setAttribute("src", "./assets/avatar-light.png")
    image.setAttribute("alt", "foto-padrão-light")
  }
}
