import { Checkbox, FormControlLabel } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { FormField } from '../../types/user'
import { ErrorMessage } from '..'

type CheckboxProps = {
	name: FormField
}

export const CheckboxFields: React.FC<CheckboxProps> = ({
	name,
}: CheckboxProps) => {
	const {
		control,
		formState: { errors },
	} = useFormContext()
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
