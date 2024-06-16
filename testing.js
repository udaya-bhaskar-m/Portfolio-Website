document.getElementById('shareBtn').addEventListener('click', function() {
    var popup = document.getElementById('sharePopup');
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
});

function copyLink() {
    var dummy = document.createElement('input');
    var url = window.location.href;
    document.body.appendChild(dummy);
    dummy.value = url;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    alert('Link copied to clipboard');
}
