import axios from 'axios'
export const viewAllUsersApi = async () => {
  const authToken = localStorage.getItem('accessToken')
  const response = await axios.get('http://localhost:8080/users', {
    headers: {
      Authorization: authToken,
    },
  })

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
      firstName: firstName,
      lastName: lastName,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: authToken,
        'Custom-Header': 'custom-value',
      },
    }
  )

  return response
}
