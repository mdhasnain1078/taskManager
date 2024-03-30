import React, { useState } from 'react';

const Filter = ({options, className, defaultValue, showIcon, ...props}) => {
  const [value, setPriority] = useState(defaultValue);

  const handleChange = (event) => {
    setPriority(event.target.value);
  };

  return (
    <div className="relative inline-flex">
      <select
        value={value}
        onChange={handleChange}
        {...props}
        className={`${className} inline appearance-none bg-white text-gray-500 px-2 pr-10 py-1 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-sm`}
      >
        <option disabled value={defaultValue}>{defaultValue}</option>
        {options.map((option)=>(<option value={option}>{option}</option>))}
      </select>
      {showIcon ? (<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-500 ml-5 text-sm">
        <svg className="fill-current h-10 w-10 self-center" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-4-4h8z"/></svg>
      </div>) : null}
    </div>
  );
}

export default Filter;
