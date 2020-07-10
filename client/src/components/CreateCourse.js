import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Form from './Form';

export default class CreateCourse extends Component{

    state= {
        errors:[],

    }

    render() {

        const {
            errors,
        } = this.state;

        return(

            <div className="bounds course--detail">
                <h1>Create Course</h1>
                <div>
                    {/*<div>*/}
                    {/*    <h2 className="validation--errors--label">Validation errors</h2>*/}
                    {/*    <div className="validation-errors">*/}
                    {/*        <ul>*/}
                    {/*            <li>Please provide a value for "Title"</li>*/}
                    {/*            <li>Please provide a value for "Description"</li>*/}
                    {/*        </ul>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <Form
                        cancel={this.cancel}
                        errors={errors}
                        submit={this.submit}
                        submitButtonText="Sign Up"
                        elements={() => (
                            <React.Fragment>
                                <div className="grid-66">
                                    <div className="course--header">
                                        <h4 className="course--label">Course</h4>
                                        <div>
                                            <input
                                                id="title"
                                                name="title"
                                                type="text"
                                                className="input-title course--title--input"
                                                placeholder="Course title..."
                                            />
                                        </div>
                                        <p>By Joe Smith</p>
                                    </div>
                                    <div className="course--description">
                                        <div>
                                            <textarea
                                                id="description"
                                                name="description"
                                                className=""
                                                placeholder="Course description...">
                                            </textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid-25 grid-right">
                                    <div className="course--stats">
                                        <ul className="course--stats--list">
                                            <li className="course--stats--list--item">
                                                <h4>Estimated Time</h4>
                                                <div>
                                                    <input
                                                        id="estimatedTime"
                                                        name="estimatedTime"
                                                        type="text"
                                                        className="course--time--input"
                                                        placeholder="Hours"
                                                    /></div>
                                            </li>
                                            <li className="course--stats--list--item">
                                                <h4>Materials Needed</h4>
                                                <div>
                                                    <textarea
                                                        id="materialsNeeded"
                                                        name="materialsNeeded"
                                                        placeholder="List materials...">
                                                    </textarea>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/*<div className="grid-100 pad-bottom">*/}
                                {/*    <button className="button" type="submit">Create Course</button>*/}
                                {/*    <button className="button button-secondary"*/}
                                {/*            onClick="event.preventDefault(); location.href='index.html';">Cancel*/}
                                {/*    </button>*/}
                                {/*</div>*/}
                                </React.Fragment>
                            )}/>
                </div>
            </div>

        )
    }
    cancel = () => {
        this.props.history.push('/');
    }
}