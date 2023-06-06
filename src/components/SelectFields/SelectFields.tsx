import { FormControl, MenuItem, TextField } from '@mui/material'
import { Control, Controller, FieldErrors } from 'react-hook-form'
import { Country } from '../../types/country'
import { FormField, User } from '../../types/user'
import { addErrorIntoField } from '../../utils/errorField'
import { ErrorMessage } from '..'

type SelectFieldsProps = {
	label: string
	countries: Country[]
	control: Control<User>
	name: FormField
	errors: FieldErrors
}

export const SelectFields = ({
	label,
	countries,
	control,
	name,
	errors,
}: SelectFieldsProps) => {
	return (
		<FormControl fullWidth sx={{ mb: '1rem' }}>
			<Controller
				name={name}
				control={control}
				render={({ field }) => (
					<TextField
						required
						select
						variant='filled'
						label={label}
						{...field}
						{...addErrorIntoField(errors[name])}>
						{countries.map((option: Country) => (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						))}
					</TextField>
				)}
			/>
			{errors[name] ? <ErrorMessage message={errors[name]?.message} /> : null}
		</FormControl>
	)
}
