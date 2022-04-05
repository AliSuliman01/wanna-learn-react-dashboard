import {FaArrowRight, FaArrowDown, FaDashcube} from 'react-icons/fa';
import { GoDash } from "react-icons/go";
import { useRouteMatch } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function NavItem({item, onclick, indentation = 0}) {
    let match = useRouteMatch();
    console.log(match.url);
    return (
        <>
        <div style={{marginLeft:15*indentation}} className="nav-item" onClick={() => {onclick(item.id)}}>
            {
            item.isCollapse == null ?
                <Link to={`${item.id}`}>
                     <GoDash /> 
                </Link>
            :
           (!item.isCollapse ? <FaArrowRight />:<FaArrowDown /> )

            }
        {item.text}
        </div>
        { item.isCollapse ? item.children.map((i)=><NavItem item={i} key={i.id} indentation = {indentation+1} onclick={onclick} />):null}
        </>
    )
}