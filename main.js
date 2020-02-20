let social = document.getElementById('social')
social.addEventListener('click', function(event) {
    if (!event.target.dataset.social) return
    window.open(event.target.dataset.social)
})