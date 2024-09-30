import React from "react";

export default function SelectTag(props) {
  return (
    <div className="sm:col-span-6">
      {props.label && (
        <label
        htmlFor={props.name}
        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
      >
        {props.label}
      </label>
      )}
      

      <div className="mt-1 sm:col-span-2 ">
        <select
          id={props.name}
          name={props.name}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          defaultValue={props.default ? props.default : "default"}
          {...props}
        >
          <option disabled value="default">
            Select Option
          </option>

          {props.data.map((item) => (
            <option key={item.id} value={item.value}>
              {item.value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
