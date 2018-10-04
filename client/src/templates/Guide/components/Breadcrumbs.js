import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import titleify from '../../../../utils/titleify';

const propTypes = {
  path: PropTypes.string.isRequired
};

function Breadcrumbs(props) {
  const { path } = props;
  if (path === '/') {
    return null;
  }

  const pathMap = path
    // remove leading and trailing slash
    .replace(/^\/([a-z0-9/-]+[^/])\/?$/i, '$1')
    .split('/')
    .reduce((accu, current, i, pathArray) => {
      const path =
        i !== 0 ? accu[pathArray[i - 1]].path + `/${current}` : `/${current}`;
      return {
        ...accu,
        [current]: {
          path,
          title: titleify(current)
        }
      };
    }, {});

  const crumbs = Object.keys(pathMap)
    .map(key => pathMap[key])
    .map((page, i, thisArray) => {
      if (i === thisArray.length - 1) {
        return (
          <li className='active' key={i}>
            {page.title}
          </li>
        );
      }
      return (
        <li key={i}>
          <Link to={page.path}>{page.title}</Link>
        </li>
      );
    });

  return <ol className='breadcrumb'>{crumbs}</ol>;
}

Breadcrumbs.displayName = 'Breadcrumbs';
Breadcrumbs.propTypes = propTypes;

export default Breadcrumbs;
