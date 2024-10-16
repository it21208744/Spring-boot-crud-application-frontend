import axios from 'axios'
import { tokenLogin } from './authApi'

export const viewAllUsersApi = async () => {
  const authToken = localStorage.getItem('accessToken')

  try {
    const response = await axios.get('http://localhost:8080/users', {
      headers: {
        Authorization: authToken,
      },
    })
    console.log(response)

    if (response.status == 200) {
      return response.data
    }
  } catch (error) {
    if (error.response && error.response.status == 401) {
      const authToken = await tokenLogin()
      if (authToken != null) {
        const response = await axios.get('http://localhost:8080/users', {
          headers: {
            Authorization: authToken,
          },
        })
        return response.data
      } else {
        return null
        // console.log(`need to login again`)
      }
    } else {
      console.error('An error occurred:', error)
    }
  }
}

export const deleteUser = async (id) => {
  /////////////////////////////////
  const authToken = localStorage.getItem('accessToken')

  try {
    const response = await axios.delete(`http://localhost:8080/users/${id}`, {
      headers: {
        Authorization: authToken,
      },
    })
    console.log(response)

    if (response.status == 200) {
      return response
    }
  } catch (error) {
    if (error.response && error.response.status == 401) {
      const authToken = await tokenLogin()
      if (authToken != null) {
        const response = await axios.get('http://localhost:8080/users', {
          headers: {
            Authorization: authToken,
          },
        })
        return response.data
      } else {
        return null
        // console.log(`need to login again`)
      }
    } else {
      console.error('An error occurred:', error)
    }
  }
  /////////////////////////////////
}

export const handleUpdate = async (id, firstName, lastName) => {
  /////////////////////////////////////////////////////////////////////////////////
  const authToken = localStorage.getItem('accessToken')

  try {
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

    if (response.status == 200) {
      return response
    }
  } catch (error) {
    if (error.response && error.response.status == 401) {
      const authToken = await tokenLogin()
      if (authToken != null) {
        const response = await axios.get('http://localhost:8080/users', {
          headers: {
            Authorization: authToken,
          },
        })
        return response.data
      } else {
        return null
        // console.log(`need to login again`)
      }
    } else {
      console.error('An error occurred:', error)
    }
  }
  /////////////////////////////////////////////////////////////////////////////////
}
