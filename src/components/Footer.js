import React, {memo} from "react";

const Footer = memo(props => {
    const filterBtns = [
        {
            title: 'All',
            isActive: true,
           
            link: ''
        },
        {
            title: 'Active',
            isActive: false,
           
            link: 'active'
        },
        {
            title: 'Completed',
            isActive: false,
            
            link: 'completed'
        }
    ]
        return(
        <footer className="footer">
            <span className="todo-count">
            <strong></strong>
            <span></span>
            <span></span>
            <span>left</span>
        </span>
        <ul className="filters">
            {
                filterBtns.map(btn => (
                    <FilterBtn {...btn} />
                ))
            }
        </ul>
        <button className="clear-completed">Clear completed</button>
     </footer>
    )
})

const FilterBtn = memo(props => {
    const {title, onClick, link, isActive} = props ;
    return(
        <>
            <li>
                <a href={`#/${link}`} className={`${isActive ? "selected" : ''}`} onClick="">
                   {title}
                </a>
            </li>
            <span></span>
        </>
    )
})
export default Footer;