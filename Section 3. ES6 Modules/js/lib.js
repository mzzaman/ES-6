// export default function display(message) {
//     const el = document.createElement("div");
//     el.innerText = message;
//     document.body.appendChild(el);
//   }

export function display(message) {
  const el = document.createElement("div");
  el.innerText = message;
  document.body.appendChild(el);
}

export function showName(name) {
  const el = document.createElement("div");
  el.innerText = `Hello ${name}`;
  document.body.appendChild(el);
}

// export { display };
