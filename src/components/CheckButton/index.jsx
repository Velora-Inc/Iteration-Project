

const CheckButton = () => {

  const handleClick = () => {
    const data = {"checked":"true"}
    console.log(data)
    fetch('http://localhost:8081', {
      method:"POST",
      mode:"cors",
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    })
  }

  return (
    <button
      onClick={handleClick}
      style={{"height":"300px","width":"800px","cursor":"pointer"}}
    >
      Check Mark
    </button>
  )
}

export default CheckButton

