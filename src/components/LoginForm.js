import React from 'react'

export const LoginForm = () => {
    
    return (
        <div>
            <form action=""  className='login-form'>
                <input type="text" placeholder="email" className='form-control'/>
                <input type="text" placeholder="password"  className='form-control'/>
                <input className='btn btn-login' type="submit" name="" id="" value="login"/>
            </form>
        </div>
    )
}
