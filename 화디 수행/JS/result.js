const userTags = [
  sessionStorage.getItem("weather"),
  sessionStorage.getItem("mood"),
  sessionStorage.getItem("companion"),
  sessionStorage.getItem("time"),
  sessionStorage.getItem("place"),
];

const titleEl = document.getElementById("result-title");
const artistEl = document.getElementById("result-artist");
const videoEl = document.getElementById("result-video");

const songDatabase = [
  {
    title: "Supernova",
    artist: "aespa",
    tags: ["sunny", "excited", "alone", "night", "gym"],
    youtubeId: "phuiiNCxRMg",
  },
  {
    title: "첫 눈",
    artist: "EXO",
    tags: ["snowy", "romantic", "lover", "evening", "walk"],
    youtubeId: "xxx",
  },
  {
    title: "고민중독",
    artist: "QWER",
    tags: ["windy", "angry", "friends", "afternoon", "drive"],
    youtubeId: "Zqdbsz4M3-M",
  },
  {
    title: "Bubble Gum",
    artist: "뉴진스",
    tags: ["cloudy", "calm", "pet", "morning", "bed"],
    youtubeId: "VOmIplFAGG8",
  },
];

const recommendedSong = songDatabase.reduce((best, current) => {
  const currentScore = current.tags.filter((tag) =>
    userTags.includes(tag),
  ).length;
  const bestScore = best.tags.filter((tag) => userTags.includes(tag)).length;
  return currentScore > bestScore ? current : best;
});

titleEl.innerText = recommendedSong.title;
artistEl.innerText = recommendedSong.artist;
videoEl.src = "https://www.youtube.com/embed/" + recommendedSong.youtubeId;
