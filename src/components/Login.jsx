import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { tokenLogin, LoginApi } from '../Apis/authApi'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const findRefreshToken = async () => {
    try {
      const tokenValidation = await tokenLogin()
      if (tokenValidation.ok) {
        if (tokenValidation.headers.get('roles') == 'Admin') {
          navigate('/dash/admin')
        } else navigate('/dash')
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

    const response = await LoginApi(loginData)
    ////////////////////
    if (response.ok) {
      localStorage.setItem('accessToken', response.headers.get('Authorization'))
      localStorage.setItem(
        'refreshToken',
        response.headers.get('Refresh-Token')
      )
      if (response.headers.get('roles') == 'Admin') navigate('/dash/admin')
      else if (response.headers.get('roles') == 'User') navigate('dash')
      else console.log('Not a valid user')
    } else {
      if (response.status == 401) {
        console.log(`Incorrect password`)
      } else if (response.status == 404) {
        console.log(`User not found`)
      } else console.log(`Something went wrong`)
    }
    ///////////////////
    if (response != null) {
    } else {
      console.log(`test`)
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
