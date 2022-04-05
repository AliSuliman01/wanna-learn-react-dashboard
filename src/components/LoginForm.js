import React from 'react'

export const LoginForm = ({login, loginFields, onChangeEmail, onChangePassword}) => {

    function onClieckFunction(params) {
        console.log('login');
    }
    
    return (
        <div>
            <form action="#"  className='login-form'>
                <input type="text" placeholder="email" className='form-control custom-form-input' onChange={onChangeEmail} value={loginFields.email}/>
                <input type="text" placeholder="password"  className='form-control custom-form-input' onChange={onChangePassword} value={loginFields.password}/>
                <button className='btn btn-login' onClick={onClieckFunction} name="" id="">login</button>
            </form>
        </div>
    )
}
