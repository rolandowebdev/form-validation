import { FormControl, TextField, InputProps } from '@mui/material'
import { Control, Controller, FieldErrors } from 'react-hook-form'
import { FormField, User } from '../../types/user'
import { addErrorIntoField } from '../../utils/errorField'
import { ErrorMessage } from '..'

type TextFieldsProps = {
	label: string
	inputProps?: InputProps
	control: Control<User>
	name: FormField
	errors: FieldErrors
}

export const TextFields = ({
	label,
	inputProps,
	control,
	name,
	errors,
}: TextFieldsProps) => {
	return (
		<FormControl fullWidth sx={{ mb: '1rem' }}>
			<Controller
				name={name}
				control={control}
				render={({ field }) => (
					<TextField
						required
						variant='filled'
						label={label}
						InputProps={inputProps}
						sx={{ height: '54px' }}
						{...addErrorIntoField(errors[name])}
						{...field}
					/>
				)}
			/>
			{errors[name] ? <ErrorMessage message={errors[name]?.message} /> : null}
		</FormControl>
	)
}
