'use client';

import { useState } from 'react';

export default function CcSaBasicForm({
  handleBasicFormValidationSubmit,
}: {
  handleBasicFormValidationSubmit: any;
}) {
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
  }>({});
  const [success, setSuccess] = useState('');

  async function action(formData: FormData) {
    setErrors({});
    setSuccess('');

    const res = await handleBasicFormValidationSubmit(formData);

    if (res.errors) {
      setErrors(res.errors);
    } else setSuccess(res.success!);
  }

  return (
    <div className='formWrapper'>
      <h2>Client Component - Server Action </h2>

      <p className='form-description'>
        This is a <strong>Client Component.</strong>
        It uses <strong>Server Action</strong> to handle the form submission. If
        there is an invalid input, server will return error and React.useState
        will be updated with error message, then errors rendered in UI.
      </p>

      {success ? (
        <p className='success'>{success}</p>
      ) : (
        <form action={action} autoComplete='off'>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='email' />
          {errors.email && <p className='error'>{errors.email}</p>}

          <label htmlFor='password'>Password</label>
          <input type='password' name='password' id='password' />
          {errors.password && <p className='error'>{errors.password}</p>}

          <div className='flex'>
            <input type='checkbox' name='rememberMe' id='rememberMe' />
            <label htmlFor='rememberMe'>Remember me!</label>
          </div>

          <button type='submit'>Login</button>
        </form>
      )}
    </div>
  );
}
