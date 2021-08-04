import React from 'react';

const VariantSelector = ({ variantGroups, onSelectOption, selectedOptions, ...passthrough }) => (
  <div {...passthrough}>
    {variantGroups.map(group => (
      <div key={group.id} className="align-items-center">
      <span className="mt-3 mb-3">Add Protection Offered By <span className="font-weight-semibold">Future State Insurance</span>?</span>
      <br/>
      {group.options.map(option => (
        <button
          key={option.id}
          onClick={() => onSelectOption(group.id, option.id)}
          className={`font-color-white ${
            selectedOptions[group.id] && selectedOptions[group.id] === option.id
              ? 'variant-btn-selected'
              : 'variant-btn'
          }`}
        >
          {option.name}
                <br />
                {option.name === 'No'
                  ? '\u00A0'
                  : option.price.formatted_with_symbol}
        </button>
      ))}
      </div>
    ))}
  </div>
);


export default VariantSelector;
