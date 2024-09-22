document.getElementById('scanForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    document.getElementById('scanForm').classList.add('hidden');
    document.getElementById('scanning').classList.remove('hidden');

    let progress = 0;
    const totalDatabases = 3728;
    const progressInterval = setInterval(() => {
        progress += 100;
        const percentage = Math.min((progress / totalDatabases) * 100, 100);
        
        document.getElementById('progressFill').style.width = `${percentage}%`;
        document.getElementById('progressText').innerText = `Now scanning database ${Math.floor(progress)} of ${totalDatabases}... 0 matches found`;

        if (progress >= totalDatabases) {
            clearInterval(progressInterval);
            document.getElementById('scanning').classList.add('hidden');
            document.getElementById('result').classList.remove('hidden');
        }
    }, 50);
});
