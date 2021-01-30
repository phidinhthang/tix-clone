import { CHOOSE_FILM, CHOOSE_CINEMA, CHOOSE_DATE, CHOOSE_TIME} from '../action/type.js'

const initialState = {
	film:{
		'Chị Mười Ba: 3 Ngày Sinh Tử':{
			'Cinestar Bình Dương':{
				'Hôm nay':['22:30','23:46']
			},
			'Lotte Cinema Bình Dương': {
				'Hôm nay':['Không có suất chiếu']
			},
			'BHD Star Discovery': {
				'Hôm nay':['Không có suất chiếu'],
				'Ngày mai': ['16:50','22:05'],
				'Thứ sáu': ['Không có suất chiếu'],
				'Thứ bảy': ['Không có suất chiếu'],
				'Chủ nhật': ['Không có suất chiếu'],
				'Thứ hai': ['Không có suất chiếu'],
			},
			'Beta Cinemas Mỹ Đình': {
				'Hôm nay':['Không có suất chiếu'],
				'Ngày mai':['Không có suất chiếu'],
				'Thứ sáu': ['13:45'],
				'Thứ bảy': ['13:45'],
				'Chủ nhật': ['13:45'],
				'Thứ hai': ['13:45'],
				'Thứ ba': ['13:45'],
			},
			'Beta Cinemas Đan Phượng': {
				'Hôm nay':['Không có suất chiếu'],
				'Ngày mai':['Không có suất chiếu'],
				'Thứ sáu': ['13:45'],
				'Thứ bảy': ['13:45'],
				'Chủ nhật': ['13:45'],
				'Thứ hai': ['13:45'],
				'Thứ ba': ['13:45'],
			},
			'Lotte Cinema Hà Đông': {
				'Hôm nay':['Không có suất chiếu'],
				'Ngày mai':['Không có suất chiếu'],
				'Thứ sáu': ['13:45'],
				'Thứ bảy': ['09:15','11:15','16:00','18:30','20:15'],
				'Chủ nhật': ['13:45'],
				'Thứ hai': ['13:45'],
				'Thứ ba': ['13:45'],
			}
		},
		'Lừa Đểu Gặp Lừa Đảo - The Con-Heartist (C16)': {

		},
		'Thợ Săn Quái Vật - Monster Hunter (C13)': {

		},
		'Cuộc Sống Nhiệm Màu - Soul - (P)': {

		},
		'Sám Hối (C18)': {

		}
	},
	current: {
		'film':'Phim',
		'cinema':'Rạp',
		'date':'Ngày xem',
		'time':'Suất chiếu'
	}
}

const chooseFilmReducer = (state = initialState,action) => {
	switch(action.type){
		case CHOOSE_FILM:{
			let newState = {...state,current:{
				...state.current,'film':action.payload
			}};
			return newState;
		}
		case CHOOSE_CINEMA:{
			let newState = {...state,current:{
				...state.current,'cinema':action.payload
			}};
			return newState;
		}
		case CHOOSE_DATE:{
			let newState = {...state,current:{
				...state.current,'date':action.payload
			}};
			return newState;
		}
		case CHOOSE_TIME:{
			let newState = {...state,current:{
				...state.current,'time':action.payload
			}};
			return newState;
		}
		default:
			return state;
	}
}

export default chooseFilmReducer;