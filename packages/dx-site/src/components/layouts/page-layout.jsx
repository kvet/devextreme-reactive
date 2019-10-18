

import * as React from 'react';
import * as PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Layout from './layout';
import Header from '../header';
import LeftMenu from '../docs/left-menu';
import VersionLink from '../docs/version-link';
import ContainerWithMenu from './container-with-menu';
import Search from '../docs/search';
import LandingProductLinks from '../landing/product-links';

import navigation from '../../../page-navigation.json';
import styles from './page-layout.module.scss';

const titles = {
  'react/grid': 'Grid',
  'react/chart': 'Chart',
  'react/scheduler': 'Scheduler',
  'react/common': 'Common Concepts',
  'react/core': 'Core',
};

const startsWithCapitalLetter = word => word[0] === word[0].toUpperCase();

const sortApiItems = (apiItems) => {
  const classes = apiItems.filter(({ title }) => startsWithCapitalLetter(title));
  const methods = apiItems.filter(({ title }) => !startsWithCapitalLetter(title));

  const sort = items => items.sort((a, b) => a.title.localeCompare(b.title));

  return [
    ...sort(classes),
    ...sort(methods),
  ];
};

const prepareMenuItems = (siteSection) => ([
  { title: 'OVERVIEW', path: `/${siteSection}/`},
  ...Object.keys(navigation).reduce((acc, productSlug) => {
    if (navigation[productSlug][siteSection]) {
      acc.push({
        title: titles[productSlug],
        items: navigation[productSlug][siteSection].reduce((items, rawSection) => {
          let section = rawSection;
          if (navigation[productSlug][siteSection].length === 1) {
            return section['items'];
          }
          if (section['title'] === 'API Reference') {
            section = {
              ...rawSection,
              items: sortApiItems(rawSection.items),
            };
          }
          return [...items, section];
        }, []),
      })
    }
    return acc;
  }, [])
]);

class PageLayout extends React.PureComponent {
  render() {
    const { technologyName, sectionName, children } = this.props;
    const isDocPage = sectionName === 'docs';
    return (
      <Layout>
        <Header
          links={(
            <React.Fragment>
              {isDocPage ? (<VersionLink />) : null}
              <LandingProductLinks />
            </React.Fragment>
          )}
        />
        <ContainerWithMenu
          items={prepareMenuItems(sectionName)}
          menuAddon={isDocPage ? (
            <Search
              technologyName={technologyName}
              sectionName={sectionName}
            />
          ) : null}
        >
          {children}
        </ContainerWithMenu>
      </Layout>
    );
  }
}

PageLayout.propTypes = {
  technologyName: PropTypes.string.isRequired,
  sectionName: PropTypes.string.isRequired,
  children: PropTypes.node,
};

PageLayout.defaultProps = {
  children: undefined,
  technologyName: 'react',
};

export default PageLayout;
