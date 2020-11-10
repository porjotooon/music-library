import { v4 as uuidv4 } from "uuid";

// loaded all music data and 
// covers into an array
function ChillHop() {
    return [
        {
            name: "Hidden Structure",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
            artist: "Leavy, Flitz&Suppe",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9913",
            color: ["#205950","#2ab3bf"],
            id: uuidv4(),
            active: true,
        },
        {
            name: "Flushing the Stairs",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/6defa6c89a6902fdd84bccd720c2b8fd29c40990-1024x1024.jpg",
            artist: "Leavy",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9917",
            color: ["#EF8EA9","#ab417f"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Maple Leaf Pt.2",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
            artist: "Philanthrope",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10243",
            color: ["#CD607D","#c94043"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Faces",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/c50f86fb7696e5c5747e0fa2ada4fcbc2501fea7-1024x1024.jpg",
            artist: "Knowmadic",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8554",
            color: ["#EF8EA9","#ab417f"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Slopes",
            cover: "https://chillhop.com/wp-content/uploads/2020/06/52bd092974ccce9aa610c33f03575fc2d7f9c7d2-1024x1024.jpg",
            artist: "Philanthrope, Yasper",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8044",
            color: ["#CD607D","#c94043"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "this again..",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/f3dda653e5ff94d787639ef56cb8e922d321a04f-1024x1024.jpg",
            artist: "SwuM, quickly, quickly",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8953",
            color: ["#205950","#2ab3bf"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Lemon",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/53eef8b1ac9bf40038b2b5dc7ca2d13fc19cf95e-1024x1024.jpg",
            artist: "Tom Doolie",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=7977",
            color: ["#205950","#2ab3bf"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "False Hope",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",
            artist: "Nymano, Pandrezz",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10148",
            color: ["#CD607D","#c94043"],
            id: uuidv4(),
            active: false,
        },
    ]
};

export default ChillHop;