const videos = [
    {
        title: "HTML Full Course for Beginners",
        channel: "Web Development Academy",
        category: "HTML",
        image: "https://i.ytimg.com/vi/pQN-pnXPaVg/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=pQN-pnXPaVg"
    },

    {
        title: "JavaScript Full Course",
        channel: "Programming Tutorials",
        category: "JavaScript",
        image: "https://i.ytimg.com/vi/PkZNo7MFNFg/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=PkZNo7MFNFg"
    },

    {
        title: "Python for Beginners",
        channel: "Programming with Python",
        category: "Python",
        image: "https://i.ytimg.com/vi/rfscVS0vtbw/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=rfscVS0vtbw"
    },

    {
        title: "Web Development Roadmap",
        channel: "Tech Learning",
        category: "Web Development",
        image: "https://i.ytimg.com/vi/zJSY8tbf_ys/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=zJSY8tbf_ys"
    },

    {
        title: "CSS Complete Tutorial",
        channel: "Frontend Academy",
        category: "CSS",
        image: "https://i.ytimg.com/vi/1Rs2ND1ryYc/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=1Rs2ND1ryYc"
    },

    {
        title: "React JS Tutorial",
        channel: "React Learning",
        category: "React",
        image: "https://i.ytimg.com/vi/SqcY0GlETPk/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=SqcY0GlETPk"
    }
];


function displayVideos(videoList) {

    const grid = document.getElementById("videoGrid");

    grid.innerHTML = "";

    if (videoList.length === 0) {

        grid.innerHTML = `
            <div class="no-results">
                <h3>No videos found</h3>
                <p>Try searching for HTML, JavaScript, Python or Web Development.</p>
            </div>
        `;

        return;
    }

    videoList.forEach(video => {

        const card = document.createElement("div");

        card.className = "video-card";

        card.innerHTML = `
            <img
                src="${video.image}"
                alt="${video.title}"
                class="thumbnail"
            >

            <div class="video-info">

                <h3>${video.title}</h3>

                <p>
                    ${video.channel}
                    <br>
                    ${video.category}
                </p>

                <a
                    href="${video.url}"
                    target="_blank"
                    class="watch-btn"
                >
                    Watch Video
                </a>

            </div>
        `;

        grid.appendChild(card);
    });
}


function searchVideos() {

    const searchText =
        document.getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    if (searchText === "") {

        document.getElementById("resultTitle").innerText =
            "Featured Videos";

        document.getElementById("resultMessage").innerText =
            "Please enter something to search.";

        displayVideos(videos);

        return;
    }

    const filteredVideos = videos.filter(video =>

        video.title.toLowerCase().includes(searchText) ||
        video.channel.toLowerCase().includes(searchText) ||
        video.category.toLowerCase().includes(searchText)

    );

    document.getElementById("resultTitle").innerText =
        "Search Results";

    document.getElementById("resultMessage").innerText =
        filteredVideos.length +
        " video(s) found for \"" +
        searchText +
        "\"";

    displayVideos(filteredVideos);

    document
        .getElementById("results")
        .scrollIntoView({
            behavior: "smooth"
        });
}


function quickSearch(text) {

    document.getElementById("searchInput").value = text;

    searchVideos();
}


function handleEnter(event) {

    if (event.key === "Enter") {
        searchVideos();
    }
}


displayVideos(videos);