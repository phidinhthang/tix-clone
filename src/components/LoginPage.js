import React from 'react';
import {
	Wrapper,
	LoginCard,
	ImgStyled,
	ButtonWrapper,
	Text,
	Button,
	Image,
	CloseBtn,
	CloseIcon
} from './LoginPage.style.js';



export default function LoginPage() {
	return (
		<Wrapper>
			<LoginCard>
				<CloseBtn to="/">
					<CloseIcon className="fa fa-times"></CloseIcon>
				</CloseBtn>
				<ImgStyled />
				<ButtonWrapper>
					<Text>
						Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!
					</Text>
					<Button>
						<Image src="/app/images/btn-FB.png"/>
					</Button>
					<Button>
						<Image src="/app/images/btn-Zalo.png"/>
					</Button>
					<Button>
						<Image src="/app/images/btn-Google.png"/>
					</Button>
				</ButtonWrapper>
			</LoginCard>
		</Wrapper>
	)
}