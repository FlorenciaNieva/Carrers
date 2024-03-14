// Get the Information from the Api
const getJobs = async () => {
    try {
        const response = await fetch("https://6524100aea560a22a4e957ae.mockapi.io/api/jobs");
        const data = await response.json();
        showView('spinner');
        $('#banner').classList.remove('visually-hidden');
        $('#search-bar').classList.remove('visually-hidden');
        setTimeout(() => {
            cardJob(data);
            showView('container-cards');
            $('#banner').classList.remove('visually-hidden');
            $('#search-bar').classList.remove('visually-hidden');
        }, 2000);
    } catch (error) {
        console.error(error);
    }
};

// Look for Cards that Pass the Location Filter and Displays them
const getFilterLocation = () => {
    const location = $("#location-select").value;
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
                    $('#banner').classList.remove('visually-hidden');
                    $("#search-bar").classList.remove("visually-hidden");
                }, 2000);
                $('#banner').classList.remove('visually-hidden');
                $("#search-bar").classList.remove("visually-hidden");
            });
    }
}

// Look for Cards that Pass the Seniority Filter and Displays them
const getFilterSeniority = () => {
    const seniority = $("#seniority-select").value;
    showView("spinner");
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
                    $('#banner').classList.remove('visually-hidden');
                    $("#search-bar").classList.remove("visually-hidden");
                }, 2000);
                $('#banner').classList.remove('visually-hidden');
                $("#search-bar").classList.remove("visually-hidden");
            });
    }
}

// Look for Cards that Pass the Category Filter and Displays them
const getFilterCategory = () => {
    const category = $("#category-select").value;
    showView("spinner");
    if (category !== "category") {
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
                    $('#banner').classList.remove('visually-hidden');
                    $("#search-bar").classList.remove("visually-hidden");
                }, 2000);
                $('#banner').classList.remove('visually-hidden');
                $("#search-bar").classList.remove("visually-hidden");
            });
    } 
}

// Pass the Functions to the Search Button
const getFilters = () => {
    getFilterLocation();
    getFilterSeniority();
    getFilterCategory();
}

// Create a New Job Card
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
            clearHome()
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

// Get the Information of the Selected Card and Display it
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

// Delete the Selected Job
const deleteJob = async (id) => {
    try {
        const response = await fetch(
            `https://6524100aea560a22a4e957ae.mockapi.io/api/jobs/${id}`,
            {
                method: 'DELETE',
            });
        clearHome();
        getJobs();
    } catch (error) {
        console.error(error);
    }
}

// Get the Information of the Selected Card
const originalJobData = async (id) => {
    try {
        const response = await fetch(`https://6524100aea560a22a4e957ae.mockapi.io/api/jobs/${id}`);
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

// Edit Job
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
        clearHome();
        getJobs();
    } catch (error) {
        console.error(error);
    }
}

// Initialize Functions
const initialize = () => {
    getJobs();
    initializeEvents();
}

window.onload = initialize();