import { CHOOSE_SITE } from '../action/type.js';

const initialState = {
	site: 'Hà Nội',
	sites: ['Hà Nội', 'Đà Nẵng','Hồ Chí Minh','Hải Phòng','Biên Hòa','Nha Trang','Bình Dương','Phan Thiết','Hạ Long','Cần Thơ','Vũng Tàu','Quy Nhơn','Huế','Long Xuyên','Thái Nguyên','Buôn Ma Thuật','Bắc Giang','Bến Tre','Việt Trì','Ninh Bình','Thái Bình','Vinh','Bảo Lộc','Đà Lạt','Trà Vinh','Yên Bái','Kiên Giang','Vĩnh Long',
	'Hậu Giang','Tây Ninh','Tuyên Quang','Thanh Hóa','Nam Định','Hải Dương','Gia Lai','Hà Tĩnh','Phú Yên']
}


const siteReducer = (state = initialState, action) => {
	switch(action.type) {
		case CHOOSE_SITE:{
			const newState = {...state,site:action.payload};
			return newState;
		}
		default:
			return state;
	}
}

export default siteReducer;