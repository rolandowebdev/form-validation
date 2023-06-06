import { Box, Avatar, Typography, InputAdornment, Button } from '@mui/material'
import { HowToReg } from '@mui/icons-material'
import { CheckboxFields, SelectFields, TextFields } from '../../components'
import { Country } from '../../types/country'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

const countries: Country[] = [
	{
		value: 'Indonesia',
		label: 'indonesia',
	},
	{
		value: 'US',
		label: 'us',
	},
	{
		value: 'India',
		label: 'india',
	},
	{
		value: 'Jepang',
		label: 'jepang',
	},
]

export const Register = () => {
	const { handleSubmit, control } = useForm({
		defaultValues: {
			fullName: '',
			email: '',
			country: '',
			mobile: '',
			password: '',
			confirmPassword: '',
			privacy: false,
		},
	})

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		console.log(data)
	}

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',

				alignItems: 'center',
			}}>
			<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
				<HowToReg />
			</Avatar>
			<Typography component='h1'>Sign Up</Typography>
			<Box
				noValidate
				component='form'
				onSubmit={handleSubmit(onSubmit)}
				sx={{ width: '100%', mt: '1rem' }}>
				<TextFields control={control} name='fullName' label='Full Name' />
				<TextFields control={control} name='email' label='Email' />
				<TextFields
					control={control}
					name='mobile'
					label='Mobile Phone'
					inputProps={{
						startAdornment: (
							<InputAdornment position='start'>+91</InputAdornment>
						),
						type: 'number',
					}}
				/>
				<SelectFields
					control={control}
					name='country'
					label='Country'
					countries={countries}
				/>
				<TextFields name='password' control={control} label='Password' />
				<TextFields
					name='confirmPassword'
					control={control}
					label='Confirm Password'
				/>
				<CheckboxFields name='privacy' control={control} />
				<Button
					type='submit'
					fullWidth
					variant='contained'
					sx={{ mt: 3, mb: 2 }}>
					Sign Up
				</Button>
			</Box>
		</Box>
	)
}
