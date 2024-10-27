// Simulate automatic download
window.onload = function() {
    var link = document.createElement('a');
    link.href = 'eicar.com';  // Path to the EICAR test file
    link.download = 'eicar.com';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
