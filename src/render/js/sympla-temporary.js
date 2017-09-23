t = [10, 6, 6];
root = document.getElementById("sympla-widget-169502");
cw = root.clientWidth - 95;
h = 258;
for (i = 0; i < 3; i++) {
    l = Math.floor(t[i] / (cw / 9)) + 1;
    h += 49;
    if (cw <= 154) h += 20;
    h += (l * 15) + ((l - 1) * 5);
}
console.log(h);
root.setAttribute("style", "max-width: 600px;");
ifrm = document.createElement("IFRAME");
ifrm.setAttribute("src", "https://www.sympla.com.br/tickets-grid-widget?eid=169502&lang=pt");
ifrm.setAttribute("id", "symplaw");
ifrm.setAttribute("frameborder", "0");
ifrm.setAttribute("vspace", "0");
ifrm.setAttribute("hspace", "0");
ifrm.setAttribute("marginheight", "0");
ifrm.setAttribute("marginwidth", "5");
if (root.getAttribute("height") == "auto" || root.getAttribute("height") == null) {
    ifrm.style.width = "100%";
    ifrm.style.height = h + "px";
} else {
    if (root.getAttribute("height") != null) {
        ifrm.style.width = "100%";
        ifrm.style.height = root.getAttribute("height") + "px";
    }
}
while (root.firstChild) {
    root.removeChild(root.firstChild);
}
root.appendChild(ifrm);
