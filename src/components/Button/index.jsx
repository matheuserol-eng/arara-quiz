export const Button = ({ children, ...props }) => {
    return (
        <button className="px-4 py-2 rounded-lg w-full bg-gray-600 text-white hover:bg-blue-700 cursor-pointer transition-all" {...props}>
            {children}
        </button>
    )
}