import { redirect } from 'next/navigation';

export const validateForm = (form: FormData) => {
  let errors = {};

  if (!form.get('email')) {
    errors = { ...errors, email: 'Email is required' };
  }

  if (!form.get('password')) {
    errors = { ...errors, password: 'Password is required' };
  }

  return errors;
};

export const handleBasicFormSubmit = async (form: FormData) => {
  'use server';
  const errors = validateForm(form);

  if (Object.keys(errors).length > 0) {
    redirect('/submit-error');
  }

  redirect('/submit-success');
};

export const handleBasicFormValidationSubmit = async (form: FormData) => {
  'use server';
  const errors = validateForm(form);

  if (Object.keys(errors).length > 0) {
    return {
      errors,
    };
  }

  return {
    success: `Form submitted successfully`,
  };
};
