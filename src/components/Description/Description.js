import "./Description.css";

const Description = (props) => {
  return (
    <div
      className="discriptionContainer"
      style={{
        flex: `${props.flex}`,
        marginLeft: `${props.margin}`,
        width: `${props.width}`,
      }}
    >
      <p className="heading">{props.heading}</p>
      <h1 className="title">{props.title}</h1>
      <p className="paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam reiciendis
        totam quisquam modi esse ut similique aperiam quam mollitia sint eos,
        neque, commodi cum, vitae blanditiis! Repellendus consequatur aut culpa
        debitis minima asperiores nostrum repudiandae nihil dolor a, ipsum alias
        numquam.
      </p>
      <div
        className="footer1"
        style={{
          display: "inline",
          fontFamily: "poppins",
          fontWeight: 700,
          fontSize: "16px",
        }}
      >
        {props.footer1}
        <img src={props.src} alt={props.alt} className={props.className}></img>
      </div>
      <span
        className="footer2"
        style={{
          fontFamily: "poppins",
          fontSize: "16px",
          color: "#999999",
        }}
      >
        {props.footer2}{" "}
      </span>
    </div>
  );
};

export default Description;
