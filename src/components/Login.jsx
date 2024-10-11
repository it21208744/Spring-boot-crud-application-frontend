import { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const API_URL = 'http://localhost:8080/users/login'

  const handleSubmit = async (e) => {
    e.preventDefault()
    const loginData = {
      email: email,
      password: password,
    }

    try {
      const response = await fetch('http://localhost:8080/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Serialize the loginData object to a JSON string
        body: JSON.stringify(loginData),
      })

      // const data = await response.json()
      console.log(response.headers.get('Authorization'))
      console.log(response.headers.get('Refresh-Token'))
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
