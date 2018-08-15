import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 6px 15px;
  color: #313233;
  
  &:hover {
    background: #eee;
  }
`;

/**
 * Single item in the dropdown panel. This adds the necessary padding for simple text labels.
 *
 * @visibleName Dropdown.Item
 */
const DropdownItem = ({ children, onClick }) => (
  <Wrapper onClick={onClick}>
    {children}
  </Wrapper>
);

DropdownItem.propTypes = {
  /** Label or other contents of the item */
  children: PropTypes.node,
  onClick: PropTypes.func,
};

DropdownItem.defaultProps = {
  onClick: () => null,
};

export default DropdownItem;