export type User = {
	fullName: string
	email: string
	country: string
	mobile: string
	password: string
	confirmPassword: string
	privacy: boolean
}

export type FormField =
	| 'fullName'
	| 'email'
	| 'country'
	| 'mobile'
	| 'password'
	| 'confirmPassword'
	| 'privacy'
