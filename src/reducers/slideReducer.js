
const initialState = {
	slides: [
		{
			images:'/app/images/sam-hoi-16106874942953.jpg',
			id: 'oHtR5YSPLjo'
		},
		{
			images: '/app/images/lua-deu-gap-lua-dao-16105107337344.jpg',
			id: '_ffRLhWSPGk'
		},
		{
			images: '/app/images/em-la-cua-em-16106818552756.jpg',
			id: '9m5HbGDFBrI'
		},
		{
			images: '/app/images/tho-san-quai-vat-16094165971645.jpg',
			id: 'puQyZsaTtqY'
		},
		{
			images: '/app/images/chi-13-16088073540614.png',
			id: 'jYSojHD7i6Q'
		}
	]
}

const slideReducer = (state = initialState, action) => {
	switch(action.type) {
		default: 
			return state;
	}
}

export default slideReducer;