const cardData = [
    {
        "name": "Request a Game",
        "body": "Submit a game request on this google form if you'd like the Xen team to add a game to our site. Alternatively, join our discord!",
        "image": "/assets/images/games/request.png",
        "link": "/frame.html?frame=https://forms.gle/nQYQEQR4aN8TSbST6"
    },
    {
        "name": "1v1.LOL",
        "body": "A fast-paced online multiplayer game where players engage in intense one-on-one battles using various weapons and building tactics.",
        "image": "/assets/images/games/1v1.png",
        "link": "/pframe.html?frame=https://1v1.lol"
    },
    {
        "name": "Minecraft",
        "body": "A sandbox game where players explore, build, and survive in an open-world environment filled with infinite possibilities and creativity.",
        "image": "/assets/images/games/minecraft.png",
        "link": "/assets/games/eaglercraft"
    },
    {
        "name": "Retro Bowl",
        "body": "A American football game that challenges players to manage a team, call plays, and compete for championships ",
        "image": "/assets/images/games/retrobowl.jpg",
        "link": "/frame.html?frame=https://game316009.konggames.com/gamez/0031/6009/live/index.html"
    },
    {
        "name": "Venge.io",
        "body": "Venge is an objective-based first person shooter. On this fps game, every match is an intense competition!",
        "image": "/assets/images/games/venge.png",
        "link": "/p/frame.html?frame=https://venge.io/"
    },
    {
        "name": "Zombs Royale",
        "body": "ZombsRoyale.io is a 2D battle royale video game developed by an American studio, End Game. It was released in 2018.",
        "image": "/assets/images/games/zombsroyale.png",
        "link": "/pframe.html?frame=https://zombsroyale.io/"
    }
    
]




const gameContainer = document.getElementById("gameContainer")

const gameMethods = ()=> {
    cardData.map((gameData) => {
        const gameListing = document.createElement('div');
        gameListing.classList.add('card');
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
            <p class="mb-3 font-normal text-gray flex items-stretch">${gameData.body}</p>
            <a href="${gameData.link}" class="h-full inline-block items-end items-strech px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">
                Launch 🚀
            </a>
        </div>
        </div>
        </div>
        `
        gameContainer.appendChild(gameListing);
    })
}

gameMethods()