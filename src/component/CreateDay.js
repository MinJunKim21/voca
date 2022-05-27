import { useNavigate } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

export default function CreateDay(){
  const day = useFetch('http://localhost:3001/days')
  const navigate = useNavigate()

  function addDay(){
    fetch(`http://localhost:3001/days`,{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day:day.length+1
      }),
    })
    .then(res => {
      if(res.ok){
        alert('생성이 완료되었습니다')
        navigate(`/`)
      }
    })
  }
  return (
    <div>
      <h3>현재일수: {day.length}일</h3>
      <button onClick={addDay}>Day 추가</button>
    </div>
  )
}