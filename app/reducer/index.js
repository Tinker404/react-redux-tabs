//初始化数据
const initialState = {
    active: 0,
    title: ['React', 'Redux', 'Angular', 'Vue'],
    content: ['React JS', 'Redux JS', 'Angular JS', 'Vue JS'],
}

//创建reducer
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TAB_CHANGE':
            return Object.assign({}, state, {
                active: action.active
            })
        default :
            return state
    }
}

export default appReducer