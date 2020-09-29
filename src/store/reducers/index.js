import { combineReducers } from 'redux'

import course from './course'

export default combineReducers({
    course,
    // users,                caso tivesse um de users
})

//{
//  course: {modules: [], activeLesson: {}, activeModule: {}}
//  user: {name: '', avatar: ''}
//}