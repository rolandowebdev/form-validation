import { Checkbox, FormControlLabel } from '@mui/material'
import { Control, Controller, FieldErrors } from 'react-hook-form'
import { FormField, User } from '../../types/user'
import { ErrorMessage } from '..'

type CheckboxProps = {
	control: Control<User>
	name: FormField
	errors: FieldErrors
}

export const CheckboxFields = ({ control, name, errors }: CheckboxProps) => {
	return (
		<>
			<Controller
				name={name}
				control={control}
				render={({ field }) => (
					<FormControlLabel
						control={<Checkbox {...field} />}
						label='I agree to Form Validation terms and privacy policy'
					/>
				)}
			/>
			{errors[name] ? <ErrorMessage message={errors[name]?.message} /> : null}
		</>
	)
}
