export const BASE_URL = 'https://cccpharma-back.herokuapp.com'

export const getToken = cookies => cookies && cookies.get('ccc-pharma-token')

export const getCurrentUser = token => fetch(
  `${BASE_URL}/user/loggedUser`,
  {
    method: 'get',
    headers: {
      Authorization: token
    }
  }
)

export const getProducts = (category = 'TODOS') => fetch(
  `${BASE_URL}/products${category !== 'TODOS' ? `/category/${category}` : '/'}`,
  {
    method: 'get'
  }
)

export const addProduct = ({
  name,
  barCode,
  manufacturer,
  category,
  price
}) => fetch(
  `${BASE_URL}/products/create`,
  {
    method: 'post',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name,
      barCode,
      manufacturer,
      category,
      price: parseFloat(price)
    })
  }
)

export const getProductBatches = productId => fetch(
  `${BASE_URL}/batches/product/${productId}`,
  {
    method: 'get'
  }
)

export const addProductBatch = (productId, batch) => {
  const { quantity, expirationDate } = batch
  return fetch(
    `${BASE_URL}/batches/create/?productId=${productId}&quantity=${quantity}&expirationDate=${expirationDate}`,
    {
      method: 'post'
    }
  )
}

export const deleteProductBatch = batchId => fetch(
  `${BASE_URL}/batches/delete/${batchId}`,
  {
    method: 'delete'
  }
)