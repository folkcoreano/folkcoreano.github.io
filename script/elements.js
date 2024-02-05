const class_add = (el, list) => {
  switch (typeof list) {
    case "object": {
      for (const name of list) {
        el.classList.add(name);
      }
      break;
    }
    case "string": {
      el.classList.add(list);
      break;
    }
  }
};

const child_add = (el, list) => {
  if ("length" in list) {
    for (const child of list) {
      el.appendChild(child);
    }
  } else {
    el.appendChild(list);
  }
};

const div = (textContent, className = null, childNode = null) => {
  const e = document.createElement("div");
  if (textContent) e.textContent = textContent;
  if (className) class_add(e, className);
  if (childNode) child_add(e, childNode);
  return e;
};

const span = (textContent, className = null, childNode = null) => {
  const e = document.createElement("span");
  if (textContent) e.textContent = textContent;
  if (className) class_add(e, className);
  if (childNode) child_add(e, childNode);
  return e;
};

const a = (textContent, href, target, className = null, childNode = null) => {
  const e = document.createElement("a");
  if (textContent) e.textContent = textContent;
  if (href) e.href = href;
  if (target) e.target = target;
  if (className) class_add(e, className);
  if (childNode) child_add(e, childNode);
  return e;
};

const img = (src, alt, className = null, objectPosition = null) => {
  const e = document.createElement("img");
  if (src) e.src = src;
  if (alt) e.alt = alt;
  if (objectPosition) e.style.objectPosition = objectPosition;
  if (className) class_add(e, className);
  return e;
};

export { a, div, img, span };
