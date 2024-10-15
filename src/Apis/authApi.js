export const tokenLogin = async () => {
  try {
    const storedToken = localStorage.getItem('refreshToken')
    if (storedToken != '') {
      const response = await fetch('http://localhost:8080/users/tokenLogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: storedToken,
        },
      })
      console.log(response)
      if (response.ok) {
        localStorage.setItem(
          'accessToken',
          response.headers.get('Authorization')
        )
        return response
      }
    }
    return null
  } catch (error) {}
}

export const LoginApi = async (loginData) => {
  try {
    const response = await fetch('http://localhost:8080/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })
    return response
  } catch (error) {
    // console.error('Error logging in:', error)
  }
}

export const registerUserApi = async (registerData) => {
  try {
    const response = await fetch('http://localhost:8080/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerData),
    })
    return response
  } catch (error) {
    // console.error('Error logging in:', error)
  }
}
