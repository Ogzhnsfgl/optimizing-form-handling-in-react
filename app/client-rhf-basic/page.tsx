'use client';

import { useForm, FieldError } from 'react-hook-form';
import RenderCounter from '../components/render-counter';
import { useEffect } from 'react';

let renderCount = 0;

const ReactHookFormBasic = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmitHandler = (data: FormData) => {
    const formData: FormData = {
      email: data.email,
      password: data.password,
      rememberMe: data.rememberMe || false,
    };
    // Post request here.
  };

  useEffect(() => {
    return () => {
      renderCount = 0;
    };
  }, []);

  renderCount += 1;

  return (
    <div className='formWrapper'>
      <h2>Hook Form</h2>

      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          id='email'
          autoComplete='off'
          {...register('email', { required: 'Email is required.' })}
        />
        {errors.email && (
          <p className='error'>
            {(errors.email as FieldError)?.message || 'Email is required.'}
          </p>
        )}

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          autoComplete='off'
          {...register('password', { required: 'Password is required.' })}
        />
        {errors.password && (
          <p className='error'>
            {(errors.password as FieldError)?.message ||
              'Password is required.'}
          </p>
        )}

        <div className='flex'>
          <input type='checkbox' id='rememberMe' {...register('rememberMe')} />
          <label htmlFor='rememberMe'>Remember me!</label>
        </div>

        <button type='submit'>Login</button>
      </form>
      <RenderCounter count={renderCount} />
    </div>
  );
};

export default ReactHookFormBasic;

interface FormData {
  email: string;
  password: string;
  rememberMe: boolean;
}
