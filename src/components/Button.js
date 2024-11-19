function Button({color, icon, text, alt}) {
    return (
        <p
            className={color}
        >
            <img 
                src={icon}
                alt={alt}
            >
            </img>
            {text}
        </p>
    );
}

export default Button;