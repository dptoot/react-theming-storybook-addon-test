import PropTypes from 'prop-types';
import styled from '@emotion/styled'

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.palette.colors.accent1};
  border: none;
  border-radius: 2px;
  padding: 8px 16px;
  margin: 8px;
  font-size: 16px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.colors.white};
  min-width: 140px;
  min-height: 60px;
`;

export const Button = (props) => (
  <StyledButton {...props}>
    {props.label}
  </StyledButton>
)

Button.propTypes = {
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
