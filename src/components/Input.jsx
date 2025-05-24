import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {

    const id = useId();

    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1' htmlFor={id}>{label}</label>}
            <input
                type={type}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200  w-full ${className}`}
                ref={ref}
                // We are using ref for onClick onChange etc..
                {...props}
                id={id}     // Same unique id is in both label and input
            />
        </div>
    )
})

export default Input