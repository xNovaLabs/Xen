const cardData = [
    {
        "name": "Request an App",
        "body": "Submit a app request on this google form if you'd like the Xen team to add a app to our site. Alternatively, you can join our discord!",
        "image": "/assets/images/games/request.png",
        "link": "/frame.html?frame=https://forms.gle/PbJoVoWjCjv1oAASA"
    },
    {
        "name": "TikTok",
        "body": "TikTok, whose mainland Chinese counterpart is Douyin, is a short-form video hosting service owned by ByteDance. Use it now!",
        "image": "/assets/images/apps/tiktok.png",
        "link": "/pframe.html?frame=https:/tiktok.com"
    },
    {
        "name": "YouTube",
        "body": "YouTube is an American online video sharing and social media platform owned by Google. Accessible worldwide, launched 2005.",
        "image": "/assets/images/apps/yt.png",
        "link": "/pframe.html?frame=https:/youtube.com"
    },
    {
        "name": "Discord",
        "body": "Discord is an instant messaging and VoIP social platform which allows communication through voice calls, video calls, text messaging, and media and files..",
        "image": "/assets/images/apps/discord.png",
        "link": "/pframe.html?frame=https:/discord.com"
    },
    {
        "name": "Spotify",
        "body": "Spotify is a digital music service that gives you access to millions of songs. It allows you to listen to a multitude of songs for completely free. It operates using ads.",
        "image": "/assets/images/apps/spotify.png",
        "link": "/pframe.html?frame=https:/spotify.com"
    },
    {
        "name": "SFlix",
        "body": "SFlix is a Free Movies streaming site with zero ads. It lets you watch movies online without having to register or pay, with over 10000 movies and TV-Series.",
        "image": "/assets/images/apps/sflix.png",
        "link": "/pframe.html?frame=https:/sflix.to"
    },
    {
        "name": "Character.ai",
        "body": "Character.ai is a neural language model chatbot service that can generate human-like text responses and participate in contextual conversation. It was made by Google Engineers. ",
        "image": "/assets/images/apps/cai.png",
        "link": "/pframe.html?frame=https:/beta.character.ai"
    },
    {
        "name": "Twitch",
        "body": "Twitch is an American video live-streaming service that focuses on video game live streaming, including broadcasts of esports competitions, in addition to offering music ",
        "image": "/assets/images/apps/twitch.png",
        "link": "/pframe.html?frame=https:/twitch.tv"
    },
    {
        "name": "X",
        "body": "Twitter, Inc. was an American social media company based in San Francisco, California. The company operated the social networking service Twitter and is now called X. ",
        "image": "/assets/images/apps/x.png",
        "link": "/pframe.html?frame=https:/x.com"
    },
    
    


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