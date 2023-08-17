import { useReducer, useEffect } from "react";

type FormField = {
  value: unknown,
  invalid: Boolean,
  dirty: Boolean,
};

type FormModel = Record<string, unknown>;
type FormState = Record<string, FormField>;

const useForm = ({ formModel }: { formModel: FormModel}) => {

  const formReducer = (state: FormState, action: Record<string, unknown>) => {
    switch(action.type) {
      default: {
        console.log("reduced")
        return state;
      }
    }
  };
  const initFormState = (formModel: FormModel): FormState => {
    return Object.entries(formModel).reduce((state, [key, value]) => {
      return { ...state, [key]: { value, invalid: false, dirty: false }}
    }, {});
  };
  const [formState, dispatch] = useReducer(formReducer, formModel, initFormState)

  const validate = () => {
    dispatch({ type: 'validate'});
  };

  useEffect(() => {
    console.log("useForm effect");

  }, [formModel])

  return { formState, validate}
}

export default useForm;