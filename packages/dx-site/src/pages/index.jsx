import * as React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layouts/layout';
import Header from '../components/header';
import LandingHeaderAddon from '../components/landing/header-addon';
import LandingAlternatedBackground from '../components/landing/alternated-background';
import LandingLayout from '../components/landing/layout';
import LandingTitle from '../components/landing/title';
import WhyDevExtremeForReact from '../components/landing/why-devextreme-react';
import LandingImageFeature from '../components/landing/image-feature';
import LandingChessBoardLayoutList from '../components/landing/features-list';
import LandingMaintainence from '../components/landing/maintainence';
import LandingProductLayout from '../components/landing/product-layout';
import LandingProductBlock from '../components/landing/product-block';
import LandingLink from '../components/landing/link';
import LandingProductLinks from '../components/landing/product-links';
import LandingProductFloatImage from '../components/landing/product-float-image';
import AlternatedBackground from '../components/landing/alternated-background';

import headerLink from './images/header.png';
import bootstrapLogo from './images/bootstrap-logo.svg';
import materialUiLogo from './images/material-ui-logo.svg';
import ReactGridIcon from './images/react-grid.inline.svg';
import ReactChartIcon from './images/react-chart.inline.svg';
import ReactSchedulerIcon from './images/react-scheduler.inline.svg';
import nativeReactImage from './images/reactive-100-react.png';
import lovesReduxImage from './images/reactive-love-redux.png';
import pluginBasedImage from './images/reactive-plugins.png';
import typeScriptImage from './images/reactive-type-script.png';
import localizationImage from './images/reactive-localization.png';
import docImage from './images/reactive-doc.png';

const pageData = [
  {
    title: '100% Native React',
    description: 'We\'ve focused our energy on performance and leveraged the best practice recomendations oferred by the React team. Through immutability and pure functions, we can apply memoization and built-in react optimisations to archieve outstanding performance.',
    imageLink: nativeReactImage,
  },
  {
    reversed: true,
    alternative: true,
    title: 'Loves Redux by Design',
    description: 'Fully control React Grid state and treat it as a pure view component. Effortlessly enable state persistence and time-traveling without side-effects. Our React Grid can also manage its state internally helping you write less code, so you focus on more important business tasks.',
    imageLink: lovesReduxImage,
  },
  {
    title: 'Plugin-based Architecture',
    description: 'DevExtreme Reactive Components are built of plugins. Add and deploy only the features you need or extend the built-in functionality with your or third-party custom plugins.',
    imageLink: pluginBasedImage,
  },
  {
    reversed: true,
    alternative: true,
    title: 'TypeScript Support',
    description: 'TypeScript is usually the choice for enterprise-scale web applications. Our TypeScript definitions are autogenerated and are always complete and in sync with the docs.',
    imageLink: typeScriptImage,
  },
  {
    title: 'Localization Capabilities',
    description: 'Every text element of the components UI is customizable. So, it\'s ready for localization or globalization if you need it in your app.',
    imageLink: localizationImage,
  },
  {
    reversed: true,
    alternative: true,
    title: 'Simple Docs with Live Examples',
    description: 'Every component feature has a complete API reference and a usage guide with code examples and live demos with sources available on GitHub.',
    imageLink: docImage,
  },
];

const IndexPage = () => (
  <Layout>
    <Helmet title="React Components" />
    <LandingAlternatedBackground>
      <Header
        links={<LandingProductLinks />}
        addon={(
          <LandingHeaderAddon
            isIndexPage
            main={(
              <React.Fragment>
                Data-Centric
                <br />
                React Components
              </React.Fragment>
            )}
            additional="for Bootstrap and Material-UI"
          />
        )}
      />
      <LandingProductFloatImage imageLink={headerLink} isIndexPage />

      <LandingProductLayout
        position="header"
      >
        <LandingProductBlock
          condensed
          type="react"
          icon={ReactGridIcon}
          title={'React\nGrid'}
          links={[
            <LandingLink
              to="/react/grid/"
              variant="button"
              title="Explore Component"
              key="react-grid-header"
            >
              Explore Component
            </LandingLink>,
            <LandingLink
              to="/react/grid/demos/"
              title="Grid Demos"
              key="react-grid-demos-header"
            >
              Demos
            </LandingLink>,
          ]}
        />
        <LandingProductBlock
          condensed
          type="react"
          icon={ReactChartIcon}
          title={'React\nChart'}
          links={[
            <LandingLink
              to="/react/chart/"
              variant="button"
              title="Explore Component"
              key="react-chart-header"
            >
              Explore Component
            </LandingLink>,
            <LandingLink
              to="/react/chart/demos/"
              title="Chart Demos"
              key="react-chart-demos-header"
            >
              Demos
            </LandingLink>,
          ]}
        />
        <LandingProductBlock
          condensed
          type="react"
          icon={ReactSchedulerIcon}
          title={'React\nScheduler'}
          links={[
            <LandingLink
              to="/react/scheduler/"
              variant="button"
              title="Explore Component"
              key="react-scheduler-header"
            >
              Explore Component
            </LandingLink>,
            <LandingLink
              to="/react/scheduler/demos/"
              title="Scheduler Demos"
              key="react-scheduler-demos-header"
            >
              Demos
            </LandingLink>,
          ]}
        />
      </LandingProductLayout>

      <div className="py-4" />
      <WhyDevExtremeForReact />

      <LandingChessBoardLayoutList data={pageData} />

      <div className="py-3" />
      <LandingLayout>
        <LandingImageFeature
          iconLink={bootstrapLogo}
          title="Twitter Bootstrap React Components"
          description="Use any existing or create your custom bootstrap theme. No need for any additional configuration."
        />
        <LandingImageFeature
          title="Material Design React Components"
          iconLink={materialUiLogo}
          description="We ship additional Material-UI packages that allow you to utilize the familiar approaches and appearance."
        />
      </LandingLayout>
    </LandingAlternatedBackground>
    <LandingLayout>
      <LandingMaintainence />
    </LandingLayout>

    <AlternatedBackground>
      <LandingProductLayout
        position="footer"
      >
        <LandingProductBlock
          type="react"
          icon={ReactGridIcon}
          title={'React\nGrid'}
          links={[
            <LandingLink
              to="/react/grid/docs/guides/getting-started/"
              variant="button"
              title="Getting Started"
              key="react-grid-footer"
            >
              Getting Started
            </LandingLink>,
            <LandingLink
              to="/react/grid/demos/"
              title="Grid Demos"
              key="react-grid-demos-footer"
            >
              Demos
            </LandingLink>,
          ]}
        />
        <LandingProductBlock
          type="react"
          icon={ReactChartIcon}
          title={'React\nChart'}
          links={[
            <LandingLink
              to="/react/chart/docs/guides/getting-started/"
              variant="button"
              title="Getting Started"
              key="react-chart-footer"
            >
              Getting Started
            </LandingLink>,
            <LandingLink
              to="/react/chart/demos/"
              title="Chart Demos"
              key="react-chart-demos-footer"
            >
              Demos
            </LandingLink>,
          ]}
        />
        <LandingProductBlock
          type="react"
          icon={ReactSchedulerIcon}
          title={'React\nScheduler'}
          links={[
            <LandingLink
              to="/react/scheduler/docs/guides/getting-started/"
              variant="button"
              title="Getting Started"
              key="react-scheduler-footer"
            >
              Getting Started
            </LandingLink>,
            <LandingLink
              to="/react/scheduler/demos/"
              title="Scheduler Demos"
              key="react-scheduler-demos-footer"
            >
              Demos
            </LandingLink>,
          ]}
        />
      </LandingProductLayout>
    </AlternatedBackground>
  </Layout>
);

export default IndexPage;
