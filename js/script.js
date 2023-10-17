const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const showView = (viewToShow) => {
    $$('.view').forEach((view) => view.classList.add('visually-hidden'));
    $(`#${viewToShow}`).classList.remove('visually-hidden');
};

$('#btn-home').addEventListener('click', () => {
    showView('spinner');
    setTimeout(() => {
        showView('container-cards');
        $('#search-bar').classList.remove('visually-hidden');
    }, 3000);
    $('#search-bar').classList.remove('visually-hidden');
})

const cardJob = (data) => {
    for (let {name, image, description, location, seniority, category, id} of data) {
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
            <a href="#" id="${id}" class="btn btn-primary d-flex justify-content-center">See details</a>
        </div>
    </div>` }
}

$('#btn-view-create').addEventListener('click', () => showView('section-form-create'))

const dataNewJob = () => {
    let newJob = {
        name: `${$('#input-name').value}`,
        image: `${$('#input-url-image').value}`,
        description: `${$('#textarea-description').value}`,
        location: `${$('#input-location').value}`,
        category: `${$('#input-category').value}`,
        seniority: `${$('#input-seniority').value}`,
        benefits: {
            vacation: `${$('#input-vacations').value}`,
            health_ensurance: `${$('#input-health-ensurance').value}`,
            internet_paid: `${$('#select-internet-paid').value}`,
        },
        salary: `${$('#input-salary').value}`,
        long_term: `${$('#select-long-term').value}`,
        languages: [`${$('#input-language').value}`],
    }
    return newJob;
};

$('#btn-create-job').addEventListener('click', () => {
    createNewJob()
})