// Simulate automatic download
window.onload = function() {
    var link = document.createElement('a');
    link.href = 'eicar.txt';  // Path to the EICAR test file
    link.download = 'eicar.txt';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
