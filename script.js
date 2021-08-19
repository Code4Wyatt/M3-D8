window.onload = async () => {
    try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjllNzJkNTI2MjAwMTViNmRjYTIiLCJpYXQiOjE2MjkzNzE5NDIsImV4cCI6MTYzMDU4MTU0Mn0.Hkx4RB6mhAb2PvDCTK6p7W2Fe7IKxKfGllbs4jWQq84",
            }
        })
        const fetchedProducts = await response.json()
        displayProducts(fetchedProducts)
        //after the fetch, assing the result to a variable called how ever you want, then call displayProducts(theVariableYouCreated)
    } catch (err) {
        console.log(err)
    }
}

const displayProducts = (products) => {
    const productSection = document.querySelector(".productSection")

    if (products) {
        products.forEach((product) => {
          productSection.innerHTML += `<div class="row">
            <div class="col-md-4">
            <div class="card" style="width: 18rem">
              <img src="${product.imageUrl}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${product.price}</h5>
                <p class="card-text font-weight-bold">
                  ${product.name}
                </p>
                <p class="card-text font-weight-bolder">
                  ${product.brand}
                </p>
                <p class="card-text">
                  ${product.description}
                </p>
                <a href="#" class="btn btn-primary">${product.price}</a>
                <a class="btn btn-warning" href="backoffice.html?id=${product._id}">Edit</a>
              </div>
            </div>
          </div>
          </div>`
        })
    }

}