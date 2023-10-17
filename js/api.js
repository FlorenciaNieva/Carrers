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
        cardJob(data);
        showView('container-cards');
        $('#search-bar').classList.remove('visually-hidden');
    }, 3000);
    $('#search-bar').classList.remove('visually-hidden');
}

const viewDetails = async (id) => {
    try {
        showView('view-details');
        const response = await fetch(`https://6524100aea560a22a4e957ae.mockapi.io/api/jobs/${id}`);
        const data = await response.json();
        detailsCard(data);
    } catch (error) {
        console.error(error);
    }
};
