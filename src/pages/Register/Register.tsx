import { Box, Avatar, Typography, InputAdornment, Button } from '@mui/material'
import { HowToReg } from '@mui/icons-material'
import { CheckboxFields, SelectFields, TextFields } from '../../components'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { countries } from '../../data/countries'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { pawdRegExp, phoneRegExp } from '../../utils/validation'

// create schema validation form
const schema = yup.object({
	fullName: yup.string().required('Full Name is required!'),
	email: yup.string().required('Email is required!').email(),
	country: yup.string().required('Country is required!'),
	mobile: yup
		.string()
		.required('Mobile Phone is required!')
		.matches(phoneRegExp, 'Phone number is not valid!'),
	password: yup
		.string()
		.required('Password is required!')
		.matches(
			pawdRegExp,
			'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
		),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), ''], 'Password must match'),
	privacy: yup.bool().oneOf([true], 'Field must be checked'),
})

export const Register = () => {
	const {
		handleSubmit,
		reset,
		formState: { errors },
		control,
	} = useForm({
		defaultValues: {
			fullName: '',
			email: '',
			country: '',
			mobile: '',
			password: '',
			confirmPassword: '',
			privacy: false,
		},
		resolver: yupResolver(schema),
	})

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		console.log(data)
		reset()
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
				<TextFields
					errors={errors}
					control={control}
					name='fullName'
					label='Full Name'
				/>
				<TextFields
					errors={errors}
					control={control}
					name='email'
					label='Email'
				/>
				<TextFields
					errors={errors}
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
					errors={errors}
					control={control}
					name='country'
					label='Country'
					countries={countries}
				/>
				<TextFields
					errors={errors}
					name='password'
					control={control}
					label='Password'
				/>
				<TextFields
					errors={errors}
					name='confirmPassword'
					control={control}
					label='Confirm Password'
				/>
				<CheckboxFields errors={errors} name='privacy' control={control} />
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
