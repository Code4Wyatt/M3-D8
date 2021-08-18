window.onload = async () => {
    try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/product/");
        "authorisation": bearer 
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