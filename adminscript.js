const handleSubmit = async (event) => {
    event.preventDefault();
    
    const url = "https://striveschool-api.herokuapp.com/api/product/"

    const myProduct = {
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        brand: document.getElementById("brand").value,
        imageUrl: document.getElementById("imageUrl").value,
        price: document.getElementById("price").value,

    }

    try {
        const response = await fetch(url, {
            method: "POST",
            authorization: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjllNzJkNTI2MjAwMTViNmRjYTIiLCJpYXQiOjE2MjkyODg5MzYsImV4cCI6MTYzMDQ5ODUzNn0.Tl6n-9pAhga8-0iWcJ7fXujL2_qBuBjxYWyQkxNbNc4",
            body: JSON.stringify(myProduct),
            headers: {
                "content-type": "application/json",
            }
        })
    } catch (err) {
        console.log(err)
    }
}