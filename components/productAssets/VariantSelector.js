import React from "react";
import { Row, Radio } from "antd";
import "antd/dist/antd.css";

const VariantSelector = ({ variantGroups, onSelectOption, selectedOptions, ...passthrough }) => (
  <div {...passthrough}>
    <span className="mr-3 font-weight-semibold">
      Add Protection Offered By Future State Insurance?
    </span>
    {variantGroups.map(({ options, ...group }) => (
      <Row gutter={[16, 16]} key={group.id}>
        <Radio.Group
          name={group.id}
          defaultValue={selectedOptions[group.id]}
          onChange={onSelectOption}
        >
          {options.map((option) => (
            <Radio.Button
              value={option.id}
              style={{
                margin: "10px",
                textAlign: "center",
                width: "75px",
                height: "60px",
              }}
            >
              {option.name}
              <br />
              {option.name === "No" ? "\u00A0" : option.price.formatted_with_symbol}
            </Radio.Button>
          ))}
        </Radio.Group>
      </Row>
    ))}
  </div>
);

export default VariantSelector;
