import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { Button } from 'reactstrap';

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        {/* <button type="submit">
          Add Todo
        </button> */}
        <Button type="submit" color="warning">Add Todo</Button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
