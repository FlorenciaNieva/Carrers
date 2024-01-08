const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// Show View Function
const showView = (viewToShow) => {
    $$('.view').forEach((view) => view.classList.add('visually-hidden'));
    $(`#${viewToShow}`).classList.remove('visually-hidden');
};

// Clean Home
const clearHome = () => {
    $('#container-cards').innerHTML = "";
    $('#location-select').innerHTML = "";
    $('#seniority-select').innerHTML = "";
    $('#category-select').innerHTML = "";
}

// Job Card
const cardJob = (data) => {
    for (let {name, image, description, location, seniority, category, id} of data) {
    $('#container-cards').innerHTML += `<div class="card col-4 m-1" style="width: 16rem;">
        <img src="${image}" class="card-img-top mt-2" alt="factory">
        <div class="card-body">
            <h5 class="card-title text-center">${name}</h5>
            <p class="card-text card-text-short">${description}</p>
            <div class="d-grid gap-2 d-md-flex justify-content-center mb-2">
                <h6><span class="badge rounded-pill bg-primary">${location}</span></h6>
                <h6><span class="badge rounded-pill bg-primary">${seniority}</span></h6>
                <h6><span class="badge rounded-pill bg-primary">${category}</span></h6>
            </div>
            <a href="#" onclick="viewDetails('${id}')" id="${id}" class="btn-details btn btn-primary d-flex justify-content-center">See details</a>
        </div>
    </div>` }
}

// New Job Information
const dataNewJob = () => {
    let newJob = {
        name: `${$('#input-name').value}`,
        image: `${$('#input-url-image').value}`,
        description: `${$('#textarea-description').value}`,
        location: `${$('#select-location').value}`,
        category: `${$('#select-seniority').value}`,
        seniority: `${$('#select-category').value}`,
        benefits: {
            number_vacation: `${$('#number-vacation').value}`,
            select_vacation: `${$('#select-vacation').value}`,
            health_ensurance: `${$('#input-health-ensurance').value}`,
            internet_paid: `${$('#select-internet-paid').value}`,
        },
        salary: `${$('#input-salary').value}`,
        long_term: `${$('#select-long-term').value}`,
        languages: [`${$('#input-language').value}`],
    }
    clearCreateForm();
    return newJob;
};

// Clear Creation Form
const clearCreateForm = () => {
    $('#input-name').value = "";
    $('#input-url-image').value = "";
    $('#textarea-description').value = "";
    $('#select-location').value = "";
    $('#select-category').value = "";
    $('#select-seniority').value = "";
    $('#number-vacation').value = "";
    $('#select-vacation').value = "";
    $('#input-health-ensurance').value = "";
    $('#select-internet-paid').value = "internet-paid";
    $('#input-salary').value = "";
    $('#select-long-term').value = "long-temp";
    $('#input-language').value = "";
}

// Job Card Details
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
                    <p class="card-text text-secondary-emphasis  text-center mt-2">${infoCard.description}</p>
                    <div class="text-center mt-2">
                        <p class="btn btn-outline-primary">${infoCard.languages.join(', ')}</p>
                    </div>
                    <div class="d-grid gap-2 d-md-flex justify-content-evenly">
                        <div class="text-center">
                            <p class="benefits m-0">${infoCard.benefits.number_vacation} ${infoCard.benefits.select_vacation}</p>
                            <label class="text-secondary">Vacation</label>
                        </div>
                        <div class="text-center">
                            <p class="benefits m-0">${infoCard.benefits.health_ensurance}</p>
                            <label class="text-secondary">Health ensurance</label>
                        </div>
                        <div class="text-center">
                            <p class="benefits m-0">${infoCard.benefits.internet_paid}</p>
                            <label class="text-secondary">Internet Paid</label>
                        </div>
                    </div>
                    <div class="text-center mt-3">
                        <p class="salary m-0">$${infoCard.salary}</p>
                        <label class="text-secondary">Salary</label>
                    </div>
                    <div class="d-grid gap-2 d-md-flex justify-content-center mt-3">
                        <h5><span class="badge rounded-pill bg-primary">${infoCard.location}</span></h5>
                        <h5><span class="badge rounded-pill bg-primary">${infoCard.seniority}</span></h5>
                        <h5><span class="badge rounded-pill bg-primary">${infoCard.category}</span></h5>
                    </div>
                    <div class="text-center mt-2">
                        <button type="button" onclick="formEditJob('${infoCard.id}')" class="btn btn-success">Edit</button>
                        <button type="button" onclick="alertDeleteJob('${infoCard.id}')" class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
};

// Job Delete Alert
const alertDeleteJob = (id) => {
    $('#section-alert-delete').innerHTML = "";
    $('#section-alert-delete').innerHTML += `<div class="alert alert-danger d-flex justify-content-around" role="alert">
        <div class="d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg"  class="flex-shrink-0 me-2" height="1em" viewBox="0 0 448 512" role="img" aria-label="delete:"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
            <div>
                Are you sure to delete this job?
            </div>
        </div>
        <div>
            <button type="button" onclick="viewDetails('${id}')" class="btn btn-outline-secondary">Cancel</button>
            <button type="button" onclick="deleteJob('${id}')" class="btn btn-danger">Delete job</button>
        </div>
    </div>`
    showView('section-alert-delete');
}

// Job Edition Form
const formEditJob = async (id) => {
    showView('section-form-edit');
    $('#form-edit').innerHTML = '';
    $('#form-edit').innerHTML += `
    <h2 class="mb-4 text-light">Edit Job</h2>
    <form class="container mb-3">
        <h6 class="text-light">Job Title</h6>
        <label class="form-label mb-3">
            <input type="text" class="form-control mt-2" id="edit-name">
        </label>
        <h6 class="text-light">Image</h6>
        <label class="form-label mb-3">
            <input type="text" class="form-control mt-2" id="edit-image">
        </label>
        <h6 class="text-light">Description</h6>
        <label class="form-label mb-3">
            <textarea class="form-control mt-2" id="edit-description" rows="3"></textarea>
        </label>
        <h6 class="text-light">Tags</h6>
        <label>
            <select class="form-control mt-2" name="edit-location" id="edit-location">
                <option value="location" selected disabled>Location</option>
                <option value="remote">Remote</option>
                <option value="argentina">Argentina</option>
                <option value="brazil">Brazil</option>
                <option value="colombia">Colombia</option>
                <option value="chile">Chile</option>
                <option value="usa">USA</option>
                <option value="mexico">Mexico</option>
            </select>
            <select class="form-control mt-2" name="edit-seniority" id="edit-seniority">
                <option value="seniority" selected disabled>Seniority</option>
                <option value="trainee">Trainee</option>
                <option value="junior">Junior</option>
                <option value="semisenior">SemiSenior</option>
                <option value="senior">Senior</option>
            </select>
            <select class="form-control mt-2" name="edit-category" id="edit-category">
                <option value="category" selected disabled>Category</option>
                <option value="engineer">Engineer</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="fullstack">FullStack</option>
                <option value="designer">Designer</option>
            </select>
        </label>
        <h6 class="text-light my-3">Benefits</h6>
        <label class="form-label mb-3">
            Vacations:
            <div class="row g-3 align-items-center">
                <div class="col-auto">
                    <input type="number"  class="form-control mt-2" id="edit-number-vacation" placeholder="Number">
                </div>
                <div class="col-auto">
                    <select id="edit-select-vacation" class="form-control mt-2">
                        <option value="duracion" selected disabled>Days/Weeks/Months</option>
                        <option value="days">Days</option>
                        <option value="Weeks">Weeks</option>
                        <option value="months">Months</option>
                    </select>
                </div>
            </div> 
            Health ensurance:
            <input type="text" class="form-control mt-2" id="edit-health-ensurance">
            Internet paid:
            <select class="form-control mt-2" name="select-edit-internet-paid" id="select-edit-internet-paid">
                <option value="internet-paid" disabled>Internet Paid</option>
                <option value="true">True</option>
                <option value="false">False</option>
            </select>
        </label>
        <h6 class="text-light">Salary</h6>
        <label class="form-label mb-3">
            <input type="number"  class="form-control mt-2" id="edit-salary">
        </label>
        <h6 class="text-light">Long Term</h6>
        <label class="form-label mb-3">
            <select class="form-control mt-2" name="select-edit-long-term" id="select-edit-long-term">
                <option value="select" disabled>Select True o False</option>
                <option value="true">True</option>
                <option value="false">False</option>
            </select>
        </label>
        <h6 class="text-light">Lenguajes</h6>
        <label class="form-label mb-3">
            <input type="text" class="form-control mt-2" id="edit-languages">
        </label>
        <button type="button" onclick="viewDetails('${id}')" class="btn btn-secondary">Cancel</button>
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

// Autofill the Editing Form with Job Information
const completeFormFields = (originalJobData) => {
    $('#edit-name').value = originalJobData.name;
    $('#edit-description').value = originalJobData.description;
    $('#edit-image').value = originalJobData.image;
    $('#edit-location').value = originalJobData.location;
    $('#edit-seniority').value = originalJobData.seniority;
    $('#edit-category').value = originalJobData.category;
    $('#edit-number-vacations').value = originalJobData.benefits.number_vacation;
    $('#edit-select-vacation').value = originalJobData.benefits.select_vacation;
    $('#edit-health-ensurance').value = originalJobData.benefits.health_ensurance;
    $('#select-edit-internet-paid').value = originalJobData.benefits.internet_paid;
    $('#edit-salary').value = originalJobData.salary;
    $('#select-edit-long-term').value = originalJobData.long_term;
    $('#edit-languages').value = originalJobData.languages;
}

// Edit Form Information
const dataEditJob = () => {
    const data  = {
        name: $('#edit-name').value,
        image: $('#edit-image').value,
        description: $('#edit-description').value,
        location: $('#edit-location').value,
        category: $('#edit-category').value,
        seniority: $('#edit-seniority').value,
        benefits: {
            numberVacation: $('#edit-number-vacations').value,
            selectVacation: $('#edit-select-vacations').value,
            health_ensurance: $('#edit-health-ensurance').value,
            internet_paid: $('#select-edit-internet-paid').value,
        },
        salary: $('#edit-salary').value,
        long_term: $('#select-edit-long-term').value,
        languages: [$('#edit-languages').value],
    }
    return data;
}

// Initialize Events
const initializeEvents = () => {
    // Home Button
    $('#btn-home').addEventListener('click', () => {
        showView('spinner');
        setTimeout(() => {
            showView('container-cards');
            $('#search-bar').classList.remove('visually-hidden');
        }, 2000);
        $('#search-bar').classList.remove('visually-hidden');
    });
    // Create Job Button
    $('#btn-view-create').addEventListener('click', () => showView('section-form-create'));
    // Submit Button
    $('#btn-create-job').addEventListener('click', () => {
        createNewJob();
    });
    // Clear Button
    $('#clearFilters').addEventListener('click', () => {
        clearHome();
        getJobs();
    });
    // Select Location Filter
    $('#location-select').addEventListener('change', () => {
        if ($('#location-select').value !== 'location') {
            $('#seniority-select').value = 'seniority';
            $('#category-select').value = 'category';
        }
    });
    // Select Seniority Filter
    $('#seniority-select').addEventListener('change', () => {
        if ($('#seniority-select').value !== 'seniority') {
            $('#location-select').value = 'location';
            $('#category-select').value = 'category';
        }
    });
    // Select Category Filter
    $('#category-select').addEventListener('change', () => {
        if ($('#category-select').value !== 'category') {
            $('#location-select').value = 'location';
            $('#seniority-select').value = 'seniority';
        }
    });    
}
