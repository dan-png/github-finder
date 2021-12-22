const githubReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        gitUsers: action.payload,
        loading: false,
      }
    case 'GET_USER':
      return {
        ...state,
        gitUser: action.payload,
        loading: false,
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      }
    case 'CLEAR_USERS': {
      return {
        ...state,
        gitUsers: [],
      }
    }
    default:
      return state
  }
}


export default githubReducer