export default function TabButton({children, onSelect, isSelected}) {
    // do NOT put parenthese in function for onClick
    return (<li><button className={isSelected ? "active" : ''} onClick={onSelect}>{children}</button></li>); // props.children = <ComponentName>CHILDREN HERE</ComponentName>
}