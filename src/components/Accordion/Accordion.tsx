import React from 'react';

export type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
    onChange: () => void
}

export function Accordion(props: AccordionPropsType) {

    console.log('Accordion rendering')

    return <div>
        <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody/>}
    </div>//то же самое, что {props.collapsed === false  && <AccordionBody/>
    /*
или
        if (props.collapsed === true) {
            return (
                <div>
                    { true }
                    <AccordionTitle title={props.titleValue}/>
                </div>)
        } else {
            return (
                <div>
                    <AccordionTitle title={props.titleValue}/>
                    <AccordionBody/>
                </div>
            );
        }
    }
    */

    type AccordionTitlePropsType = {
        title: string
        onChange: () => void
    }

    function AccordionTitle(props: AccordionTitlePropsType) {
        console.log('AccordionTitle rendering')

        return (
            <h3 onClick={props.onChange}>---{props.title}---</h3>
        );
    }

    function AccordionBody() {
        console.log('AccordionBody rendering')

        return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        );
    }
}
