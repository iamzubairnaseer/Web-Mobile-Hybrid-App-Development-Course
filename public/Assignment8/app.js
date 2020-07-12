var min = 0
var sec = 0
var mec = 0
var minHtml = document.getElementById('minutes')
var secHtml = document.getElementById('seconds')
var mecHtml = document.getElementById('millisec')
var interval;
var count = 0;
var news = ''
var table = document.getElementById('table')
var old = table.innerHTML

function stop_watch(){
    mec++
    mecHtml.innerHTML = mec
    if(mec == 100){
        sec++
        secHtml.innerHTML = sec + ':'
        mec = 0
    }
    if(sec == 60){
        min++
        minHtml.innerHTML = min + ':'
        sec = 0
    }
}

function start(){
    interval = setInterval(stop_watch,10)
    document.getElementById('start').setAttribute('onclick','javascript:stop();')
    document.getElementById('start').innerHTML = 'Pause'
    document.getElementById('reset').disabled = false
    document.getElementById('lap').disabled = false
}

function stop(){
    clearInterval(interval)
    document.getElementById('start').setAttribute('onclick','javascript:start();')
    document.getElementById('start').innerHTML = 'Start'
}

function lap(){
    count++
    table.style.display = 'block'
    news += '<table width=100%><tr><td style="border:none;" width=60px align="center">'+'#'+count+'</td><td style="border:none; color:green;" colspan="16" align="center" bgcolor="#ccffff">'+min+':'+sec+':'+mec+'</td></tr></table>'
    table.innerHTML = old + news 
}

function reset(){
    min = 0
    sec = 0
    mec = 0
    minHtml.innerHTML = min + ':'
    secHtml.innerHTML = sec + ':'
    mecHtml.innerHTML = mec
    stop()
    document.getElementById('reset').disabled = true
    document.getElementById('lap').disabled = true
    news = ''
    table.innerHTML = old
    table.style.display = 'none' 
    count = 0
}