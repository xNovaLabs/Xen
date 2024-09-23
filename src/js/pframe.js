const plugins = [
  {
    name: "Eruda",
    body: "An inspect element menu, in your browser even when its blocked!",
    image: "/assets/images/other/eruda.png",
    link: "erudaPlugin();",
    type: "Active Plugin"
  },
  {
    name: "DevConsole",
    body: "Custom Developer Console made by SnowLord7. Allows you to do multiple different actions with the console.",
    image: "/assets/images/other/devconsole.png",
    link: "devconsolePlugin();",
    type: "Active Plugin"
  },
  {
    name: "FPS Graph",
    body: "Allows you to view current FPS on the current website you are using through Xen",
    image: "/assets/images/other/devconsole.png",
    link: "javascript:(function()%7Bvar%20script%20%3D%20document.createElement('script')%3B%0Ascript.onload%20%3D%20function()%20%7B%0A%20%20%20%20var%20stats%20%3D%20new%20Stats()%3B%0A%20%20%20%20document.body.appendChild(stats.dom)%3B%0A%20%20%20%20requestAnimationFrame(function%20loop()%20%7B%0A%20%20%20%20%20%20%20%20stats.update()%3B%0A%20%20%20%20%20%20%20%20requestAnimationFrame(loop)%0A%20%20%20%20%7D)%3B%0A%7D%3B%0Ascript.src%20%3D%20'https%3A%2F%2Fmrdoob.github.io%2Fstats.js%2Fbuild%2Fstats.min.js'%3B%0Adocument.head.appendChild(script)%3B%7D)()%3B",
    type: "Active Plugin"
  },
  {
    name: "JS Injector",
    body: "Allows you to inject custom javascript code into the websites you are currently using through Xen. *BROKEN*",
    image: "/assets/images/other/devconsole.png",
    link: "injector();",
    type: "Active Plugin"
  },
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
      let nums = JSON.stringify(localStorage["installedApps"]);
      if (nums.includes(pluginData.name)) {
        const pluginListing = document.createElement("li");
        if (!pluginData.link.includes("javascript:")) {

        
        pluginListing.innerHTML = `
        <a onclick=${pluginData.link} class="block px-4 py-2 hover:bg-white text-gray-700 ">${pluginData.name}</a>
        `;
        } else {
          pluginListing.innerHTML = `
            <a href=${pluginData.link} class="block px-4 py-2 hover:bg-white text-gray-700 ">${pluginData.name}</a>
        `;
        }

        const pluginDropdown = document.getElementById("dropdowns");
        pluginDropdown.appendChild(pluginListing);
      }
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

function erudaPlugin() {
  const pframeWindow = pframe.contentWindow;
  const pframeDocument = pframe.contentDocument;

  if (pframeWindow.eruda?._isInit) {
    pframeWindow.eruda.destroy();
  } else {
    let script = pframeDocument.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/eruda";
    script.onload = function () {
      pframeWindow.eruda.init();
      pframeWindow.eruda.show();
    };
    pframeDocument.head.appendChild(script);
  }
}

function devconsolePlugin() {
  const pframeWindow = pframe.contentWindow;
  const pframeDocument = pframe.contentDocument;

  var x = pframeDocument.createElement("script");
  x.src = "https://cdn.jsdelivr.net/gh/SnowLord7/devconsole@master/main.js";
  x.onload = alert("Loaded Developer Console!");
  pframeDocument.head.appendChild(x);
}

function injector() {
  const pframeWindow = pframe.contentWindow;
  const pframeDocument = pframe.contentDocument;
  var s = pframeDocument.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/XMB5/ConsoleInject@0bb01e8f/inject.js";
  pframeDocument.body.appendChild(s);

}

function fullscreen() {
  pframe.contentDocument.documentElement.requestFullscreen();
}