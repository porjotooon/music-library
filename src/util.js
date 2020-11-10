import { v4 as uuidv4 } from "uuid";

// loaded all music data and 
// covers into an array
function ChillHop() {
    return [
        {
            name: "Taisou Zamurai Ending",
            cover: "https://chillhop.com/wp-content/uploads/2020/10/efaa848553d09b4d9fc0752844456e41b34de276-1024x1024.jpg",
            artist: "MAPPA",
            audio: "./assets/songs/Taisou Zamurai ED.mp3",
            color: ["#205950","#2ab3bf"],
            id: uuidv4(),
            active: true,
        },
        {
            name: "Taisou Zamurai ED Piano",
            cover: "https://chillhop.com/wp-content/uploads/2020/08/7ba352cafecae63aa3f09a52e125ea615d2c1f9b-1024x1024.jpg",
            artist: "MAPPA",
            audio: "./assets/songs/Taisou Zamurai ED Piano.mp3",
            color: ["#EF8EA9","#ab417f"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Berserkir (Ezio's Family)",
            cover: "https://chillhop.com/wp-content/uploads/2020/04/35a95878437b99e3384b023504b89403ae169707-1024x1024.jpg",
            artist: "Jesper Kyd",
            audio: "./assets/songs/Berserkir (Ezio's Family).mp3",
            color: ["#CD607D","#c94043"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Kaer Morhen",
            cover: "https://chillhop.com/wp-content/uploads/2020/04/dd0cba2d16eb4006a11f5efa542a2fec53ffa4ee-1024x1024.jpg",
            artist: "CDProjectRed",
            audio: "./assets/songs/Kaer Morhen - Witcher 3.mp3",
            color: ["#EF8EA9","#ab417f"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Track Meet",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/6263175f6334ac348613790b863794010f2a9524-1024x1024.jpg",
            artist: "Yuki Hayashi",
            audio: "./assets/songs/Track Meet - Yuki Hayashi.mp3",
            color: ["#CD607D","#c94043"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Lost in Paradise",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
            artist: "Aklo",
            audio: "./assets/songs/LOST IN PARADISE feat. AKLO.mp3",
            color: ["#205950","#2ab3bf"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Viking War Chant!",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/ae91385fc2d92e40dd4bf337867dee16fb5648d2-1024x1024.jpg",
            artist: "Einar Selvik",
            audio: "./assets/songs/Nordic War Chant!.mp3",
            color: ["#205950","#2ab3bf"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Life Flows like a Conveyor Belt",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/4fac6bb3a32f9e76b465990ba8d97d7db8a372f5-1024x1024.jpg",
            artist: "Gintama",
            audio: "./assets/songs/Life Flows Like a Conveyor Belt.mp3",
            color: ["#CD607D","#c94043"],
            id: uuidv4(),
            active: false,
        },
    ]
};

export default ChillHop;