const handleSubmit = async (event) => {
    event.preventDefault()
    
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
            
            body: JSON.stringify(myProduct),
            headers: {
                "Content-Type": "application/json",
                authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjllNzJkNTI2MjAwMTViNmRjYTIiLCJpYXQiOjE2MjkzNzE5NDIsImV4cCI6MTYzMDU4MTU0Mn0.Hkx4RB6mhAb2PvDCTK6p7W2Fe7IKxKfGllbs4jWQq84",
            }
        })
    } catch (err) {
        console.log(err)
    }
}