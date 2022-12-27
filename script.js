let create = (element) => document.createElement(`${element}`);
// The Header

let header = create("haeder");
header.className = "header";

let logo = create("p");
logo.className = "logo";
logo.appendChild(document.createTextNode("Mohammed"));

let ul = create("ul");
ul.className = "links";

let lis = ["Home", "About", "Service", "Contact"];

for(i = 0; i < lis.length; i++) {
    let link = create("li");    
    link.id = `link-${i + 1}`;
    link.appendChild(document.createTextNode(lis[i]));
    link.style.cssText = "font-size: 15px; color: #777; padding: 0; cursor: pointer";
    ul.appendChild(link);
}

header.appendChild(logo);
header.appendChild(ul);
document.body.appendChild(header);

// The Container

let container = create("section");

for(let i = 1; i <= 15; i++) {
    let product = create("div");
    product.className = "product";
    let number = create("p");
    number.appendChild(document.createTextNode(i));
    product.appendChild(number);
    let productName = create("span");
    productName.appendChild(document.createTextNode("Product"));
    product.appendChild(productName);
    container.appendChild(product);
    product.style.cssText = "padding: 15px; background-color: #fff; text-align: center; border-radius: 6px";
    number.style.margin = "0 0 15px";
}
document.body.appendChild(container);

// The Footer

let text = create("p");
text.appendChild(document.createTextNode("Copyright 2022"));

let footer = create("footer");
footer.className = "footer";
footer.appendChild(text);

document.body.appendChild(footer);

// Style

document.body.style.cssText = "margin: 0px; font-family: Arial, Helvetica, sans-serif; height: 100vh"
header.style.cssText = "padding: 10px; display: flex; justify-content: space-between; align-items: center";
logo.style.cssText = "color: #22aa6f; font-size: 25px; font-weight: bold; margin: 0"
ul.style.cssText = "margin: 0; padding: 0; display: flex; justify-content: space-between; align-items: center; list-style-type: none; gap: 25px"
container.style.cssText = "display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 25px; background-color: #ececec; padding: 10px";
footer.style.cssText = "padding: 10px 0; background-color: #23a96e; color: #fff; text-align: center";
text.style.cssText = "margin: 0";