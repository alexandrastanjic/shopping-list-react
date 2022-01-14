import React, {useState, useEffect} from 'react';
import List from './List';
import Alert from './Alert'

function App() {
  const [name,setName] = useState('')
  const [list, setList] = useState ([])
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState[null]
  const [alert, setAlert] = useState({ show: true, msg: '', type: ''})
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('hello')
  }

  return (
  <section className="section-main">
    <div className="list-container">
      <form className="list-form" onSubmit={handleSubmit}>alert.show && <Alert/></form>
      <List/>
      <button className="clear-btn">Clear items</button>
    </div>
  </section>
  )
}

export default App
