import styled from 'styled-components';

export const Output = styled.input`
  margin: 0 4px;
  height: 2em;
  width: 7em;
  font-size: 14px;
  background-color: transparent;
  border: 1px solid lightgrey;
  border-radius: 4px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const OutputStart = styled(Output)`
  display: ${(props) =>
    props.typeProp === 'range' ? 'inline - flex' : 'none'};
`;

export const OutputWrapper = styled.div`
  min-width: 220px;

  display: flex;

  justify-content: center;
  margin-bottom: 8px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Select = styled.select`
  margin: 0 4px;
  height: 2.3em;
  width: 7.4em;
  font-size: 14px;
  background-color: transparent;
  border: 1px solid lightgrey;
  border-radius: 4px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: right;
`;

export const Table = styled.table`
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 0;
  margin: auto;
`;

export const Day = styled.td`
  padding: 4px 8px;
  vertical-align: middle;
  text-align: center;
  border: 2px solid transparent;
  border-radius: 50%;

  &:hover {
    background-color: #eaeaea;
    cursor: pointer;
    border-radius: 50%;
  }

  &.range {
    background-color: lightblue;
    border-radius: 50%;
  }

  &.selected,
  &.selectedEnd {
    border: 2px solid dodgerblue;
  }

  &.today {
    background-color: lightgreen;
    border-radius: 50%;
    color: white;
  }

  &.today:hover {
    background-color: #0081ff;
    border-radius: 50%;
  }
`;

export const Calendar = styled.div`
  display: block;
  height: 310px;
  padding: 10px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
`;

export const Weekdays = styled.tr`
  color: black;
`;

export const Hr = styled.hr`
  width: 100%;
`;

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.25em 0.75em;
  text-align: center;
  height: 2em;
  font-size: 1rem;
  background-color: transparent;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  cursor: pointer;
`;

export const RangeButton = styled(Button)`
  margin: 7px;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
