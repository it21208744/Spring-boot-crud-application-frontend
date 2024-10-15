import axios from 'axios'
export const viewAllUsersApi = async () => {
  const authToken = localStorage.getItem('accessToken')
  const response = await axios.get('http://localhost:8080/users', {
    headers: {
      Authorization: authToken,
    },
  })
  //   console.log(response.data)
  return response.data
}

export const deleteUser = async (id) => {
  const authToken = localStorage.getItem('accessToken')

  const response = await axios.delete(`http://localhost:8080/users/${id}`, {
    headers: {
      Authorization: authToken,
    },
  })

  return response
}

export const handleUpdate = async (id, firstName, lastName) => {
  const authToken = localStorage.getItem('accessToken')
  console.log(firstName)
  const response = await axios.put(
    `http://localhost:8080/users/${id}`,
    {
      // URL with a specific resource ID
      firstName: firstName,
      lastName: lastName,
    },
    {
      headers: {
        'Content-Type': 'application/json', // Specifies the type of the request body
        Authorization: authToken, // Example of an authorization token
        'Custom-Header': 'custom-value', // Additional custom header
      },
    }
  )

  return response
}
