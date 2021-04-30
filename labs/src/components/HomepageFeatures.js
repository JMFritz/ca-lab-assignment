import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'AWS Lambda',
    Svg: require('../../static/img/aws-lambda.svg').default,
    description: (
      <>
        Create, configure and deploy a serverless function that stores a sample file into an Amazon S3 bucket.
      </>
    ),
  },
  {
    title: 'Amazon Simple Storage Service',
    Svg: require('../../static/img/aws-s3.svg').default,
    description: (
      <>
        Store and retrieve lab sample files in Amazon S3 object storage.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
