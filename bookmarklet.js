javascript: { const es = document.getElementsByClassName("text-message"); const l = es.length; let r = ""; for (let i = 0; i < l; i++) { const e = es.item(i); r += `<span style="color: ${e.attributes["data-message-author-role"].nodeValue == "user" ? "#00f" : "#000"}">${e.innerHTML}</span>`; } const t = "text/html"; const b = new Blob([r], { type: t }); const d = [new ClipboardItem({ [t]: b })]; navigator.clipboard.write(d).then(_ => { console.log("succ") }, e => { alert(e) }); }