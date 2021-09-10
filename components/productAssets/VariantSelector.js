import React from 'react';

const VariantSelector = ({ variantGroups, onSelectOption, selectedOptions, ...passthrough }) => (
  <div {...passthrough}>
    {variantGroups.map(group => (
      <div key={group.id} className="align-items-center">
      <div>{'\u00A0'}</div>
      <span className="mt-4 mb-4">Add Protection Offered By <img src="/images/chevvy-avatar.svg" className="logo2" alt="Logo"/><span className="font-fsorange">Future State Insurance</span>?</span>
      <div>{'\u00A0'}</div>
      {group.options.map(option => (
        <button
          key={option.id}
          onClick={() => onSelectOption(group.id, option.id)}
          className={`mr-3 font-color-white font-size-subheader ${
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
