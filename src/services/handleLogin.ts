export const access = (
	handle: (logged: boolean) => void,
	acc: boolean,
	navigate: any
) => {
	handle(acc)
	navigate('/')
}
