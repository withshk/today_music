const userWeather = sessionStorage.getItem("weather");
const userMood = sessionStorage.getItem("mood");
const userCompanion = sessionStorage.getItem("companion");
const userTime = sessionStorage.getItem("time");
const userPlace = sessionStorage.getItem("place");

const userChoices = [userWeather, userMood, userCompanion, userTime, userPlace];

const titleEl = document.getElementById("result-title");
const artistEl = document.getElementById("result-artist");
const videoEl = document.getElementById("result-video");

// 노래 27곡 데이터베이스
const songDatabase = [
  // --- [햇살] ---
  {
    title: "Faking All The Moves",
    artist: "Tiger Gang",
    tags: ["sunny", "excited", "alone", "afternoon", "drive"],
    youtubeId: "Ox6X3U90REY",
  },
  {
    title: "좋지 아니한가",
    artist: "크라잉넛",
    tags: ["sunny", "excited", "friends", "afternoon", "walk"],
    youtubeId: "ETlRPm-eQyQ",
  },
  {
    title: "Les Champs-Élysées",
    artist: "Joe Dassin",
    tags: ["sunny", "excited", "lover", "afternoon", "cafe"],
    youtubeId: "pvgjEdnTgXA",
  },
  {
    title: "모닝왈츠",
    artist: "자우림",
    tags: ["sunny", "calm", "alone", "morning", "bed"],
    youtubeId: "Ic4t35pbHCs",
  },
  {
    title: "Bubble Gum",
    artist: "뉴진스",
    tags: ["sunny", "calm", "friends", "afternoon", "cafe"],
    youtubeId: "GV_HP7yoIyc",
  },
  {
    title: "너에게 주고 싶은 세 가지",
    artist: "박혜경",
    tags: ["sunny", "calm", "lover", "morning", "walk"],
    youtubeId: "gngljCSP5m8",
  },
  {
    title: "double take",
    artist: "dhruv",
    tags: ["sunny", "sad", "alone", "evening", "bed"],
    youtubeId: "IYOfGK5Zos4",
  },
  {
    title: "자살소년",
    artist: "초록불꽃소년단",
    tags: ["sunny", "sad", "friends", "night", "walk"],
    youtubeId: "vvP6u_V3YPk",
  },
  {
    title: "오렌지 마말레이드",
    artist: "자우림",
    tags: ["sunny", "sad", "lover", "evening", "cafe"],
    youtubeId: "ltvesBwQbB0",
  },
  {
    title: "Levitating",
    artist: "Dua Lipa",
    tags: ["sunny", "romantic", "lover", "afternoon", "drive"],
    youtubeId: "OsfAnsMY21M",
  },
  // --- [비 & 눈] ---
  {
    title: "Rainy day",
    artist: "PATEKO",
    tags: ["rainy", "excited", "alone", "afternoon", "walk"],
    youtubeId: "Ep6o9_n0taU",
  },
  {
    title: "Umbrella",
    artist: "Rihanna",
    tags: ["rainy", "excited", "friends", "evening", "drive"],
    youtubeId: "xXD5tltX9Pg",
  },
  {
    title: "너에게 쓰는 편지",
    artist: "MC몽",
    tags: ["rainy", "romantic", "lover", "evening", "cafe"],
    youtubeId: "nhuFm3BGIBY",
  },
  {
    title: "비 갠 후에",
    artist: "정여진",
    tags: ["rainy", "calm", "alone", "dawn", "bed"],
    youtubeId: "0YKjXCHhZbs",
  },
  {
    title: "antifreeze",
    artist: "검정치마",
    tags: ["rainy", "calm", "friends", "night", "walk"],
    youtubeId: "PGADim6UzHE",
  },
  {
    title: "Heroine",
    artist: "back number",
    tags: ["snowy", "romantic", "lover", "night", "bed"],
    youtubeId: "107UoVP2fAA",
  },
  {
    title: "주저하는 연인들을 위해",
    artist: "잔나비",
    tags: ["rainy", "sad", "alone", "night", "bed"],
    youtubeId: "t8P-zdkoeJA",
  },
  {
    title: "우산",
    artist: "윤하",
    tags: ["rainy", "sad", "friends", "evening", "walk"],
    youtubeId: "Wbb7fWQjz4c",
  },
  {
    title: "EVERYTHING",
    artist: "검정치마",
    tags: ["rainy", "sad", "lover", "night", "drive"],
    youtubeId: "HXV5aZaBLDo",
  },
  {
    title: "ocean eyes",
    artist: "Billie Eilish",
    tags: ["rainy", "sad", "alone", "night", "bed"],
    youtubeId: "5qap5aO4i9A",
  },

  // --- [흐림 & 바람] ---
  {
    title: "삐딱하게",
    artist: "G-dragon",
    tags: ["cloudy", "angry", "alone", "night", "walk"],
    youtubeId: "ywoyAdPEyTg",
  },
  {
    title: "주문을 걸어",
    artist: "박혜경",
    tags: ["windy", "excited", "family", "afternoon", "cafe"],
    youtubeId: "jw0E5W5BTKs",
  },
  {
    title: "너에게 쓰는 편지 Part.2",
    artist: "MC몽",
    tags: ["cloudy", "excited", "lover", "evening", "drive"],
    youtubeId: "jsXAwVnd1gE",
  },
  {
    title: "미안해 널 미워해",
    artist: "자우림",
    tags: ["cloudy", "calm", "alone", "dawn", "bed"],
    youtubeId: "rBa4ZYxI4vM",
  },
  {
    title: "마음",
    artist: "아이유",
    tags: ["cloudy", "calm", "friends", "afternoon", "walk"],
    youtubeId: "he2C4lx63M0",
  },
  {
    title: "우나사빠",
    artist: "음성녹음",
    tags: ["cloudy", "romantic", "lover", "night", "bed"],
    youtubeId: "oUeNUYRFGCo",
  },
  {
    title: "홀로봄",
    artist: "안예은",
    tags: ["cloudy", "sad", "pet", "dawn", "bed"],
    youtubeId: "HOWG50dC4ck",
  },
  {
    title: "reality blue",
    artist: "스텔라쟝",
    tags: ["cloudy", "sad", "friends", "evening", "cafe"],
    youtubeId: "pIKjFdett_A",
  },
  {
    title: "편지",
    artist: "안예은",
    tags: ["cloudy", "sad", "lover", "night", "bed"],
    youtubeId: "q-0zvlrYyMo",
  },
  {
    title: "Cupid",
    artist: "pH-1",
    tags: ["windy", "romantic", "lover", "night", "cafe"],
    youtubeId: "kFFGmNM1xJA",
  },
  {
    title: "Lovey Dovey",
    artist: "BIG Naughty",
    tags: ["windy", "romantic", "lover", "afternoon", "walk"],
    youtubeId: "OwOIKHkUUUI",
  },
];

let bestSong = songDatabase[0];
let maxScore = -1;

for (let i = 0; i < songDatabase.length; i++) {
  let currentSong = songDatabase[i];
  let score = 0;

  for (let j = 0; j < userChoices.length; j++) {
    let choice = userChoices[j];

    if (currentSong.tags.includes(choice)) {
      score++;
    }
  }

  if (score > maxScore) {
    maxScore = score;
    bestSong = currentSong;
  }
}

titleEl.innerText = bestSong.title;
artistEl.innerText = bestSong.artist;
videoEl.src = "https://www.youtube.com/embed/" + bestSong.youtubeId;
