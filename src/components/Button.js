import React from 'react';
import PropTypes from 'prop-types';
import stylesheet from './Button.module.less';

export const Button = ({children, onClick})=> {
  return(
    <button onClick={onClick} className={stylesheet.root}>{children}</button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export const ButtonLink = ({children, href, ...rest})=> {
  return(
    <a href={href} className={stylesheet.root} {...rest}>{children}</a>
  )
}

ButtonLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
};
