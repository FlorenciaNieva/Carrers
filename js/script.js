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
            <a href="#" onclick="viewDetails('${id}')" id="${id}" class="btn btn-primary d-flex justify-content-center">See details</a>
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

const detailsCard = (infoCard) => {
    $('#view-details').innerHTML = '';
    $('#view-details').innerHTML += `
    <div class="card mb-3">
        <div class="row g-0 align-items-center">
            <div class="col-md-4 p-3">
                <img src="${infoCard.image}" class="img-fluid rounded" alt="image factory">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title text-center">${infoCard.name}</h5>
                    <p class="card-text">Description: ${infoCard.description}</p>
                    <p class="card-text">Location: ${infoCard.location}</p>
                    <p class="card-text">Category: ${infoCard.category}</p>
                    <p class="card-text">Seniority: ${infoCard.seniority}</p>
                    <p class="card-text">Benefits:</p>
                    <ul>
                        <li>Vacation: ${infoCard.benefits.vacation}</li>
                        <li>Health Ensurence: ${infoCard.benefits.health_ensurance}</li>
                        <li>Internet Paid: ${infoCard.benefits.internet_paid}</li>
                    </ul>
                    <p class="card-text">Salary: $${infoCard.salary}</p>
                    <p class="card-text">Languages: ${infoCard.languages.join(", ")}</p>
                </div>
            </div>
            <div class="card-footer text-center">
                <button type="button" class="btn btn-success">Edit</button>
                <button type="button" class="btn btn-danger">Delete</button>
            </div>
        </div>
    </div>
    `;
};
