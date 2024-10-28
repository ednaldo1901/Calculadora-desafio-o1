import {InputCotainer} from './styled'

const Input = ({value}) => {
  return (
    <InputCotainer>
    <input disabled value={value}/>
    </InputCotainer>
    )
}

export default Input
