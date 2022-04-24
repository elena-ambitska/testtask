export const InputError = ({errors, name}) => {
    if (!errors.fails || !errors.fails[name]) return (<></>)
    return (
        <ul>
            {errors.fails[name].map((error) => { return (<li key={error}>{error}</li>)})};
        </ul>
    )
}