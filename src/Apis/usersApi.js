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
  console.log(id)
  const response = await axios.delete(`http://localhost:8080/users/${id}`, {
    headers: {
      Authorization: authToken,
    },
  })

  return response
}
