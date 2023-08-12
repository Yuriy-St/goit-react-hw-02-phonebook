import styled from '@emotion/styled';
import { flexCol } from './Base/Flex.styled';
import { container } from './Base/Container.styled';
import { space } from 'constants/theme';

export const Container = styled.div`
  ${flexCol}
  ${container}
  label: appContainer;
  gap: ${space(10)};
  padding-top: ${space(10)};
  padding-bottom: ${space(10)};
`;
