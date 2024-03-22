window.addEventListener("load", async function () {
  const urlParams = new URLSearchParams(window.location.search);
  const frame = urlParams.get("frame");
  const pframe = document.getElementById("pframe");
  const pframeWindow = pframe.contentWindow;
  const pframeDocument = pframe.contentDocument;
  console.log(frame);
  if (frame != null) {
    this.localStorage.setItem("pframeSrc", frame);
    this.window.location.href = "/pframe.html";
  } else {
    pframe.src = __uv$config.prefix + __uv$config.encodeUrl(this.localStorage.getItem("pframeSrc"));
    let nums = JSON.stringify(localStorage["installedApps"]);
    if (nums.includes("Adblocker")) {
      let script = pframeDocument.createElement("script");
      script.src = "/assets/plugins/adblock.js";
      pframeDocument.body.appendChild(script);
    }
  }
});
