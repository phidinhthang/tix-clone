import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Wrapper = styled.div`
	background-image: url('/app/images/bg2.jpg');
	background-position:center;
	width: 100%;
	height:100vh;
	display:flex;
	justify-content:center;
	align-items:center;
`;

export const LoginCard = styled.div`
	width:100%;
	max-width:360px;
	height:516px;
	background-color:#132c51;
	display:flex;
	flex-direction:column;
	justify-content:space-between;
	align-items:center;
	padding:0 40px;
	border-radius:5px;
	position:relative;
`
export const ImgStyled = styled.img.attrs({
  src: `/app/images/group@2x.png`
})`
	margin-top:60px;
	width:70%;
`
export const ButtonWrapper = styled.div`
	width:100%;
	font-size:15px;
	margin-bottom:20px;
`;

export const Text = styled.p`
	color:white;
	text-align:center;
`
export const Button = styled.button`
	width:100%;
	border-radius:5px;
`

export const Image = styled.img`
	width:100%;
	margin-top:10px;
`

export const CloseBtn = styled(Link)`
	position:absolute;
	top:0;
	right:0;
	transform:translate(50%,-50%);
	border-radius:50%;
	background-color:#081630;
	width:40px;
	height:40px;
	display:flex;
	align-items:center;
	justify-content:center;
	text-decoration:none;
`

export const CloseIcon = styled.i`
	font-size:20px;
	color:#455570;
`