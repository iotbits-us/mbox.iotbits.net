import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/feature-easy-to-use.svg").default,
    description: (
      <>
        Thanks to its built-in Web-UI accessible via Wi-Fi, its initial setup and management is extremely easy and
        intuitive.
      </>
    ),
  },
  {
    title: "Fully customizable",
    Svg: require("@site/static/img/feature-fully-customizable.svg").default,
    description: (
      <>
        Capable of working with a wide variety of variable frequency 
        drives and virtually any device that has Modbus RTU communication.
      </>
    ),
  },
  {
    title: "Extremely flexible",
    Svg: require("@site/static/img/feature-extremely-flexible.svg").default,
    description: (
      <>
        Extend or customize the operating mode by modifying its manifest file, 
        a user-editable JSON file that exposes registers configuration and functions of each slave.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
