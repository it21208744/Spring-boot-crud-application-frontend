import styled from 'styled-components'

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    #ece9e6,
    #ffffff
  ); /* Smooth background gradient */
  padding: 2rem;

  .login-title {
    font-size: 36px; /* Larger, bold font */
    color: #333;
    text-align: center;
    margin-bottom: 2rem; /* Add space below title */
    font-weight: 600;
  }

  .login-form {
    background-color: white;
    padding: 3rem 2rem; /* More padding for a modern look */
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1); /* Softer, larger shadow */
    max-width: 400px;
    width: 100%;
    transition: transform 0.3s ease; /* Smooth transition on hover */
  }

  .login-form:hover {
    transform: translateY(-5px); /* Slight hover effect */
  }

  .form-label {
    font-size: 16px;
    color: #666;
    margin-bottom: 0.5rem;
    display: block;
    font-weight: 500; /* Stronger font weight */
  }

  .form-input {
    width: 100%;
    padding: 0.85rem;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 1.5rem;
    background-color: #fafafa;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }

  .form-input:focus {
    border-color: #007bff;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.3); /* Light glow effect */
    outline: none;
  }

  .error-message {
    color: #e63946;
    font-size: 14px;
    margin-bottom: 1rem;
    text-align: center;
  }

  .form-actions {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .submit-button {
    background-color: #007bff;
    color: white;
    padding: 0.85rem 2rem;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    width: 100%; /* Full-width button */
    margin-bottom: 1rem;
  }

  .submit-button:hover {
    background-color: #0056b3;
    transform: translateY(-2px); /* Button lift effect */
  }

  .register-link {
    color: #007bff;
    font-size: 14px;
    text-decoration: none;
    transition: color 0.3s ease;
    cursor: pointer;
  }

  .register-link:hover {
    color: #0056b3; /* Color change on hover */
    text-decoration: underline;
  }
`

export default Wrapper
