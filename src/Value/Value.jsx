import React, { useState } from 'react'
import {
    Accordion,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
    AccordionItem

} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from 'react-icons/md'
import './Value.css'
import data from './../utils/accordion'
const Value = () => {
    return (
        <section className="v-wrapper">
            <div className="v-container flexCenter paddings innerWidth">

                <div className="v-left">
                    <div className="image-container">
                        <img src="./value.png" alt="" />
                    </div>
                </div>

                <div className="v-right flexColStart">
                    <span className='orangeText'>Our Value</span>
                    <span className='primaryText'>Value We Give to You</span>
                    <span className='secondaryText'>
                        We always ready to help by providing the best service for you.
                        <br />
                        We beleive a good place to live can make your life better
                    </span>

                    <Accordion
                        className='accordion'
                        allowMultipleExpanded={false}
                        preExpanded={[0]}
                    >
                        {
                            data.map((Item, i) => {
                                const [className, setClassName] = useState(null)
                                return (
                                    <AccordionItem className={`accordion-item ${className}`} key={i} uuid={i}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className='flexCenter accordion-button'> 
                                                <AccordionItemState>
                                                    {({expanded})=>expanded? setClassName("expanded"): setClassName("collapse")}
                                                </AccordionItemState>
                                                <div className="flexCenter icon">{Item.icon}</div>
                                                <span className='primaryText'>
                                                    {Item.heading}
                                                </span>
                                                <div className="flexCenter icon">
                                                    <MdOutlineArrowDropDown size={20} />
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>

                                        <AccordionItemPanel>
                                            <p className="secondaryText">
                                                {Item.detail}
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                )
                            }
                            )
                        }
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default Value
