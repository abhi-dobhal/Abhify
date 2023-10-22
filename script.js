console.log("Welcome to Abhify")

//Initialise the variable
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar')
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName("songItem"));
let songs=[
    {songName:"Home",filepath:"songs/1.mp3",coverpath:"coverpath/1.jpg"},
    {songName:"Enemies",filepath:"songs/2.mp3",coverpath:"coverpath/2.jpg"},
    {songName:"paradise",filepath:"songs/3.mp3",coverpath:"coverpath/3.jpg"},
    {songName:"can't break me down",filepath:"songs/4.mp3",coverpath:"coverpath/4.jpg"},
    {songName:"seasons",filepath:"songs/5.mp3",coverpath:"coverpath/5.jpg"},
    {songName:"walk away",filepath:"songs/6.mp3",coverpath:"coverpath/6.jpg"},
    {songName:"Heaven Knows",filepath:"songs/7.mp3",coverpath:"coverpath/7.jpg"},
]
songItems.forEach((element,i)=>{
    
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("SongName")[0].innerText = songs[i].songName;
}
)



//audioElement.play();

//Handle play pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

//Listen to events

audioElement.addEventListener('timeupdate',()=>{

//update seekbar

progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value=progress;

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
})

//Listen to events on other songs

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
       element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
       
        songIndex=parseInt(e.target.id);
       e.target.classList.remove('fa-play-circle');
       e.target.classList.add('fa-pause-circle');
       audioElement.src=`songs/${songIndex+1}.mp3`;
       masterSongName.innerText=songs[songIndex].songName;
       audioElement.currentTime=0;
       audioElement.play();
       masterPlay.classList.remove('fa-play-circle');
       masterPlay.classList.add('fa-pause-circle');

    })

})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0
    }
    else{
    songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
       audioElement.currentTime=0;
       audioElement.play();
       masterPlay.classList.remove('fa-play-circle');
       masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
    songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;//BACKTICKS AND TEMPLATE LITERAL
       masterSongName.innerText=songs[songIndex].songName;
       audioElement.currentTime=0;
       audioElement.play();
       masterPlay.classList.remove('fa-play-circle');
       masterPlay.classList.add('fa-pause-circle');

})