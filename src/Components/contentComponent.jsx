import React from "react"
import FieldsForm from "./fieldsForm/fieldsForm";
import s from './contentComponent.module.css'
import {useEffect, useState} from 'react'


const ContentComponent = props => {

    function clearPostsAlert() {
        props.postText({})
        alert('Cleared All The Posts!')
    }

    function submit(text) {

        let username = {};
        let password = {};
        let textLabel = {};

        let options = props.options;

        if (text.username) {
            username = text.username.valueOf()
        }
        if (text.password) {
            password = text.password.valueOf()
        }
        if (text.textLabel) {
            textLabel = text.textLabel.valueOf()
        }

        let rememberMe = {};
        let isToggle = {};
        let radioSelection1 = {};
        let radioSelection2 = {};
        let radioSelection3 = {};


        if (text.rememberMe) {
            rememberMe = text.rememberMe.valueOf()
        }
        if (text.isToggle) {
            isToggle = text.isToggle.valueOf()
        }
        if (text.radioSelection1) {
            radioSelection1 = text.radioSelection1.valueOf()
        }
        if (text.radioSelection2) {
            radioSelection2 = text.radioSelection2.valueOf()
        }
        if (text.radioSelection3) {
            radioSelection3 = text.radioSelection3.valueOf()
        }

        let result = {
            username, password, textLabel,
            rememberMe, isToggle, radioSelection1, radioSelection2, radioSelection3,
            options
        }

        if(Object.keys(text).length) {
            props.postText({
                username, password, textLabel,
                rememberMe, isToggle, radioSelection1, radioSelection2, radioSelection3,
                options
            })
        }
    }


    return (
        <div className={s.componentWrap}>
            <div className={s.componentContent}>
                <div className={s.componentContent_Item}>
                    <FieldsForm onSubmit={submit}
                                posts={props.posts}
                                errors={props.error}
                                options={props.options}
                                postInputValidationError={props.postInputValidationError}
                                clearPostsAlert={clearPostsAlert}
                    />
                </div>
            </div>
        </div>
    )
}
export default ContentComponent