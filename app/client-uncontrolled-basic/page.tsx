'use client';

import { useEffect, useRef, useState } from 'react';
import RenderCounter from '../components/render-counter';

let renderCount = 0;

const UncontrolledLoginForm = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const rememberMeCheckboxRef = useRef<HTMLInputElement>(null);

  const [errors, setErrors] = useState<Errors>({});

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors({});

    const email = emailInputRef.current?.value;
    const password = passwordInputRef.current?.value;
    const rememberMe = rememberMeCheckboxRef.current?.checked;

    const validationErrors = validateForm(email, password);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const formData = {
      email,
      password,
      rememberMe,
    };

    // Post request here.
  };

  const validateForm = (email?: string, password?: string) => {
    const errors: Errors = {};

    if (!email) {
      errors.email = 'Email is required.';
    }

    if (!password) {
      errors.password = 'Password is required.';
    }

    return errors;
  };

  useEffect(() => {
    return () => {
      renderCount = 0;
    };
  }, []);

  renderCount += 1;

  return (
    <div className='formWrapper'>
      <h2>Uncontrolled Form</h2>

      <form onSubmit={onSubmitHandler}>
        <label htmlFor='email'>Email</label>
        <input
          ref={emailInputRef}
          type='text'
          name='email'
          id='email'
          autoComplete='off'
        />
        {errors.email && <p className='error'>{errors.email}</p>}

        <label htmlFor='password'>Password</label>
        <input
          ref={passwordInputRef}
          type='password'
          name='password'
          id='password'
          autoComplete='off'
        />
        {errors.password && <p className='error'>{errors.password}</p>}

        <div className='flex'>
          <input
            ref={rememberMeCheckboxRef}
            type='checkbox'
            name='rememberMe'
            id='rememberMe'
          />
          <label htmlFor='rememberMe'>Remember me!</label>
        </div>

        <button type='submit'>Login</button>
      </form>
      <RenderCounter count={renderCount} />
    </div>
  );
};

export default UncontrolledLoginForm;

interface Errors {
  email?: string;
  password?: string;
}
