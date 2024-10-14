export const tokenLogin = async () => {
  try {
    const storedToken = localStorage.getItem('refreshToken')
    return await fetch('http://localhost:8080/users/tokenLogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: storedToken,
      },
    })
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
    if (response.ok) {
      localStorage.setItem('accessToken', response.headers.get('Authorization'))
      localStorage.setItem(
        'refreshToken',
        response.headers.get('Refresh-Token')
      )
      return response.headers.get('roles')
    } else {
      console.error('Login failed:', response.statusText)
    }
  } catch (error) {
    console.error('Error logging in:', error)
  }
}
