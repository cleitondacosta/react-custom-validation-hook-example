import { useState, useEffect } from 'react';
import validatePassword from '../validations/password';

export default function usePassword() {
  const [password, setPassword] = useState('');
  const [passwordErrors, setPasswordErrors] = useState([]);

  useEffect(() => {
    const errorMessages = validatePassword(password);
    setPasswordErrors(errorMessages);
  }, [password]);

  return { password, setPassword, passwordErrors };
}
