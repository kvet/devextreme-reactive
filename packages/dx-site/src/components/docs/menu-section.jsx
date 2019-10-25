import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Location } from '@reach/router';

import styles from './menu-section.module.scss';

const SectionBase = ({
  title, items, location,
  onHeaderClick, listClassName, titleClassName,
  subSectionComponent: SubSection,
  itemComponent: Item,
  titleComponent: Title,
}) => (
  <React.Fragment key={title}>
    <Title
      className={titleClassName}
      onClick={onHeaderClick}
      title={title}
    />

    <ul
      className={`list-unstyled ${listClassName} ${styles.menuList}`}
    >
      {items.map(item => (
        item.items ? (
          <SubSection
            {...item}
            key={item.title}
            itemComponent={Item}
            location={location}
          />
        ) : (
          <Item {...item} key={item.title} />
        )
      ))}
    </ul>
  </React.Fragment>
);

SectionBase.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  onHeaderClick: PropTypes.func,
  listClassName: PropTypes.string,
  titleClassName: PropTypes.string,
};

SectionBase.defaultProps = {
  onHeaderClick: () => {},
  listClassName: '',
  titleClassName: '',
};

export default SectionBase;
