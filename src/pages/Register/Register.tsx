import { Box, Avatar, Typography, InputAdornment, Button } from '@mui/material'
import { HowToReg } from '@mui/icons-material'
import { CheckboxFields, SelectFields, TextFields } from '../../components'
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form'
import { countries } from '../../data/countries'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { pawdRegExp, phoneRegExp } from '../../utils/validation'
import { User } from '../../types/user'

// create schema validation form
const schema = yup.object().shape({
	fullName: yup.string().required('Full Name is required!'),
	email: yup.string().required('Email is required!').email(),
	country: yup.string().required('Country is required!'),
	mobile: yup
		.string()
		.required('Mobile Phone is required!')
		.matches(phoneRegExp, 'Phone number is not valid!'),
	password: yup
		.string()
		.min(8)
		.max(20)
		.required('Password is required!')
		.matches(
			pawdRegExp,
			'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
		),
	confirmPassword: yup
		.string()
		.min(8)
		.max(20)
		.oneOf([yup.ref('password'), ''], 'Password must match'),
	privacy: yup.bool().oneOf([true], 'Field must be checked'),
})

export const Register = () => {
	const methods = useForm({
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

	const onSubmit: SubmitHandler<User> = (data: User) => {
		console.log(data)
		methods.reset()
	}

	console.log(`watch variable email : ${methods.watch('email')}`)

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
			<FormProvider {...methods}>
				<Box
					noValidate
					component='form'
					onSubmit={methods.handleSubmit(onSubmit)}
					sx={{ width: '100%', mt: '1rem' }}>
					<TextFields name='fullName' label='Full Name' />
					<TextFields name='email' label='Email' />
					<TextFields
						name='mobile'
						label='Mobile Phone'
						inputProps={{
							startAdornment: (
								<InputAdornment position='start'>+91</InputAdornment>
							),
							type: 'number',
						}}
					/>
					<SelectFields name='country' label='Country' countries={countries} />
					<TextFields name='password' label='Password' />
					<TextFields name='confirmPassword' label='Confirm Password' />
					<CheckboxFields name='privacy' />
					<Button
						type='submit'
						fullWidth
						variant='contained'
						sx={{ mt: 3, mb: 2 }}>
						Sign Up
					</Button>
				</Box>
			</FormProvider>
		</Box>
	)
}
