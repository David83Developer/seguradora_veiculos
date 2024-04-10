

const loadVideo = async() => {
    const movieView = document.getElementById('movie-view')
    const video = document.createElement('iframe')
    video.src = "https://www.youtube.com/embed/J776O3uXGAc"
    video.title = "YouTube video player"
    video.frameborder="0"
    video.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    video.allowFullscreen
    movieView.appendChild(video)
    console.log(video)
}



loadVideo()