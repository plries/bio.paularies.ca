function Button({color, icon, text, alt}) {
    return (
        <p
            className={color}
        >
            <img 
                src={icon}
                alt={alt}
                draggable="false"
            >
            </img>
            {text}
        </p>
    );
}

export default Button;