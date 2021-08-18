window.onload = async () => {
    try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/product/");
        method: 'GET',
    authorisation: bearer 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjllNzJkNTI2MjAwMTViNmRjYTIiLCJpYXQiOjE2MjkyODg5MzYsImV4cCI6MTYzMDQ5ODUzNn0.Tl6n-9pAhga8-0iWcJ7fXujL2_qBuBjxYWyQkxNbNc4,
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayData(data);
            const input = document.getElementById("search-input");
            input.addEventListener("input", function (e) {
                const selectedOption = document.getElementById("user-info-select").value;
                const filtered = data.filter((user) =>
                    user[selectedOption].includes(e.target.value)
                );
                console.log(filtered);
            });
        }
    } catch (error) {
        console.log(error);
    }
};