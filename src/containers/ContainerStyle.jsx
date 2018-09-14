import styled from 'styled-components';

const ContainerStyle = styled.div`
  display: inline-block;
  justify-content: space-around;
  width: 100%;
  background-color: #fff;
  height: 600px;
  font-family: "Helveitca";
  font-weight: 400;
  font-size: 24px;
${''/* aligns all text in all child containers */}
  text-align: center;
  ${''/* align-items: center; */}
  ${''/* align-content: flex-end; */}
`;

export default ContainerStyle;
