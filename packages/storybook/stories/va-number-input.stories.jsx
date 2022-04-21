import React from 'react';
import { generateEventsDescription } from './events';
import { getWebComponentDocs, propStructure } from './wc-helpers';

const numberInputDocs = getWebComponentDocs('va-number-input');

export default {
  title: 'Components/va-number-input',
  parameters: {
    docs: {
      description: {
        component: generateEventsDescription(numberInputDocs),
      },
    },
  },
  argTypes: {
    inputmode: {
      control: {
        type: 'select',
        options: ['decimal', 'numeric'],
      },
    },
  },
};

const defaultArgs = {
  'name': 'my-input',
  'label': 'My input',
  'enable-analytics': false,
  'required': false,
  'error': undefined,
  'value': 0,
  'inputmode': 'numeric',
  'min': undefined,
  'max': undefined,
};

const Template = ({
  name,
  label,
  'enable-analytics': enableAnalytics,
  required,
  error,
  value,
  inputmode,
  min,
  max,
}) => {
  return (
    <va-number-input
      name={name}
      label={label}
      enable-analytics={enableAnalytics}
      required={required}
      error={error}
      value={value}
      inputmode={inputmode}
      max={max}
      min={min}
      onInput={e => console.log('input event value:', e.target.value)}
      onBlur={e => console.log('blur event', e)}
    />
  );
};

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
Default.argTypes = propStructure(numberInputDocs);

export const Error = Template.bind({});
Error.args = { ...defaultArgs, error: 'This is an error message' };

export const Required = Template.bind({});
Required.args = { ...defaultArgs, required: true };

export const WithAnalytics = Template.bind({});
WithAnalytics.args = { ...defaultArgs, 'enable-analytics': true };

export const ValidRange = Template.bind({});
ValidRange.args = {
  ...defaultArgs,
  min: 0,
  max: 4,
};