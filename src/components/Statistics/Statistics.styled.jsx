import styled from "@emotion/styled";

export const StatsContainer = styled.div`
width: 400px;
margin-bottom: 40px;
border-radius: 10px;
box-shadow: 9px 11px 22px 0px rgba(23,23,23,0.43);
-webkit-box-shadow: 9px 11px 22px 0px rgba(23,23,23,0.43);
-moz-box-shadow: 9px 11px 22px 0px rgba(23,23,23,0.43);
`;

export const Title = styled.h2`
padding: 20px;
text-align: center;
font-family: Quicksand;
font-weight: 700;
font-size: 24px;
`;

export const StatsList = styled.ul`
display:flex;
flex-wrap: wrap;
`;

export const StatsItem = styled.li`
display:flex;
flex-direction: column;
flex-basis: calc(100%/5);
padding: 20px 0px;
overflow: hidden;
box-shadow: 9px 11px 22px 0px rgba(23,23,23,0.43) inset;
-webkit-box-shadow: 9px 11px 22px 0px rgba(23,23,23,0.43) inset;
-moz-box-shadow: 9px 11px 22px 0px rgba(23,23,23,0.43) inset;
background-color: ${props => (props.color)};
`;

export const StatsLabel = styled.span`
text-align: center;
font-family: Quicksand;
font-weight: 500;
font-size: 18px;
margin-bottom: 5px;
`;

export const StatsPercentage = styled.span`
text-align: center;
font-family: Quicksand;
font-weight: 700;
font-size: 20px;
`;
