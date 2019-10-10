import * as React from 'react';
import GatsbyLink from 'gatsby-link';
import FeaturePreview from '../feature-list/feature-preview';

import styles from './demos-list.module.scss';

const allocateToColumns = (items, columns) => {
  const columnSize = Math.ceil(items.length / columns);
  return items.reduce((acc, item) => {
    if (acc[acc.length - 1].length === columnSize) {
      acc.push([]);
    }
    acc[acc.length - 1].push(item);
    return acc;
  }, [[]])
};

const DemosList = ({ data: { title, featured, technical } }) => (
  <div className={`container ${styles.container}`}>
    <div className="row">
      <div className="col-md-12">
        <div className={styles.title}>
          {title}
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-12">
        <h4>Featured Demos</h4>
      </div>
    </div>
    <div className="row my-3">
      {featured.map(({ title, path, image }) => (
        <div className="col-4">
          <FeaturePreview
            size="dense"
            imageLink={image}
          />
        </div>
      ))}
    </div>

    <div className="row">
      <div className="col-12">
        <h4>Technical Demos</h4>
      </div>
    </div>
    <div className="row my-3">
      {allocateToColumns(technical, 3).map(column => (
        <div className="col-12 col-sm-4">
          {column.map(({ title, path }) => (
            <div>
              <GatsbyLink>{title}</GatsbyLink>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default DemosList;
