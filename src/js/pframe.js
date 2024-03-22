const plugins = [
  {
    name: "Eruda",
    body: "An inspect element menu, in your browser even when its blocked!",
    image: "/assets/images/other/eruda.png",
    link: "erudaPlugin();",
    type: "Active Plugin"
  }
];

window.addEventListener("load", async function () {
  const searchField = document.getElementById("searchField");
  const searchButton = document.getElementById("searchButton");
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
  const pluginView = () => {
    plugins.map((pluginData) => {
      const pluginListing = document.createElement("li");
      pluginListing.innerHTML = `
      <a onclick=${pluginData.link} class="block px-4 py-2 hover:bg-white text-gray-700 ">${pluginData.name}</a>
      `;

      const pluginDropdown = document.getElementById("dropdowns");
      pluginDropdown.appendChild(pluginListing);
    });
  };
  pluginView();

  searchButton.addEventListener("click", function () {
    console.log("search click");
    const url = search(searchField.value, "lmao");
    location.href = "/pframe.html?frame=" + url;
  });

  searchField.onkeydown = function (e) {
    if (e.keyCode == 13) {
      const url = search(searchField.value, "lmao");
      location.href = "/pframe.html?frame=" + url;
    }
  };
});

function erudaPlugin() {}
