const createCards = async () => {
    try {
        const response = await fetch("https://6524100aea560a22a4e957ae.mockapi.io/api/jobs");
        const data = await response.json();
        cardJob(data);
    } catch (error) {
        console.log(error);
    }
};

createCards();

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
            createCards();
        } 
    } catch (error) {
        console.error("Error de red:", error);
    } 
    showView('container-cards');
}