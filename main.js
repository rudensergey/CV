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

// main stack logic

let collection = document.getElementById('main-stack').getElementsByClassName('technology');
for (let elemNumber in collection) {
    let elemenet = collection[elemNumber]
    elemenet.style.backgroundColor = elemenet.dataset.color

    let logo = document.createElement('div')
    logo.className = 'logo';
    logo.style.backgroundImage = 'url("' + elemenet.dataset.path + '")';

    let name = document.createElement('p')
    name.className = 'name';
    name.innerHTML = elemenet.dataset.name;

    elemenet.append(logo)
    elemenet.append(name)
}