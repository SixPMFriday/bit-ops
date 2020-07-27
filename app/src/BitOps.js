
// Returns 8-character string representing param num (int between 0 and 255) as byte
export function IntToByte(num) {
    if (num < 0 || num > 255) {
        throw "IntToByte parameter num ("+num+") is not between 0 and 255! A byte can represent only represent 256 distinct values.";
    }
    let binary = "";
    let temp = num;
    while (temp > 0) {
        if (temp % 2 === 0) {
            binary = "0" + binary;
        }
        else {
            binary = "1" + binary;
        }
        temp = Math.floor(temp / 2);
    }
    if (!binary.length === 8) {
        throw "IntToByte return value ("+binary+") does not have 8 bits!"
    }
    return binary;
}

// Returns 8-element array representing param num (int between 0 and 255) as byte
export function IntToByteArray(num) {
  let bit_items = Array.from(IntToByte(num));
  while (bit_items.length < 8) {
    bit_items.unshift("0");
  }
  return bit_items
}


// Returns num (int between 0 and 255) representing value of byte string
export function ByteToInt(byte) {
  if (!byte.length === 8) {
    throw "ByteToInt parameter byte ("+byte+") does not have 8 bits!"
  }
  let num = 0;
  for (let b=byte.length-1; b>=0; b--) {
    if (byte[b] === "1") {
       num = num + (2**(byte.length-1-b));
    }
    else if (byte[b] === "0") {
      // pass
    }
    else {
      throw "Invalid bit detected in byte ("+byte+") at position "+b+". Invalid value: "+byte[b]+"."; 
    }
  }
  return num;
}





/* TEST 
    Confirm valid conversion to/from for all values from 0 to 255
*/
function test() {
    for (let i=0; i<=255; i++) {
        let byte = IntToByte(i);
        let renum = ByteToInt(byte);
        console.log("Value: " + i + "     Binary: " + byte + "     Recalc Value: " + renum);
    }    
}
  