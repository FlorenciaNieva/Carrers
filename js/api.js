const getJobs = async () => {
    try {
        showView('spinner');
        const response = await fetch("https://6524100aea560a22a4e957ae.mockapi.io/api/jobs");
        const data = await response.json();
        setTimeout(() => {
            cardJob(data);
            showView('container-cards');
            $('#search-bar').classList.remove('visually-hidden')
        }, 3000);
        $('#search-bar').classList.remove('visually-hidden')
    } catch (error) {
        console.error(error);
    }
};

getJobs();

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
    }, 3000);
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
        }, 3000);
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