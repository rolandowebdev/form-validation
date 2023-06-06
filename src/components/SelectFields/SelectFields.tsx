import { FormControl, MenuItem, TextField } from '@mui/material'
import { Control, Controller } from 'react-hook-form'
import { Country } from '../../types/country'
import { FormField, User } from '../../types/user'

type SelectFieldsProps = {
	label: string
	countries: Country[]
	control: Control<User>
	name: FormField
}

export const SelectFields = ({
	label,
	countries,
	control,
	name,
}: SelectFieldsProps) => {
	return (
		<FormControl fullWidth sx={{ mb: '1rem' }}>
			<Controller
				name={name}
				control={control}
				render={({ field }) => (
					<TextField required select variant='filled' label={label} {...field}>
						{countries.map((option: Country) => (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						))}
					</TextField>
				)}
			/>
		</FormControl>
	)
}
