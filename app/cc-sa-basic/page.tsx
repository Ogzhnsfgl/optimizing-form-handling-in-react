import { handleBasicFormValidationSubmit } from "@/app/actions/form";
import ServerActionBasicValidationForm from "../components/forms/server-action-basic-validation-form";

export default function ServerActionBasic() {

    return (
        <ServerActionBasicValidationForm handleBasicFormValidationSubmit={handleBasicFormValidationSubmit} />
    )
}
