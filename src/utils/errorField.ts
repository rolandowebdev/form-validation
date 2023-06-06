import { FieldError, Merge, FieldErrorsImpl } from 'react-hook-form'

export const addErrorIntoField = (
	errors: FieldError | Merge<FieldError, FieldErrorsImpl> | undefined
) => (errors ? { error: true } : { error: false })
