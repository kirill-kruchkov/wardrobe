import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0.5rem 1rem;
  font-weight: 500;
`;

const DropdownTitle = ({ children, ...otherProps }) => (
  <Wrapper {...otherProps}>{children}</Wrapper>
);

DropdownTitle.propTypes = {
  children: PropTypes.node,
};

export default DropdownTitle;
