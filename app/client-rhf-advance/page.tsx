'use client';

import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import RenderCounter from '../components/render-counter';

let renderCount = 0;

const ReactHookFormAdvance = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    register,
  } = useForm<FormValues>({
    mode: 'onSubmit',
    reValidateMode: 'onBlur',
    defaultValues: {
      watchedInput: 'oguzhan',
      defaultListbox: 'option3',
      showAdditionalListbox: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  const showAdditionalListbox = watch('showAdditionalListbox');
  const watchedInputValue = watch('watchedInput');
  const watchedAdditionalListboxValue = watch('additionalListbox');

  const handleReset = () => {
    reset({
      showAdditionalListbox: false,
      watchedInput: 'oguzhan',
      defaultListbox: 'option3',
    });
  };

  useEffect(() => {
    return () => {
      renderCount = 0;
    };
  }, []);

  renderCount += 1;

  return (
    <div className='formWrapper'>
      <h2>React Hook Form Complex</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='uncontrolledInput'>Uncontrolled Input</label>
        <input
          type='text'
          id='uncontrolledInput'
          {...register('uncontrolledInput', {
            required: 'This field is required.',
            minLength: {
              value: 5,
              message: 'Minimum length should be 5 characters.',
            },
          })}
        />
        {errors.uncontrolledInput && (
          <p className='error'>{errors.uncontrolledInput.message}</p>
        )}

        <label htmlFor='watchedInput'>Watched Input</label>
        <input
          type='text'
          id='watchedInput'
          {...register('watchedInput', { required: true })}
        />
        {errors.watchedInput && (
          <p className='error'>This field is required.</p>
        )}
        <div>
          <p>Watched Input Value: {watchedInputValue}</p>
        </div>

        <label htmlFor='defaultListbox'>Basic Listbox</label>
        <Controller
          name='defaultListbox'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <select {...field} className='listbox'>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </select>
          )}
        />
        {errors.defaultListbox && (
          <p className='error'>This field is required.</p>
        )}

        <label htmlFor='showAdditionalListbox'>Show Additional Listbox</label>
        <input
          type='checkbox'
          id='showAdditionalListbox'
          {...register('showAdditionalListbox')}
        />

        {showAdditionalListbox && (
          <>
            <label htmlFor='additionalListbox'>Additional Listbox</label>
            <Controller
              name='additionalListbox'
              control={control}
              defaultValue=''
              rules={{ required: true }}
              render={({ field }) => (
                <select {...field} className='listbox'>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </select>
              )}
            />
            {errors.additionalListbox && (
              <p className='error'>This field is required.</p>
            )}
            <div>
              <p>Watched Input Value: {watchedAdditionalListboxValue}</p>
            </div>
          </>
        )}

        <RenderCounter count={renderCount} />

        <button type='submit'>Submit</button>
        <button type='button' className='reset' onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default ReactHookFormAdvance;

type FormValues = {
  uncontrolledInput: string;
  watchedInput: string;
  defaultListbox: string;
  showAdditionalListbox: boolean;
  additionalListbox: string;
};
