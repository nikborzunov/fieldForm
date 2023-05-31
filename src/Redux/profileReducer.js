const ADD_POST = 'ADD_POST';
const ADD_INPUT_VALIDATION_ERROR = 'AADD_INPUT_VALIDATION_ERROR';
const ADD_OPTIONS = 'ADD_OPTIONS';

let initialState = {
    posts: {},
    errors: {},
    options: {},
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state, posts: action.posts
            }

        case ADD_INPUT_VALIDATION_ERROR:
            return {
                ...state, errors: action.errors
            }

        case ADD_OPTIONS:
            return {
                ...state, options: action.options
            }

        default:
            return state;
    }

}


export const addPostActionCreator = (text) => {
    return {
        type: ADD_POST,
        posts: text,
    }
}

export const addInputValidationErrorAC = (errors) => {
    return {
        type: ADD_INPUT_VALIDATION_ERROR,
        errors: errors,
    }
}

export const addOptionsAC = (options) => {
    return {
        type: ADD_OPTIONS,
        options: options,
    }
}

export default profileReducer