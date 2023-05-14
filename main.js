// Header
let header = document.createElement("header");
header.className = "website-head";
header.setAttribute("title", "heading");
header.style.cssText =
  "display : flex; justify-content: space-between;padding:20px;background-color:rgb(255,255,255),aline-content:center";

let elzero = document.createElement("div");
elzero.textContent = "Murad";
elzero.className = "logo";
elzero.style.cssText =
  "font-weight:bold;color:rgb(35, 169, 110);font-size:26px;";

let list = document.createElement("ul");
list.className = "menu";
list.style.cssText = "padding:5px;margin:0px;display:flex;list-style:none";

let lchildone = document.createElement("li");
lchildone.textContent = "Home";
lchildone.style.cssText = "margin-left:5px;margin-right:5px";
list.appendChild(lchildone);

let lchildtwo = document.createElement("li");
lchildtwo.textContent = "About";
lchildtwo.style.cssText = "margin-left:5px;margin-right:5px";
list.appendChild(lchildtwo);

let lchildthree = document.createElement("li");
lchildthree.textContent = "Service";
lchildthree.style.cssText = "margin-left:5px;margin-right:5px";
list.appendChild(lchildthree);

let lchildfour = document.createElement("li");
lchildfour.textContent = "Contact";
lchildfour.style.cssText = "margin-left:5px;margin-right:5px";
list.appendChild(lchildfour);

header.appendChild(elzero);
header.appendChild(list);
document.body.appendChild(header);
// body
let content = document.createElement("div");
content.className = "content";
content.style.cssText =
  "background-color:rgb(230,230,230);display: flex;padding:20px;flex-wrap:wrap;justify-content:center;gap:20px;min-height:calc(100vh - 142px) box-sizing:border-box";

let product = document.createElement("div");
product.className = "product";
product.textContent = "product";
product.style.cssText =
  "padding :9px;background-color:rgb(255,255,255);border:1px solid rgb(221,221,221);width:calc((100% - 40px)/3);box-sizing:border-box;text-align:center;color:rgb(136,136,136);border-radius:6px;";

let span = document.createElement("span");
span.textContent = "1";
span.style.cssText =
  "font-size:40px;color:black;font-weight:normal;display:block;margin-bottom:10px";
product.prepend(span);
content.append(product);
document.body.append(content);

for (let i = 2; i <= 15; i++) {
  let cloned = product.cloneNode(true);

  product.before(cloned);
  span.textContent = `${i}`;
  product.prepend(span);
}

//footer

let footer = document.createElement("footer");
footer.className = "footer";
footer.style.cssText =
  "background-color:rgb(35,169,110);font-size:26px;text-align:center;padding:20px;color:rgb(255,255,255);";
footer.textContent = "copyright 2023";
document.body.append(footer);
