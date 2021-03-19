var playPause = anime({
   targets:'div.box',
   
   rotate:{
     value: '1turn',
     easing: 'easeInOutSine'
    },
    delay: function(el, i, l){ return i * 200},
    autoplay:false,
    loop:true
})
document.querySelector('#boxes .play').onclick = playPause.play;
document.querySelector('#boxes .pause').onclick = playPause.pause;
