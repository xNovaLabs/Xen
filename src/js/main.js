function search(input, template) {
    try {
        template = "https://www.google.com/search?q=%s";
      return new URL(input).toString();
    } catch (err) {
    }

    try {
      const url = new URL(`http://${input}`);
      if (url.hostname.includes(".")) return url.toString();
    } catch (err) {
    }
    template = "https://www.google.com/search?q=%s";
    return template.replace("%s", encodeURIComponent(input));
  }

function urlify(input) {
    try {
    return new URL(input).toString();
  } catch (err) {
  }

  try {
    const url = new URL(`http://${input}`);
    if (url.hostname.includes(".")) return url.toString();
  } catch (err) {
  }
  return encodeURIComponent(input);
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


  window.addEventListener('load', async function() {
    await registerSW();
    try {
      this.document.title = this.localStorage.getItem("title");
      this.document.getElementById("favicon").href = this.localStorage.getItem("favicon")
    } catch {
      console.log("No settings present.")
    }

})  

