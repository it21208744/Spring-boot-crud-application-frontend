import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const API_URL = 'http://localhost:8080/users/login'
  const [refreshToken, setRefreshToken] = useState(null)
  const navigate = useNavigate()

  const findRefreshToken = async () => {
    try {
      const storedToken = localStorage.getItem('refreshToken')
      setRefreshToken(storedToken)

      const tokenValidation = await fetch(
        'http://localhost:8080/users/tokenLogin',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: storedToken,
          },
        }
      )
      if (tokenValidation.ok) {
        console.log('Token is valid')
        navigate('/dash')
      }
    } catch (error) {
      console.log('Error validating token:', error)
    }
  }

  useEffect(() => {
    findRefreshToken()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const loginData = {
      email: email,
      password: password,
    }

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      })
      if (response.ok) {
        console.log('Login successful:', response)
        localStorage.setItem(
          'accessToken',
          response.headers.get('Authorization')
        )
        localStorage.setItem(
          'refreshToken',
          response.headers.get('Refresh-Token')
        )
        navigate('/dash')
      } else {
        console.error('Login failed:', response.statusText)
      }
    } catch (error) {
      console.error('Error logging in:', error)
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login
