import React from 'react';

const VariantSelector = ({ variantGroups, onSelectOption, selectedOptions, ...passthrough }) => (
  <div {...passthrough}>
    {variantGroups.map(group => (
      <div key={group.id}>
      Add Protection Offered By <span className="mr-3 font-weight-semibold">Future State Insurance</span>?
      {group.options.map(option => (
        <span
          key={option.id}
          onClick={() => onSelectOption(group.id, option.id)}
          className={`mr-3 cursor-pointer ${
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
        </span>
      ))}
      </div>
    ))}
  </div>
);


export default VariantSelector;
