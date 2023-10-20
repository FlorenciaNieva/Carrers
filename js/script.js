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
                <button type="button" onclick="formEditJob('${infoCard.id}')" class="btn btn-success">Edit</button>
                <button type="button" onclick="alertDeleteJob('${infoCard.id}')" class="btn btn-danger">Delete</button>
            </div>
        </div>
    </div>
    `;
};

const alertDeleteJob = (id) => {
    $('#section-alert-delete').innerHTML += `<div class="alert alert-danger d-flex justify-content-around" role="alert">
        <div class="d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg"  class="flex-shrink-0 me-2" height="1em" viewBox="0 0 448 512" role="img" aria-label="delete:"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
            <div>
                Are you sure to delete this job?
            </div>
        </div>
        <div>
            <button type="button" class="btn btn-outline-secondary">Cancel</button>
            <button type="button" onclick="deleteJob('${
                id}')" class="btn btn-danger">Delete job</button>
        </div>
    </div>`
    showView('section-alert-delete');
}

const formEditJob = async (id) => {
    showView('section-form-edit');
    $('#form-edit').innerHTML = '';
    $('#form-edit').innerHTML += `
    <h2 class="mb-4 mt-4">Edit Job</h2>
    <form class="container mb-3">
        <label class="form-label mb-3">
            Job Title
            <input type="text" class="form-control mt-2" id="edit-name">
        </label>
        <label class="form-label mb-3">
            Image
            <input type="text" class="form-control mt-2" id="edit-image">
        </label>
        <label class="form-label mb-3">
            Description
            <textarea class="form-control mt-2" id="edit-description" rows="3"></textarea>
        </label>
        <label>
            Tags
            <input type="text" name="location" id="edit-location" class="form-control mb-3 mt-2">
            <input type="text" name="seniority" id="edit-seniority" class="form-control mb-3">
            <input type="text" name="category" id="edit-category" class="form-control mb-3">
        </label>
        <label class="form-label mb-3">
            Benefits
            <input type="text"  class="form-control mt-2" id="edit-vacations">
            <input type="text"  class="form-control mt-2" id="edit-health-ensurance">
            <select class="form-control mt-2" name="select-edit-internet-paid" id="select-edit-internet-paid">
                <option value="internet-paid" disabled>Internet Paid</option>
                <option value="true">True</option>
                <option value="false">False</option>
            </select>
        </label>
        <label class="form-label mb-3">
            Salary
            <input type="number"  class="form-control mt-2" id="edit-salary">
        </label>
        <label class="form-label mb-3">
            Long Term
            <select class="form-control mt-2" name="select-edit-long-term" id="select-edit-long-term">
                <option value="select" disabled>Select True o False</option>
                <option value="true">True</option>
                <option value="false">False</option>
            </select>
        </label>
        <label class="form-label mb-3">
            Lenguajes
            <input type="text" class="form-control mt-2" id="edit-languages">
        </label>
        <button type="button" onclick="showView('')" class="btn btn-secondary">Cancel</button>
        <button type="button" onclick="editJob('${id}')" class="btn btn-primary">Edit</button>
    </form>
    `;
    try {
        const originalData = await originalJobData(id);
        completeFormFields(originalData);
    } catch (error) {
        console.error(error);
    }
}

const completeFormFields = (originalJobData) => {
    $('#edit-name').value = originalJobData.name;
    $('#edit-description').value = originalJobData.description;
    $('#edit-image').value = originalJobData.image;
    $('#edit-location').value = originalJobData.location;
    $('#edit-seniority').value = originalJobData.seniority;
    $('#edit-category').value = originalJobData.category;
    $('#edit-vacations').value = originalJobData.benefits.vacation;
    $('#edit-health-ensurance').value = originalJobData.benefits.health_ensurance;
    $('#select-edit-internet-paid').value = originalJobData.benefits.internet_paid;
    $('#edit-salary').value = originalJobData.salary;
    $('#select-edit-long-term').value = originalJobData.long_term;
    $('#edit-languages').value = originalJobData.languages.join(", ");
}

const dataEditJob = () => {
    const data  = {
        name: $('#edit-name').value,
        image: $('#edit-image').value,
        description: $('#edit-description').value,
        location: $('#edit-location').value,
        category: $('#edit-category').value,
        seniority: $('#edit-seniority').value,
        benefits: {
            vacation: $('#edit-vacations').value,
            health_ensurance: $('#edit-health-ensurance').value,
            internet_paid: $('#select-edit-internet-paid').value,
        },
        salary: $('#edit-salary').value,
        long_term: $('#select-edit-long-term').value,
        languages: [$('#edit-languages').value],
    }
    return data;
}