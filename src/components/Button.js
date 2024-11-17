function Button({ color, icon, text }) {
    return (
        <p
            className={ color }
        >
            <img 
                src={ icon }
            >
            </img>
            { text }
        </p>
    );
}

export default Button;