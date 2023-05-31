import React from "react"
import s from './fieldsForm.module.css'
import {Field, reduxForm} from "redux-form";
import SelectFormContainer from "../selectForm/SelectFormContainer";

let FieldsForm = (props) => {

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
            <div className={s.formField_Title} >Username</div>
            {props.errors.username ? <div>
                <div>{props.errors.username}</div>
                <div><Field name='username' component='input' type='text'
                            onBlur={(e) => validate(e.target)}/>
                </div>
            </div> : <div><Field name='username' component='input' type='text' onBlur={(e) => validate(e.target)}/>
            </div>}
        </div>
        <div className={s.formField}>
            <div className={s.formField_Title} >Password</div>
            {props.errors.password ? <div>
                <div>{props.errors.password}</div>
                <div><Field name='password' component='input' type='password'
                            onBlur={(e) => validate(e.target)}/></div>

            </div> : <div><Field name='password' component='input' type='text' onBlur={(e) => validate(e.target)}/>
            </div>}
            <div className={s.formField_Alt}>Your password is between 4 and 12 characters</div>
        </div>
        <div className={s.formField}>
            <div className={s.formField_Title}>Input Text Label</div>
            {props.errors.textLabel ? <div>
                <div>{props.errors.textLabel}</div>
                <div><Field name='textLabel' component='input' type='text'
                            onBlur={(e) => validate(e.target)}/></div>
            </div> : <div><Field name='textLabel' component='input' type='text' onBlur={(e) => validate(e.target)}/>
            </div>}
        </div>

        <div className={s.radioButtons_Wrap} >
            <div className={s.radioButtons_Item}>
                <div><Field name='rememberMe' component='input' type="checkbox" value="Remember me"/></div>
                <div>Remember me</div>
            </div>
            <div className={s.radioButtons_Item}>
                {/*<div><Field  name='isToggle' component='input' type="radio" value="toggle"/></div>*/}

                <label className={s.switch}>
                    <Field name='isToggle' component='input' type="checkbox" value="on"/>
                    <span className={`${s.slider} ${s.round}`}></span>
                </label>


                <div>Off</div>
            </div>
            <div className={s.radioButtons_Item}>
                <div><Field name='radioSelection1' component='input' type="radio" value="Radio selection 1"/></div>
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

        <div className={s.submitButtons_Wrap} >
            <div>
                <div>
                    <button onClick={() => clearPosts()} >Cancel</button>
                </div>
            </div>
            <div>
                <div className={s.sumbitButton_item}>
                    <button type='submit'>Next</button>
                </div>
            </div>
        </div>

    </form>)
}

FieldsForm = reduxForm({form: 'statusChangeForm'})(FieldsForm)

export default FieldsForm