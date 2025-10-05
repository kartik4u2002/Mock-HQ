import React from 'react'


export default function PrimaryButton({ children, onClick }) {
return (
<button onClick={onClick} className="mt-4 px-6 py-3 rounded-xl bg-gradient-to-b from-blue-500 to-blue-600 text-white font-semibold shadow hover:shadow-lg">
{children}
</button>
)
}