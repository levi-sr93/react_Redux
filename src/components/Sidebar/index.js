import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as CourseActions from '../../store/actions/course'

const Sidebar = ({ modules, toggleLesson }) => {
    return (
        <aside>
            {modules.map(module => (
                <div key={module.id}>
                    <strong>{module.title}</strong>
                    <ul>
                        {module.lessons.map(lesson => (
                            <li key={lesson.id}>{lesson.title}
                                <button onClick={() => toggleLesson(module, lesson)}>Select</button>
                            </li>

                        ))}
                    </ul>
                </div>
            ))}
        </aside>
    )
}

const mapStatetoProps = state => ({
    modules: state.course.modules
});

const mapDispatchToProps = dispatch => 
    bindActionCreators(CourseActions, dispatch);

// const mapDispatchToProps = dispatch => ({
//     toggleLesson: (module, lesson) => dispatch(CourseActions.toggleLesson(module, lesson))
// });

//conecting the Redux State with Sidebar
// export default connect(state => ({ modules: state.course.modules }))(Sidebar)

export default connect(mapStatetoProps, mapDispatchToProps)(Sidebar)