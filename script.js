function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
  
    document.getElementById('current-time').innerText = utcTime;
}
updateTime();
setInterval(updateTime, 1000);
