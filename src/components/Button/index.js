import React from 'react';
import PropTypes from 'prop-types';
import stylesheet from './Button.module.less';


const Button = ({children, onClick})=> {
    return(
        <Button onClick={onClick} className={stylesheet.root}>{children}</Button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
  };

export default Button;