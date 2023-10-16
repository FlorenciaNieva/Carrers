const getJobs = async () => {
    try {
        showView('spinner')
        const response = await fetch("https://6524100aea560a22a4e957ae.mockapi.io/api/jobs");
        const data = await response.json();
        setTimeout(() => {
            cardJob(data);
            showView('container-cards');
        }, 3000);

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
    showView('spinner')
    setTimeout(() => {
        showView('container-cards');
    }, 3000);
    ;
}