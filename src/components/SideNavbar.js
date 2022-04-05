import NavItem from './NavItem';

export default function SideNavbar({ items, onclick }) {

    return (
        <div className="side-navbar max-height">
            {items.map((item, key) => <NavItem item={item} key={key} onclick={onclick} />)}
        </div>
    );
}