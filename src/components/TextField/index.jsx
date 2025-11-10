export const TextField = ({ label, id, ...props }) => {
    return (
        <fieldset className="flex flex-col space-y-2 mb-2">
            <label htmlFor={id} className="text-lg font-medium">{label}</label>

            <input id={id} className="border rounded-md" {...props} />
        </fieldset>
    )
}