function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString();
    document.getElementById('current-time').innerText = utcTime;
}
updateTime();
setInterval(updateTime, 1000);