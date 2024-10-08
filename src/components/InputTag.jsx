import React from 'react'

export default function InputTag(props) {
  return (
    <div className="sm:col-span-6">
          <label
            htmlFor={props.name}
            className="block text-sm font-medium text-gray-700"
          >
            {props.label}
          </label>
          <div className="mt-1">
            <input
              type={props.type}
              name={props.name}
              id={props.name}
              defaultValue={props.value}
              placeholder={props.placeholder}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              {...props}
            />
          </div>
        </div>
  )
}
