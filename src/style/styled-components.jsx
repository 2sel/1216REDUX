import styled from "styled-components";

export const StBtn = styled.button`
  cursor: pointer;
  font-size: 1rem;
  width: 8rem;
  height: 3rem;
  border: 1px solid rgba(0 0 0/10%);
  border-radius: 1rem;
  background: ${(x) => x.background};
  color: ${(x) => x.color};

  // 변경하고 싶은 것은 이대로 변경
`;
