import "./Description.css";

const Description = (props) => {
  return (
    <div className="descriptionContainer">
      <p className="heading">{props.heading}</p>
      <h1 className="title">{props.title}</h1>
      <p className="paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam reiciendis
        totam quisquam modi esse ut similique aperiam quam mollitia sint eos,
        neque, commodi cum, vitae blanditiis! Repellendus consequatur aut culpa
        debitis minima asperiores nostrum repudiandae nihil dolor a, ipsum alias
        numquam.
      </p>
      <div className="footer">
        {props.footer1}
        {props.footer2}
      </div>
    </div>
  );
};

export default Description;
