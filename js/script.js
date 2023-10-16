const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const cardJob = (data) => {
    for (let {name, image, description, languajes, location} of data) {
    $('#container-cards').innerHTML += `<div class="card col-4 m-1" style="width: 16rem;">
        <img src="${image}" class="card-img-top mt-2" alt="factory">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${description}</p>
            <a href="#" class="btn btn-primary">Más detalles</a>
        </div>
    </div>` }
}