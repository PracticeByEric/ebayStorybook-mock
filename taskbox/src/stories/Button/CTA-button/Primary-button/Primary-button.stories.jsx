import React from 'react';
import PrimaryButton from './Primary-button.jsx';
import * as Icons from '../../../Icons/index.jsx';

const iconLibrary = { none: null, ...Icons };

export default {
  title: 'Examples/Components/Button/Primary',
  component: PrimaryButton,
  argTypes: {
    children: {
        name: 'label',
        control: 'text',
        defaultValue: 'Button Text'
      },
    size: {
      control: {type: 'radio'},
      options: ['large','medium','small'],
      defaultValue: 'large'
    },
    disabled: {
      control: 'boolean',
      defaultValue: false
    },    
    showLeadingIcon: {
        control: 'false',
         defaultValue: false
       },
    leadingIcon: {
        control: 'select',
        options: Object.keys(iconLibrary),
        defaultValue: 'none'
      },
     showTrailingIcon: {
        control: 'false',
         defaultValue: false
       },
    trailingIcon: {
        control: 'select',
        options: Object.keys(iconLibrary),
        defaultValue: 'none'
      },
    onClick: { action: 'clicked' }
  }
};

// Template for all stories
const Template = ({leadingIcon, trailingIcon, showLeadingIcon, showTrailingIcon, ...args }) => {
  const LeadingIconComponent = iconLibrary[leadingIcon];
  const TrailingIconComponent = iconLibrary[trailingIcon];
  return(
    <PrimaryButton 
      {...args} 
      leadingIcon = {showLeadingIcon && LeadingIconComponent ? <LeadingIconComponent /> : null}
      trailingIcon = {showTrailingIcon && TrailingIconComponent ? <TrailingIconComponent /> : null}
    />
  );
};

// Default story
export const TextOnly = Template.bind({});
TextOnly.args = {
  children: 'Button Text',
  size: 'large',
  disabled: false,
  showLeadingIcon: false,
  leadingIcon: 'none',
  showTrailingIcon: false,
  trailingIcon: 'none'
};

// Default story
export const LeadingIcon = Template.bind({});
LeadingIcon.args = {
  children: 'Button Text',
  size: 'large',
  disabled: false,
  showLeadingIcon: true,
  leadingIcon: 'AddIcon',
  showTrailingIcon: false,
  trailingIcon: 'none'
};

// Default story
export const TrailingIcon = Template.bind({});
TrailingIcon.args = {
  children: 'Button Text',
  size: 'large',
  disabled: false,
  showLeadingIcon: false,
  leadingIcon: 'none',
  showTrailingIcon: true,
  trailingIcon: 'ArrowDownIcon'
};