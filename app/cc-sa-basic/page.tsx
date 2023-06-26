import { handleBasicFormValidationSubmit } from '@/app/actions/form';
import ServerActionBasicValidationForm from './components/form';

export default function ServerActionBasic() {
  return (
    <ServerActionBasicValidationForm
      handleBasicFormValidationSubmit={handleBasicFormValidationSubmit}
    />
  );
}
