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
    let element = collection[elemNumber]
    element.style.backgroundColor = element.dataset.color

    let logo = document.createElement('div')
    logo.className = 'logo';
    logo.style.backgroundImage = 'url("' + element.dataset.path + '")';

    let name = document.createElement('p')
    name.className = 'name';
    name.innerHTML = element.dataset.name;

    element.append(logo)
    element.append(name)
}