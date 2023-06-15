import { FormControl, MenuItem, TextField } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { ErrorMessage } from '..'
import { Country } from '../../types/country'
import { FormField } from '../../types/user'
import { addErrorIntoField } from '../../utils/errorField'

type SelectFieldsProps = {
	label: string
	countries: Country[]
	name: FormField
}

export const SelectFields: React.FC<SelectFieldsProps> = ({
	label,
	countries,
	name,
}: SelectFieldsProps) => {
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
