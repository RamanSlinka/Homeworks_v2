const initialState = {
isLoading: false
}

type LoadingActionType = {
    type: 'LOADING'
    isLoading: boolean
}

type initialStateType = typeof initialState

export const loadingReducer = (state = initialState, action: LoadingActionType): initialStateType => {
    switch (action.type) {
        case 'LOADING': {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default: return state
    }
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({type:"LOADING", isLoading:isLoading})
