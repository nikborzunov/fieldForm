import React, {useEffect, useState} from "react"
import s from './fieldsForm.module.css'
import {Field, reduxForm} from "redux-form";
import SelectFormContainer from "../selectForm/SelectFormContainer";

let FieldsForm = (props) => {


    const posts = props.posts;


    const [emptyPosts, setSubmit] = useState(true)
    useEffect(() => {
        if (Object.keys(posts).length) {
            let jsonPosts = JSON.stringify(posts);
            alert(jsonPosts)
        }
    }, [props.posts])


    const disableSubmit = () => {
        setSubmit(false);
    }

    const clearPosts = () => {
        props.clearPostsAlert();
    }
    const validate = (values) => {
        const errors = {}

        if (values.name === 'username') {
            if (!values.value) {
                errors.username = "username is Empty";
            }
        }

        if (values.name === 'password') {
            if (!values.value) {
                errors.password = "password is Empty";

            }
        }

        if (values.name === 'textLabel') {
            if (!values.value) {
                errors.textLabel = "textLabel is Empty";
            }
        }

        props.postInputValidationError(errors)

        return errors
    }

    const {handleSubmit} = props
    return (<form className={s.formWrap} onSubmit={handleSubmit}>
        <div className={s.formField}>
            <div className={s.formField_Title}>Username</div>
            {props.errors.username ? <div>
                <div className={s.errorInput}><Field
                    placeholder='Enter username'
                    name='username' component='input' type='text'
                    onChange={(e) => disableSubmit(e.target)}
                    onBlur={(e) => validate(e.target)}/>
                </div>
                <div className={s.errorMessage}>{props.errors.username}</div>
                <span className={s.check_error}></span>

            </div> : <div><Field placeholder='Enter username'
                                 name='username' component='input' type='text'
                                 onChange={(e) => disableSubmit(e.target)}
                                 onBlur={(e) => validate(e.target)}/>
            </div>}
        </div>
        <div className={s.formField}>
            <div className={s.formField_Title}>Password</div>
            {props.errors.password ? <div>
                <div className={s.errorInput}><Field placeholder='Enter password'
                                                     name='password' component='input' type='password'
                                                     onChange={disableSubmit}
                                                     onBlur={(e) => validate(e.target)}/></div>
                <div className={s.errorMessage}>{props.errors.password}</div>
                <span className={s.check_error}></span>

            </div> : <div>
                <div><Field placeholder='Enter password'
                            name='password' component='input' type='password'
                            onChange={disableSubmit}
                            onBlur={(e) => validate(e.target)}/>
                </div>
                <div className={s.formField_Alt}>Your password is between 4 and 12 characters</div>
            </div>

            }
        </div>
        <div className={s.formField}>
            <div className={s.formField_Title}>Input Text Label</div>
            {props.errors.textLabel ? <div>
                <div className={s.errorInput}><Field name='textLabel' component='input' type='text'
                                                     onChange={disableSubmit}
                                                     onBlur={(e) => validate(e.target)}/></div>
                <div className={s.errorMessage}>{props.errors.textLabel}</div>
                <span className={s.check_error}></span>

            </div> : <div><Field name='textLabel' component='input' type='text'
                                 onChange={disableSubmit}
                                 onBlur={(e) => validate(e.target)}/>
            </div>}
        </div>

        <div className={s.radioButtons_Wrap}>
            <div className={s.radioButtons_Item}>
                <div><Field name='rememberMe' component='input' type="checkbox" value="Remember me"/></div>
                <div>Remember me</div>
            </div>
            <div className={s.radioButtons_Item}>
                <label className={s.switch}>
                    <Field className={s.isToggle} name='isToggle' component='input' type="checkbox" value="on"/>
                    <span className={`${s.slider} ${s.round}`}></span>
                </label>
                <div>Off</div>
            </div>
            <div className={s.radioButtons_Item}>
                <div><Field name='radioSelection1' component='input' type="radio"
                            value="Radio selection 1"/></div>
                <div>Radio selection 1</div>
            </div>
            <div className={s.radioButtons_Item}>
                <div><Field name='radioSelection2' component='input' type="radio" value="Radio selection 2"/></div>
                <div>Radio selection 2</div>
            </div>
            <div className={s.radioButtons_Item}>
                <div><Field name='radioSelection3' component='input' type="radio" value="Radio selection 3"/></div>
                <div>Radio selection 3</div>
            </div>
        </div>


        <div>
            <SelectFormContainer/>
        </div>

        <div className={s.submitButtons_Wrap}>
            <div>
                <div>
                    <button onClick={() => clearPosts()}>Cancel</button>
                </div>
            </div>
            <div>
                <div className={s.sumbitButton_item}>
                    <button disabled={emptyPosts} type='submit'>Next</button>
                </div>
            </div>
        </div>

    </form>)
}

FieldsForm = reduxForm({form: 'statusChangeForm'})(FieldsForm)

export default FieldsForm