function search(input, template) {
  try {
    template = "https://www.google.com/search?q=%s";
    return new URL(input).toString();
  } catch (err) {}

  try {
    const url = new URL(`http://${input}`);
    if (url.hostname.includes(".")) return url.toString();
  } catch (err) {}
  template = "https://www.google.com/search?q=%s";
  return template.replace("%s", input);
}

function urlify(input) {
  try {
    return new URL(input).toString();
  } catch (err) {}

  try {
    const url = new URL(`http://${input}`);
    if (url.hostname.includes(".")) return url.toString();
  } catch (err) {}
  return input;
}

const stockSW = "../sw.js";
const swAllowedHostnames = ["localhost", "127.0.0.1"];
  
  async function registerSW() {
    if (!navigator.serviceWorker) {
      if (
        location.protocol !== "https:" &&
        !swAllowedHostnames.includes(location.hostname)
      )
        throw new Error("Service workers cannot be registered without https.");
  
      throw new Error("Your browser doesn't support service workers.");
    }
  
    await navigator.serviceWorker.register(stockSW, {
      scope: __uv$config.prefix,
    });
  }



window.addEventListener("load", async function () {
  await registerSW();
  try {
    if (this.localStorage.title == null) {
      this.document.title = "Xen";
      this.document.getElementById("favicon").href = "https://google.com/favicon.ico";
    } else {
      this.document.title = this.localStorage.getItem("title");
      this.document.getElementById("favicon").href = this.localStorage.getItem("favicon");
    }
  } catch {
    console.log("No settings present.");
  }
});

window.addEventListener("load", function () {
  if (localStorage["installedApps"] == null) {
    this.localStorage.setItem("installedApps", JSON.stringify([]));
    this.window.location.reload();
  }
});

window.onkeydown = function (e) {
  if (localStorage.getItem("panicButton") != null) {
    if (e.key == localStorage.getItem("panicButton")) {
      window.location.href = localStorage.getItem("panicLink");
    }
  }
};
