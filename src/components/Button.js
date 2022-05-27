import '../Styles/Button.styles.scss';

const BUTTON_TYPE_CLASSES = {
    google : 'google-sign-in',
    inverted : 'inverted'
}

const Button = ({children, buttonType, ...otherProps}) => {
    // console.log("button-children: ", children);
    return (
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps} >
            {children}
        </button>
    );
}

export default Button;