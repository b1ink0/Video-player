document.addEventListener('DOMContentLoaded', function(){
    const video = document.querySelector('.videoDiv')
    const mid = document.querySelector('.mid')
    //vol
    const block =()=>{
        document.querySelectorAll('.last button').forEach(button => button.style.display ='block')
        document.querySelector('.last').style.top ='93%';
        document.querySelector('.progress').style.top ='86%';
    }
    const none = ()=>{
        document.querySelector('.last').style.top ='95%';
        document.querySelector('.progress').style.top ='98%';
        document.querySelectorAll('.last button').forEach(button => button.style.display ='none')
    }
    //vol
    const vola =document.querySelector('.volBtn');
    vola.addEventListener('mouseover', function(){
        function volBlock(){
            document.querySelector('.vol').style.display='block';
            document.querySelector('.speedBtn').style.right ='240px';
            vola.style.width ='140px';
            vola.style.paddingLeft ='100px';
            block();
        }
        volBlock();
        document.querySelector('.vol').addEventListener('mouseover',volBlock)
    })
    document.querySelector('.volBtn').addEventListener('mouseout' ,function(){
        function volNone(){
            document.querySelector('.vol').style.display='none';
            document.querySelector('.speedBtn').style.right ='150px';
            vola.style.width ='50px';
            vola.style.paddingLeft ='0px';
            none();
        }
        volNone();
        document.querySelector('.vol').addEventListener('mouseout',volNone)
    })
    //speed
    const speedo = document.querySelector('.speedBtn');
    speedo.addEventListener('mouseover', function(){
        function speedBlock(){
            document.querySelector('.speed').style.display='block';
            speedo.style.width ='150px';
            speedo.style.paddingLeft ='100px';
            block();
        }
        speedBlock();
        document.querySelector('.speed').addEventListener('mouseover',speedBlock)
    })
    document.querySelector('.speedBtn').addEventListener('mouseout', function(){
        function speedNone(){
            document.querySelector('.speed').style.display='none';
            speedo.style.width ='50px';
            speedo.style.paddingLeft ='0px';
            none();
        }
        speedNone();
        document.querySelector('.speed').addEventListener('mouseout',speedNone)
    })
    const mid1 = ()=>{document.querySelector('.mid').style.opacity='1'}
    const mid0 = ()=>{document.querySelector('.mid').style.opacity='0'}

    document.querySelector('.last').addEventListener('mouseover',mid1)
    document.querySelector('.last').addEventListener('mouseout',mid0)
    document.querySelector('video').addEventListener('mouseover',()=>{block(); mid1();});
    document.querySelector('video').addEventListener('mouseout',()=>{none(); mid0();})
    document.querySelector('.progress').addEventListener('mouseover',()=>{block(); mid1();})
    document.querySelector('.playbtn').addEventListener('mouseover',block)
    document.querySelector('.fullscreen').addEventListener('mouseover',block)
    document.querySelector('.mid').addEventListener('mouseover',()=>{block(); mid1();})
    document.querySelector('.mid').addEventListener('mouseout',()=>{none(); mid0();})
    //for playing
    const Video = document.querySelector('.views');
    const play1 = document.querySelector('.playbtn');
    const play2 = document.querySelector('.playbtn1');
    const Volume = document.querySelector('.vol');
    const Speed = document.querySelector('.speed');
    const back = document.querySelector('.back');
    const forw = document.querySelector('.for');
    const fullBtn = document.querySelector('.fullscreen')
    const Progress = document.querySelector('.progress1');
    const Progress1 = document.querySelector('.progress');
    const volumee = document.querySelector('.volume');
    function togglePlay(){
        if (Video.paused){
            Video.play();
            play1.innerHTML = '❚ ❚';
            play2.innerHTML = '❚ ❚';
        }else{
            Video.pause();
            play1.innerHTML = '►';
            play2.innerHTML = '►';
        }
    }
    function vol1(){
        Video.volume = this.value;
        if (this.value == 0){
            volumee.src = './img/speaker1.svg';
        }else if(this.value == 0.5){
            volumee.src = './img/speaker2.svg';
        }else if(this.value == 1){
            volumee.src = './img/speaker3.svg'
        }
    }
    function speed1(){
        Video.playbackRate = this.value;
    }
    function backFor(){
        Video.currentTime += parseFloat(this.dataset.skip)
    }
    function full(){
        if (Video.requestFullscreen){
            Video.requestFullscreen();
        }
    }
    function handleProgress(){
        const pro = (Video.currentTime / Video.duration)*100;
        Progress.style.width =`${pro}%`;
    }
    function scrb(e){
        const scrbTime = (e.offsetX / Progress1.offsetWidth) * Video.duration;
        Video.currentTime = scrbTime;
    }
    document.querySelector('.playbtn').addEventListener('click',togglePlay)
    document.querySelector('.playbtn1').addEventListener('click',togglePlay)
    Volume.addEventListener('change',vol1)
    Speed.addEventListener('change',speed1)
    Volume.addEventListener('mousemove',vol1)
    Speed.addEventListener('mousemove',speed1)
    back.addEventListener('click', backFor)
    forw.addEventListener('click', backFor)
    fullBtn.addEventListener('click', full)
    Video.addEventListener('timeupdate', handleProgress)
    Progress1.addEventListener('click', scrb)
    let mousedown = false;
    Progress1.addEventListener('mousemove', function(){
        if (mousedown){
            scrb();
        }else{
            return;
        }
    })
    Progress1.addEventListener('mousedown', ()=> mousedown = true)
    Progress1.addEventListener('mouseup', ()=> mousedown = false)
    window.addEventListener('keydown', function(e){
        if(e.key === ' '){
            togglePlay();
        }
    })
})