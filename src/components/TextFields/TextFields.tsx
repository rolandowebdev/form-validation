import { FormControl, TextField, InputProps } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { FormField } from '../../types/user'
import { addErrorIntoField } from '../../utils/errorField'
import { ErrorMessage } from '..'

type TextFieldsProps = {
	label: string
	inputProps?: InputProps
	name: FormField
}

export const TextFields: React.FC<TextFieldsProps> = ({
	label,
	inputProps,
	name,
}: TextFieldsProps) => {
	const {
		control,
		formState: { errors },
	} = useFormContext()
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
