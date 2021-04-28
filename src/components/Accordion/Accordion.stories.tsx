import React, {useState} from 'react';
import { Story, Meta } from '@storybook/react';
import {Accordion, AccordionPropsType} from './Accordion';
import {action} from '@storybook/addon-actions';



export default {
    title: 'Accordion',
    component: Accordion,
    /*argTypes: any,*/
} as Meta;

const callback = action('accordion mode change event fired');

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

export const MenuCollapsedMode = ( ) => <Accordion titleValue={'Menu'} collapsed={true} onChange={callback}/>;
export const UsersUncollapsedMode = ( ) => <Accordion titleValue={'Users'} collapsed={false} onChange={callback}/>;

export const ModeChanging = ( ) => {
    const[value, setValue] = useState<boolean>(true);
    return <Accordion titleValue={'Users'} collapsed={value} onChange={() => setValue(!value)}/>
};





