import { FC, useState } from 'react'

export const Button: FC = () => {
	const [count, setCount] = useState(0)

	return (
		<button type="button" onClick={() => setCount(value => value + 1)}>
			Count: {count}
		</button>
	)
}
