import { useReducer, Reducer } from "react";

enum ActionTypes {
  UPDATE = "UPDATE",
}

type FormValidators<T> = {
  [fieldName in keyof T]?: {
    [validatorName: string]: (value: T[fieldName], state: FormState<T>) => boolean;
  };
};

type FormAction<T> = { type: ActionTypes.UPDATE, fieldName: keyof T, value: T[keyof T] };
type FormField<T> = {
  value: T,
  invalid: boolean,
  dirty: boolean,
  errors: string[],
}

export type FormState<T> = {
  [fieldName in keyof T]: FormField<T[fieldName]>;
}

type FormHandler<T> = FormState<T> & { set: (fieldName: keyof T) => (value: T[keyof T]) => void };


const initFormState = <T extends {},>(initialValues: T): FormState<T> => {
  return Object.entries(initialValues).reduce((state, [fieldName, value]) => {
    return { ...state, [fieldName]: { value, invalid: false, dirty: false, errors: [] } };
  }, {}) as FormState<T>;
}

const updateState = <T,>(state: FormState<T>, action: FormAction<T>, validators: FormValidators<T>): FormState<T> => {
  const { fieldName, value } = action;
  const fieldValidtors = validators[fieldName] ?? {};

  const errors = Object.entries(fieldValidtors).reduce((errs: string[], [vname, v]) => {
    return v(value, state) ? errs : [...errs, vname];
  }, []);

  return {
    ...state,
    [fieldName]: {
      value,
      invalid: errors.length > 0,
      dirty: true,
      errors,
    }
  };
}

const useForm = <T extends {},>(initialValues: T, validators: FormValidators<T> = {}): FormHandler<T> => {
  // @TODO: extract the reducer. As it is it cant scale without cod polution.
  const [state, stateDispatch] = useReducer<React.Reducer<FormState<T>, FormAction<T>>, T>(
    (state, action) => {
      const { type } = action;
      switch(type) {
        case ActionTypes.UPDATE:
          return updateState<T>(state, action, validators);
        default:
          return state;
      }
    },
    initialValues,
    initFormState,
  );

  const set = (fieldName: keyof T) => (value: T[keyof T]) => {
    stateDispatch({ type: ActionTypes.UPDATE, value, fieldName });
  };

  return { ...state, set };
}

export { useForm }