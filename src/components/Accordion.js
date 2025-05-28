import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";

function Accordion() {
    const [open, setOpen] = useState(false);
    function handleAccordionAction() {
        setOpen(!open);
    }

    return (
        <>
            {open ? <button className="btn bg-danger" onClick={handleAccordionAction}>-</button> : <button className="btn bg-primary" onClick={handleAccordionAction}>+</button>}
            {open && (
                <ul>
                    <li>item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
                </ul >
            )
            }
        </>
    );
}

export default Accordion;