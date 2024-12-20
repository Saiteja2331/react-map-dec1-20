import React, { FormEvent } from 'react'

export default function sai2() {
    const loginpress=(e:FormEvent)=>{
        e.preventDefault();
    }
  return (
    <div>
        <form>
            <label>USERNAME </label>
            <input type='text'></input><br></br>
            <label>password</label>
            <input type='text'></input>
            <button>submit</button>
        </form>
    </div>
  )
}
