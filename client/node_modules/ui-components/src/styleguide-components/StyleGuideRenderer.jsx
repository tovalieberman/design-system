/* eslint-disable react/no-children-prop */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'react-styleguidist/lib/client/rsg-components/Styled';
import DefaultStyleGuideRenderer from 'react-styleguidist/lib/client/rsg-components/StyleGuide/StyleGuideRenderer';

const styles = ({ fontFamily, space }) => ({
  headingSpacer: {
    marginBottom: space[2],
  },
  descriptionText: {
    marginTop: space[0],
    fontFamily: fontFamily.base,
  },
});

export function StyleGuideRenderer({
  classes,
  title,
  version,
  homepageUrl,
  children,
  toc,
  hasSidebar,
}) {
  return (
    <div>
      <DefaultStyleGuideRenderer
        classes={classes}
        title={title}
        version={version}
        homepageUrl={homepageUrl}
        children={children}
        toc={toc}
        hasSidebar={hasSidebar}
      />
    </div>
  );
}

StyleGuideRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  version: PropTypes.string,
  homepageUrl: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  toc: PropTypes.node.isRequired,
  hasSidebar: PropTypes.bool,
};


export default Styled(styles)(StyleGuideRenderer);
