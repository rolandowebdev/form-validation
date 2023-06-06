import { Box, Typography } from '@mui/material'
import { ErrorOutline } from '@mui/icons-material'

type ErrorMessageProps = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	message: any
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
	return (
		<Box sx={{ display: 'flex', alignItems: 'center', gap: '5px', mt: '6px' }}>
			<ErrorOutline color='error' fontSize='small' />
			<Typography color='error.main' variant='body1' fontSize={14}>
				{message}
			</Typography>
		</Box>
	)
}
