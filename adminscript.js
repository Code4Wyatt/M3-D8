 const handleSubmit = async (event) => {
            event.preventDefault()


            const url = "https://striveschool-api.herokuapp.com/api/account/login"

            const myEvent = {
                name: document.getElementById("name").value,
                description: document.getElementById("description").value,
                brand: document.getElementById("brand").value,
                price: document.getElementById("price").value,
                imageUrl: document.getElementById("imageUrl").value,
            }

            try {
                const response = await fetch(url, {
                    method: "POST",
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjllNzJkNTI2MjAwMTViNmRjYTIiLCJpYXQiOjE2MjkyODg5MzYsImV4cCI6MTYzMDQ5ODUzNn0.Tl6n-9pAhga8-0iWcJ7fXujL2_qBuBjxYWyQkxNbNc4"
                    body: JSON.stringify(myEvent),
                    headers: {
                        "Content-Type": "application/json",
                    }
                })

                if (response.ok) {
                    const respEvent = await response.json()
                    alert("Product was created successfully! " + respEvent._id)
                } else {
                    if (response.status >= 400 && response.status < 500) {                   // if status of response is within 400 and 500 (user error), throw below error
                        throw new Error("User generated error, verify the data that you are sending!")
                    } else if (response.status >= 500 && response.status < 600) {           // if status of response is within 500 and 600 (server error), throw below error
                        throw new Error("Server generated error, contact the admin to fix this problem.")
                    }
                }

                console.log("no exception was thrown")

            } catch (err) {
                alert(err.message)
            } 

            console.log("last thing")

        }