const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const showView = (viewToShow) => {
    $$('.view').forEach((view) => view.classList.add('is-hidden'));
    $(`#${viewToShow}`).classList.remove('is-hidden');
};

const cardJob = (data) => {
    for (let {name, image, description, location, seniority, category} of data) {
    $('#container-cards').innerHTML += `<div class="card col-4 m-1" style="width: 16rem;">
        <img src="${image}" class="card-img-top mt-2" alt="factory">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${description}</p>
            <div class="d-grid gap-2 d-md-flex justify-content-center mb-2">
                <div class="btn-card btn btn-primary">${location}</div>
                <div class="btn-card btn btn-primary">${seniority}</div>
                <div class="btn-card btn btn-primary">${category}</div>
            </div>
            <a href="#" class="btn btn-primary d-flex justify-content-center">See details</a>
        </div>
    </div>` }
}