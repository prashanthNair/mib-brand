/* eslint-disable import/prefer-default-export */
import React, { Fragment } from "react";

const mapPropsToConfig = (config) => {
  const configWithProps = [];

  config.forEach((item) => {
    if (item.component) {
      const { component, ...props } = item;
      configWithProps.push({
        ...props,
        Component: component,
      });
    }
  });

  return configWithProps;
};

export const Renderer = ({ config }) => {
  if (!config) {
    throw new Error("You are calling Renderer with no config.");
  }

  const configWithProps = mapPropsToConfig(config);

  const renderComponents = (items) =>
    items.map((item) => {
      const { Component, ...props } = item;
      return (
        <Fragment key={props.name}>
          <Component {...props} />
        </Fragment>
      );
    });

  return renderComponents(configWithProps);
};
