import styled from 'styled-components';

export const DesktopNavMenu = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  &:last-child > .nav-link {
    margin-right: 0;
  }
`;

export const NavLink = styled.a`
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  padding: .5rem 0;
  margin-right: 4rem;
  transition: all .2s;

&:hover {
    color: rgb(0, 191, 255);
}

&:active {
    color: rgb(0, 191, 255);
}
`;

