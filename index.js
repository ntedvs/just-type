let count = 0

;(
  await fetch("http://metaphorpsum.com/paragraphs/1/3").then((res) =>
    res.text()
  )
)
  .split("")
  .forEach((char, i) => {
    const span = document.createElement("span")
    span.id = i
    span.appendChild(document.createTextNode(char))

    document.getElementById("container").appendChild(span)
  })

document.getElementById(0).classList.add("cursor")

document.addEventListener("keydown", (e) => {
  const currentChar = document.getElementById(count)

  if (e.altKey || e.ctrlKey || e.metaKey) return

  if (e.key.length === 1 && currentChar) {
    const nextChar = document.getElementById(count + 1)

    currentChar.innerHTML === e.key
      ? (currentChar.className = "correct")
      : (currentChar.className = "incorrect")

    if (nextChar) {
      nextChar.classList.add("cursor")
    }

    count++
  } else if (e.key === "Backspace") {
    const prevChar = document.getElementById(count - 1)

    if (prevChar) {
      prevChar.className = "cursor"

      if (currentChar) {
        currentChar.classList.remove("cursor")
      }

      count--
    }
  }
})
