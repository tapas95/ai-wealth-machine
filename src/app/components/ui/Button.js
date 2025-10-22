const Button = props => {
    return (
        <button className={ `inline-flex px-4 py-2 bg-primary text-sm font-bold text-white uppercase text-nowrap border border-primary hover:bg-secondary hover:border-secondary transition-all duration-300 rounded-4xl cursor-pointer ${ props.className ? props.className : '' }`.trim() }>
            { props.children }
        </button>
    );
}
export default Button;