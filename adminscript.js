const params = new URLSearchParams(location.search)
const id = params.get('id')

window.onload = function () {

    if (id) document.querySelector("#page-title").innerHTML = "Edit product"
    getProductDetails(id)

}

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


async function deleteProduct() {
      
      try {
          const response = await fetch(url + id, {
              method: 'DELETE',
              headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjllNzJkNTI2MjAwMTViNmRjYTIiLCJpYXQiOjE2MjkzNzE5NDIsImV4cCI6MTYzMDU4MTU0Mn0.Hkx4RB6mhAb2PvDCTK6p7W2Fe7IKxKfGllbs4jWQq84",
            } })

        if (!response.ok) throw new Error("Failed to delete product")

        alert("All good - product deleted successfully.")
        location.assign("index.html")
      } catch (error) {
        alert(error.message)
      }
    
}
    
async function getProductDetails(id) {
     
      try {
        const response = await fetch(url + id, {
          headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjllNzJkNTI2MjAwMTViNmRjYTIiLCJpYXQiOjE2MjkzNzE5NDIsImV4cCI6MTYzMDU4MTU0Mn0.Hkx4RB6mhAb2PvDCTK6p7W2Fe7IKxKfGllbs4jWQq84",
            }
        })
        const product = await response.json()

        console.log(product)
        console.log(Object.keys(product))

        Object.keys(product).forEach(key => {
          const field = document.querySelector(`#${key}`)
          if (field) field.value = product[key]
        })
      } catch (error) {
        alert(error)
      }
    }
