const cardData = [
  {
    name: "TikTok",
    body: "TikTok, whose mainland Chinese counterpart is Douyin, is a short-form video hosting service owned by ByteDance. Use it now!",
    image: "/assets/images/apps/tiktok.png",
    link: "/pframe.html?frame=https:/tiktok.com",
    type: "App"
  },
  {
    name: "YouTube",
    body: "YouTube is an American online video sharing and social media platform owned by Google. Accessible worldwide, launched 2005.",
    image: "/assets/images/apps/yt.png",
    link: "/pframe.html?frame=https:/youtube.com",
    type: "App"
  },
  {
    name: "Discord",
    body: "Discord is an instant messaging and VoIP social platform which allows communication through voice calls, video calls, text messaging, and media and files..",
    image: "/assets/images/apps/discord.png",
    link: "/pframe.html?frame=https:/discord.com",
    type: "App"
  },
  {
    name: "Spotify",
    body: "Spotify is a digital music service that gives you access to millions of songs. It allows you to listen to a multitude of songs for completely free. It operates using ads.",
    image: "/assets/images/apps/spotify.png",
    link: "/pframe.html?frame=https:/spotify.com",
    type: "App"
  },
  {
    name: "SFlix",
    body: "SFlix is a Free Movies streaming site with zero ads. It lets you watch movies online without having to register or pay, with over 10000 movies and TV-Series.",
    image: "/assets/images/apps/sflix.png",
    link: "/pframe.html?frame=https:/sflix.to",
    type: "App"
  },
  {
    name: "Character.ai",
    body: "Character.ai is a neural language model chatbot service that can generate human-like text responses and participate in contextual conversation. It was made by Google Engineers. ",
    image: "/assets/images/apps/cai.png",
    link: "/pframe.html?frame=https:/beta.character.ai",
    type: "App"
  },
  {
    name: "Twitch",
    body: "Twitch is an American video live-streaming service that focuses on video game live streaming, including broadcasts of esports competitions, in addition to offering music ",
    image: "/assets/images/apps/twitch.png",
    link: "/pframe.html?frame=https:/twitch.tv",
    type: "App"
  },
  {
    name: "X",
    body: "Twitter, Inc. was an American social media company based in San Francisco, California. The company operated the social networking service Twitter and is now called X. ",
    image: "/assets/images/apps/x.png",
    link: "/pframe.html?frame=https:/x.com",
    type: "App"
  },
  {
    name: "Reddit",
    body: "Reddit is an American social news aggregation, content rating, and forum social network. Registered users submit content to the site such as links, text posts, videos, images, and much more. ",
    image: "/assets/images/apps/reddit.png",
    link: "/pframe.html?frame=https:/reddit.com",
    type: "App"
  },
  {
    name: "1v1.LOL",
    body: "A fast-paced online multiplayer game where players engage in intense one-on-one battles using various weapons and building tactics.",
    image: "/assets/images/games/1v1.png",
    link: "/pframe.html?frame=https://1v1.lol",
    type: "Game"
  },
  {
    name: "Minecraft",
    body: "A sandbox game where players explore, build, and survive in an open-world environment filled with infinite possibilities and creativity.",
    image: "/assets/images/games/minecraft.png",
    link: "/assets/games/eaglercraft",
    type: "Game"
  },
  {
    name: "Retro Bowl",
    body: "A American football game that challenges players to manage a team, call plays, and compete for championships ",
    image: "/assets/images/games/retrobowl.jpg",
    link: "/frame.html?frame=https://game316009.konggames.com/gamez/0031/6009/live/index.html",
    type: "Game"
  },
  {
    name: "Venge.io",
    body: "Venge is an objective-based first person shooter. On this fps game, every match is an intense competition!",
    image: "/assets/images/games/venge.png",
    link: "/pframe.html?frame=https://venge.io/",
    type: "Game"
  },
  {
    name: "Zombs Royale",
    body: "ZombsRoyale.io is a 2D battle royale video game developed by an American studio, End Game. It was released in 2018.",
    image: "/assets/images/games/zombsroyale.png",
    link: "/pframe.html?frame=https://zombsroyale.io/",
    type: "Game"
  },
  {
    name: "PixelWarfare",
    body: "Pixel Warfare is a free 3D first-person shooter multiplayer game with graphics inspired by Minecraft.",
    image: "/assets/images/games/pixelwarfare.png",
    link: "/pframe.html?frame=https://pixelwarfare.io/",
    type: "Game"
  },
  {
    name: "Adblocker",
    body: "This adblocker blocks most ads on most sites. This is a passive plugin. Always runs in the background while installed!",
    image: "/assets/images/other/adblocker.png",
    link: "/assets/plugins/adblock.txt",
    type: "Passive Plugin"
  }
];

const gameContainer = document.getElementById("gameContainer");

const gameMethods = () => {
  cardData.map((gameData) => {
    const gameListing = document.createElement("div");
    let nums = JSON.stringify(localStorage["installedApps"]);

    if (!nums.includes(gameData.name)) {
      gameListing.classList.add("card");
      gameListing.innerHTML = `
        <div class="h-full p-12 flex items-stretch">
        <div class="max-w-sm bg-gray-200 border border-gray-200 rounded-lg shadow">
        <a href="#">
            <img class="rounded-t-lg" src="${gameData.image}" alt="" />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 items-strech text-2xl font-bold tracking-tight text-gray-900 dark:text-gray">${gameData.name}</h5>
            </a>
            <div class="flex mt-2.5 mb-5">
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">${gameData.type}</span>
            </div>
            <p class="mb-3 font-normal text-gray flex items-stretch">${gameData.body}</p>
            <button onclick="installApp('${gameData.name}');" class="h-full inline-block items-end items-strech px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">
                Download ⬇️
            </button>
        </div>
        </div>
        </div>
        `;
    } else {
      gameListing.classList.add("card");
      gameListing.innerHTML = `
        <div class="h-full p-12 flex items-stretch">
        <div class="max-w-sm bg-gray-200 border border-gray-200 rounded-lg shadow">
        <a href="#">
            <img class="rounded-t-lg" src="${gameData.image}" alt="" />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 items-strech text-2xl font-bold tracking-tight text-gray-900 dark:text-gray">${gameData.name}</h5>
            </a>
            <div class="flex mt-2.5 mb-5">
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">${gameData.type}</span>
            </div>
            <p class="mb-3 font-normal text-gray flex items-stretch">${gameData.body}</p>
            <button onclick="uninstallApp('${gameData.name}');" class="h-full inline-block items-end items-strech px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">
                Uninstall ⬆️
            </button>
        </div>
        </div>
        </div>
        `;
    }
    gameContainer.appendChild(gameListing);
  });
};

let installedApps = [];

function installApp(gameName) {
  installedApps = JSON.parse(localStorage.getItem("installedApps"));

  installedApps.push(gameName);
  console.log(installedApps);
  let strins = JSON.stringify(installedApps);
  localStorage.setItem("installedApps", strins);
  installedApps = [];
  location.reload();
  return false;
}

function uninstallApp(gameName) {
  installedApps = JSON.parse(localStorage.getItem("installedApps"));
  installedApps = installedApps.filter((item) => item !== String(gameName));
  console.log(installedApps);
  let strins = JSON.stringify(installedApps);
  localStorage.setItem("installedApps", strins);
  installedApps = [];
  location.reload();
  return false;
}

gameMethods();
