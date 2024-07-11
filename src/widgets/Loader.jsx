import React from 'react'

export default function Spinner() {
  return (
    <div className="border-2 border-red-500 inline">
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-green-500"></div>
    </div>
  )
}
