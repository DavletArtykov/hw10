import { useState } from "react";


export const ExpensesItem = (p) =>{


        const [value,setValue] = useState('')

        function onChangeInputList(event){
            let list = {value}
                setValue(event.target.value)
                console.log(list);


            }

            const [object,setObject] = useState('')
            function onChangeInputObj(event){
                let obj = [object]
                setObject(event.target.value)
                console.log(obj);

                
            }

            const [text,setText] = useState('')
            function onChangeInputString(event){
                setText(event.target.value)
                console.log(text);
            }



    return(
        <div className="input-wrapper" >
          <div >
              <label>Array</label>
              <input  onChange={onChangeInputList} />
              <p>{value}</p>
          </div>
          <div>
              <label>Object</label>
              <input onChange={onChangeInputObj} />
              <p>{object}</p>
          </div>
          <div>
              <label>Text</label>
              <input type='text' onChange={onChangeInputString}  />
              <p>{text}</p>
          </div>
        </div>
    )
}