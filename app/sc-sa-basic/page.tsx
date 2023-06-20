import { handleBasicFormSubmit } from '@/app/actions/form';

export default function ScSaBasic() {
  return (
    <div className='formWrapper'>
      <h2>Server Component - Server Action</h2>

      <p className='form-description'>
        This is a <strong>Server Component.</strong>
        There is no client JS code to handle form. (You can block JS in your
        browser and see that form still works.) It uses{' '}
        <strong>Server Actions</strong> to handle the form submission. If there
        is an invalid input, server will redirect to the another page with error
        message.
      </p>

      <form action={handleBasicFormSubmit} autoComplete='off'>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='email' />

        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' />

        <div className='flex'>
          <input type='checkbox' name='rememberMe' id='rememberMe' />
          <label htmlFor='rememberMe'>Remember me!</label>
        </div>

        <button type='submit'>Login</button>
      </form>
    </div>
  );
}
