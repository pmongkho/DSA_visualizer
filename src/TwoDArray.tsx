import React, {MouseEvent, useEffect, useState} from 'react'

const TwoDArray = () => {
 let twodarray:number[][] =  [
    [1,1,1,1],
    [1,0,1,1],
    [1,1,0,1],
    [0,0,0,1]
    ] 
  const [matrix, setMatrix] = useState(twodarray)
  const [showMatrix, setShowMatrix] = useState("dontShowMatrix")
  
  const setMatrixZeros = (matrix: number[][], ) => { 
    let col0: number = 1, rows: number = matrix.length, cols = matrix[0].length
    
    for (let i: number = 0; i < rows; i++) {
      if (matrix[i][0] == 0) col0 = 0
      for (let j: number = 1; j < cols; j++) 
        if(matrix[i][j]==0) matrix[i][0] = matrix[0][j] = 0
    }
    
    for (let i: number = rows - 1; i >= 0; i--) { 
      for (let j: number = cols - 1; j >= 1; j--) {
        if (matrix[i][0] == 0 || matrix[0][j] == 0) matrix[i][j] = 0
      }
      if(col0==0) matrix[i][0] = 0 
    }

    return matrix
  }
 
  const handleClick = () => {
    setMatrix(setMatrixZeros(matrix))
    setShowMatrix("showMatrix")
      
  }  
   
  useEffect(() => {
  }, [matrix]); // Only re-run the effect if matrix changes
  
console.log(matrix)
  return (
    <div className="twodarray">
      <div className="matrix">
        {    twodarray.map((item, index) => { 
          return <div key={index} className='box-container'>
            {item.map((i, idx) =>
              <input type='text' key={idx} className='box' value={  i} readOnly/>)}</div>
    })}
      </div>
      <button onClick={handleClick}>Set Matrix Zeroes</button>
      <div className={ showMatrix}>
        {    matrix.map((item, index) => { 
          return <div key={index} className='box-container'>
            {item.map((i, idx) =>
              <input type='text' key={idx} className='box' value={  i} readOnly/>)}</div>
    })}
      </div>
    </div>
  ) 
}
 
export default TwoDArray