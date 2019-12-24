(selector => {
  let item = 0;

  setInterval(() => {
    if (Math.random() < 0.5) return;

    let child = document.createElement("li");

    child.innerHTML = item;

    document.querySelector(selector).appendChild(child);

    child.addEventListener("click", event => {
      event.target.remove();
    });

    item++;
  }, 1000);
})("ul");
