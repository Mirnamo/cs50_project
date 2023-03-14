function woods(){
    document.body.style.background ="url('woods.jpeg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.color = "white";
    var audio = new Audio('birds.mp3');
    if (typeof audio.loop == 'boolean')
    {
        audio.loop = true;
    }
    else
    {
        audio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
        }, false);
    }
    audio.play();
    document.getElementById('pause').addEventListener('click', ()=>{audio.pause();});
}
function cafe(){
    document.body.style.background = "url('cafe.jpg')";
    document.body.style.color = "black";
    document.body.style.backgroundSize = "cover";
    audio = new Audio('cafe.mp3');
    if (typeof audio.loop == 'boolean')
    {
        audio.loop = true;
    }
    else
    {
        audio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
        }, false);
    }
    audio.play();
    document.getElementById('pause').addEventListener('click', ()=>{audio.pause();});
}
function beach(){
    document.body.style.background ="url('beach.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.color= "white";
    audio = new Audio('beach.mp3');
    if (typeof audio.loop == 'boolean')
    {
        audio.loop = true;
    }
    else
    {
        audio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
        }, false);
    }
    audio.play();
    document.getElementById('pause').addEventListener('click', ()=>{audio.pause();});
}
function meditation(){
    document.body.style.background ="url('meditation.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.color = "white"
    audio = new Audio('meditation.mp3'); 
    if (typeof audio.loop == 'boolean')
    {
        audio.loop = true;
    }
    else
    {
        audio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
        }, false);
    }
    audio.play();
    document.getElementById('pause').addEventListener('click', ()=>{audio.pause();});
}
function piano(){
    document.body.style.background = "url('piano.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.color = "white";
    audio = new Audio('piano.mp3');
    if (typeof audio.loop == 'boolean')
    {
        audio.loop = true;
    }
    else
    {
        audio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
        }, false);
    }
    audio.play();
    document.getElementById('pause').addEventListener('click', ()=>{audio.pause();});
}
function library(){
        document.body.style.background = "url('library.jpg')";
        document.body.style.backgroundSize = "cover";
        document.body.style.color = "white";
        audio = new Audio('library.mp3'); 
        if (typeof audio.loop == 'boolean')
        {
            audio.loop = true;
        }
        else
        {
            audio.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
            }, false);
        }
        audio.play();
        document.getElementById('pause').addEventListener('click', ()=>{audio.pause();});
}