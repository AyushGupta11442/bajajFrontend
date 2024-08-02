import React, { useState } from 'react';
import { GrCheckboxSelected } from "react-icons/gr";

const MultiSelectDropdown = ({ selectedOptions, onOptionChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const options = ['Alphabets', 'Numbers', 'Highest alphabet'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    onOptionChange(option);
  };

  const handleRemoveOption = (option) => {
    onOptionChange(option, true);
  };

  return (
    <div className="multi-select-dropdown">
      <div className="dropdown-toggle" onClick={toggleDropdown}>
        {selectedOptions.length > 0
          ? selectedOptions.join(', ')
          : 'Click to select'}
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          {options.map(option => (
            <div key={option} className="dropdown-item" onClick={() => handleOptionClick(option)}>
              {selectedOptions.includes(option) && (
                <GrCheckboxSelected onClick={() => handleRemoveOption(option)} className="remove-icon" />
              )}
              {option}
            </div>
          ))}
        </div>
      )}
      <style jsx>{`
        .multi-select-dropdown {
          position: relative;
          display: inline-block;
        }

        .dropdown-toggle {
          border: 1px solid #ccc;
          padding: 8px;
          border-radius: 4px;
          cursor: pointer;
          background-color: #f9f9f9;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          border: 1px solid #ccc;
          border-radius: 4px;
          background-color: #fff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          max-height: 150px;
          overflow-y: auto;
          width: 100%;
        }

        .dropdown-item {
          padding: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        .dropdown-item:hover {
          background-color: #f1f1f1;
        }

        .remove-icon {
          margin-left: auto;
          color: red;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default MultiSelectDropdown;
