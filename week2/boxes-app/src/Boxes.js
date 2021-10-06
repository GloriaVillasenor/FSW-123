function Boxes(props) {
    return(
        <div style = {{backgroundColor: props.bgColor, width: props.width, height: props.height, textAlign: props.textAlign, }}>
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
            <h4>{props.description}</h4>
        </div>
    );
}

export default Boxes