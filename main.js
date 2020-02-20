let social = document.getElementById('social')

social.addEventListener('click', function(event) {
    if (!event.target.dataset.social) return
    window.open(event.target.dataset.social)
})

social.addEventListener('mouseover', function(event) {
    if (!event.target.dataset.social) return
    let tip = document.createElement('div')
    tip.className = 'tip'
    tip.id = 'tip'
    tip.innerHTML = event.target.alt;
    event.target.before(tip);

    let coords = event.target.getBoundingClientRect()
    tip.style.top = coords.y + event.target.offsetHeight + 15 + 'px'
    tip.style.left = coords.x + event.target.offsetWidth / 2 - tip.offsetWidth / 2 + 'px'
})

social.addEventListener('mouseout', function(event) {
    if (!event.target.dataset.social) return
    document.getElementById('tip').remove()
})