const createCards = async () => {
    try {
        const respuesta = await fetch("https://6524100aea560a22a4e957ae.mockapi.io/api/jobs");
        const data = await respuesta.json();
    } catch (error) {
        console.log(error);
    }
};

createCards();