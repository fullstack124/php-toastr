function updateProgressBar() {
    const progressBar = document.querySelectorAll('#progress-bar');
    let progress = 100;
    progressBar.forEach(pb => {
        const parentElement = pb.parentElement.parentElement.parentElement.parentNode.parentNode;
        const interval = setInterval(function () {
            pb.style.width = progress + '%';
            progress -= 1;
            if (progress < 0) {
                clearInterval(interval);
                parentElement.style.display = 'none'; // Hide the parent element
            }
        }, 60);
    });
   
}


document.querySelectorAll(".close-btn").forEach(cb => {
    cb.addEventListener('click',function(){
        const parentElement = cb.parentElement.parentElement.parentElement.parentNode.parentNode;
        parentElement.style.display = 'none';
    })
});

// Call the function to update the progress bar when the alert is shown
document.getElementById('alert').style.display = 'block'; // Show the alert
updateProgressBar();