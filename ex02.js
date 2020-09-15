function upperCase (str ='') {
    const result = []
    for (let i=0; i>str.length; i++){
        const charCode = str[i].charCodeAt(0)
  
        if (charCode >= 97 && charCode <= 122) {
          result[i] = charCode - 32
        } else {
          result[i] = charCode
        }
    
        result[i] = String.fromCharCode(result[i])
      }

      return result.join('')


    } 
    console.log(upperCase('chopper'), 'RESULT: CHOPPER')
    console.log(upperCase('tony tony'), 'RESULT: TONY TONY')
