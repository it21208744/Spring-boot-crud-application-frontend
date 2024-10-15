import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerUserApi } from '../Apis/authApi'
import Wrapper from '../assets/Wrappers/Register' // Ensure the correct path for the Wrapper
import { toast } from 'react-toastify'

const Register = () => {
  const [firstName, setFirstName] = useState('') // State for first name
  const [lastName, setLastName] = useState('') // State for last name
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('') // State for error message
  const [successMessage, setSuccessMessage] = useState('') // State for success message

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage('') // Reset the error message on new submit
    setSuccessMessage('') // Reset the success message on new submit

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match')
      return
    }

    const registerData = {
      email: email,
      password: password,
      firstName: firstName, // Include first name
      lastName: lastName, // Include last name
    }

    try {
      const response = await registerUserApi(registerData)

      if (response.ok) {
        toast.success('Registration successful! Please log in.')
        navigate('../') // Navigate to login page after success
      } else {
        if (response.status === 409) {
          setErrorMessage('User already exists')
        } else {
          setErrorMessage('Something went wrong during registration')
        }
      }
    } catch (error) {
      console.log('Error during registration:', error)
      setErrorMessage('Something went wrong, please try again later')
    }
  }

  return (
    <Wrapper>
      <h2 className="register-title">Register</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <label htmlFor="firstName" className="form-label">
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          className="form-input"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          className="form-input"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="confirmPassword" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          className="form-input"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        {/* Display error message if exists */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        {/* Display success message if exists */}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <div className="form-actions">
          <button type="submit" className="submit-button">
            Register
          </button>
          <a
            className="login-link" // Added a class for styling
            onClick={() => navigate('../')}
          >
            Already have an account? Login here.
          </a>
        </div>
      </form>
    </Wrapper>
  )
}

export default Register
