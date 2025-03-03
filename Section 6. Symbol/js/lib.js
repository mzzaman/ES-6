export function display(message) {
  const el = document.createElement("div");
  el.innerText = message;
  document.body.appendChild(el);
}

export function ownerName(name) {
  const el = document.createElement("div");
  el.innerText = `Hello ${name}`;
  document.body.appendChild(el);
}
