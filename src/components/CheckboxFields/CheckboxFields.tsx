import { Checkbox, FormControlLabel } from '@mui/material'
import { Control, Controller } from 'react-hook-form'
import { FormField, User } from '../../types/user'

type CheckboxProps = {
	control: Control<User>
	name: FormField
}

export const CheckboxFields = ({ control, name }: CheckboxProps) => {
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
		</>
	)
}
