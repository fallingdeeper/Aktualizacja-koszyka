const productsGet = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()

    return data
  } catch (error) {
    console.log(error)
    return false
  }
}

export { productsGet }
