window.onload = async () => {
    try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/product/");
        method: 'GET',
    headers: {
                "Content-Type": "application/json",
                authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjllNzJkNTI2MjAwMTViNmRjYTIiLCJpYXQiOjE2MjkzNzE5NDIsImV4cCI6MTYzMDU4MTU0Mn0.Hkx4RB6mhAb2PvDCTK6p7W2Fe7IKxKfGllbs4jWQq84",
            }
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