import React from "react";

const Section = (props) => {
  return (
    <section>
      <h2>{props.header}</h2>
      {props.content.map((el) => {
        const [key, value] = el;
        if (typeof value !== "object" && key.slice(0, 1) !== "_")
          return (
            <p>
              <strong>{key}:</strong> {value + ""}
            </p>
          );
        else if (typeof value === "object" && value !== null) {
          return <Section header={key} content={Object.entries(value)} />;
        }
      })}
    </section>
  );
};

export default Section;
