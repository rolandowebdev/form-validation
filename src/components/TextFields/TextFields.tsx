import { FormControl, TextField, InputProps } from '@mui/material'
import { Control, Controller } from 'react-hook-form'
import { FormField, User } from '../../types/user'

type TextFieldsProps = {
	label: string
	inputProps?: InputProps
	control: Control<User>
	name: FormField
}

export const TextFields = ({
	label,
	inputProps,
	control,
	name,
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
						{...field}
					/>
				)}
			/>
		</FormControl>
	)
}
