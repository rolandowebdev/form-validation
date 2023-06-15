import { ErrorOutline } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

type ErrorMessageProps = {
	message: string | FieldError | Merge<FieldError, FieldErrorsImpl> | undefined
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
	message,
}: ErrorMessageProps) => {
	return (
		<Box sx={{ display: 'flex', alignItems: 'center', gap: '5px', mt: '6px' }}>
			<ErrorOutline color='error' fontSize='small' />
			<Typography color='error.main' variant='body1' fontSize={14}>
				<>{message}</>
			</Typography>
		</Box>
	)
}
