const getJobs = async () => {
    try {
        showView('spinner');
        const response = await fetch("https://6524100aea560a22a4e957ae.mockapi.io/api/jobs");
        const data = await response.json();
        setTimeout(() => {
            cardJob(data);
            showView('container-cards');
            $('#search-bar').classList.remove('visually-hidden')
        }, 2000);
        $('#search-bar').classList.remove('visually-hidden')
        getCountries(data);
        getSeniorities(data);
        getCategories(data);
    } catch (error) {
        console.error(error);
    }
};

const getCountries = (data) => {
    const countries = [];
    data.forEach(element => {
        if (!countries.includes(element.location.toLowerCase())) {
            countries.push(element.location.toLowerCase());
        }
    });
    fillSelectLocation(countries);
}

const getSeniorities = (data) => {
    const seniorities = [];
    data.forEach(element => {
        if (!seniorities.includes(element.seniority.toLowerCase())) {
            seniorities.push(element.seniority.toLowerCase());
        }
    });
    fillSelectSeniority(seniorities);
}

const getCategories = (data) => {
    const categories = [];
    data.forEach(element => {
        if (!categories.includes(element.category.toLowerCase())) {
            categories.push(element.category.toLowerCase());
        }
    });
    fillSelectCategory(categories);
}

const getFilters = () => {
    const location = $("#location-select").value;
    const category = $("#category-select").value;
    const seniority = $("#seniority-select").value;
    showView("spinner");
    if (location !== "location") {
        const url = new URL("https://6524100aea560a22a4e957ae.mockapi.io/api/jobs");
        url.searchParams.append("location", location);
        fetch(url, {
            method: "GET",
            headers: { "content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    $("#container-cards").innerHTML = "";
                    cardJob(data);
                    showView("container-cards");
                    $("#search-bar").classList.remove("visually-hidden");
                }, 2000);
                $("#search-bar").classList.remove("visually-hidden");
            });
    } else if (category !== "category") {
        const url = new URL("https://6524100aea560a22a4e957ae.mockapi.io/api/jobs");
        url.searchParams.append("category", category);
        fetch(url, {
            method: "GET",
            headers: { "content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    $("#container-cards").innerHTML = "";
                    cardJob(data);
                    showView("container-cards");
                    $("#search-bar").classList.remove("visually-hidden");
                }, 2000);
                $("#search-bar").classList.remove("visually-hidden");
            });
    }
    if (seniority !== "seniority") {
        const url = new URL("https://6524100aea560a22a4e957ae.mockapi.io/api/jobs");
        url.searchParams.append("seniority", seniority);
        fetch(url, {
            method: "GET",
            headers: { "content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    $("#container-cards").innerHTML = "";
                    cardJob(data);
                    showView("container-cards");
                    $("#search-bar").classList.remove("visually-hidden");
                }, 2000);
                $("#search-bar").classList.remove("visually-hidden");
            });
    }
}

const createNewJob = async () => {
    const newJob = dataNewJob()
    try {
        const response = await fetch("https://6524100aea560a22a4e957ae.mockapi.io/api/jobs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newJob),
        });
        if (response.ok) {
            $('#container-cards').innerHTML = "";
            getJobs();
        } 
    } catch (error) {
        console.error("Error de red:", error);
    }
    showView('spinner');
    setTimeout(() => {
        showView('container-cards');
        $('#search-bar').classList.remove('visually-hidden');
    }, 2000);
    $('#search-bar').classList.remove('visually-hidden');
}

const viewDetails = async (id) => {
    try {
        showView('spinner');
        const response = await fetch(`https://6524100aea560a22a4e957ae.mockapi.io/api/jobs/${id}`);
        const data = await response.json();
        setTimeout(() => {
            showView('view-details');
            detailsCard(data);
        }, 2000);
    } catch (error) {
        console.error(error);
    }
};

const deleteJob = async (id) => {
    try {
        const response = await fetch(
            `https://6524100aea560a22a4e957ae.mockapi.io/api/jobs/${id}`,
            {
                method: 'DELETE',
            });
        $('#container-cards').innerHTML = "";
        getJobs();
    } catch (error) {
        console.error(error);
    }
}

const originalJobData = async (id) => {
    try {
        const response = await fetch(`https://6524100aea560a22a4e957ae.mockapi.io/api/jobs/${id}`);
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

const editJob = async (id) => {
    try {
        const response = await fetch(
            `https://6524100aea560a22a4e957ae.mockapi.io/api/jobs/${id}`,
            {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataEditJob()),
            });
        $('#container-cards').innerHTML = "";
        getJobs();
    } catch (error) {
        console.error(error);
    }
}

const initialize = () => {
    getJobs();
    initializeBtn();
}

window.onload = initialize();