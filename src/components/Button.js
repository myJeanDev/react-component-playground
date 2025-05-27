function Button({ value, onClick }) {
    return (
        <button onClick={() => onClick(value)}> {/* Pass the value back */}
            {value}
        </button>
    );
}

export default Button;