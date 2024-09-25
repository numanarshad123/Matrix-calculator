function addMatrices() {
    // Get values from Matrix A
    const a11 = parseFloat(document.getElementById('a11').value) || 0;
    const a12 = parseFloat(document.getElementById('a12').value) || 0;
    const a13 = parseFloat(document.getElementById('a13').value) || 0;
    const a21 = parseFloat(document.getElementById('a21').value) || 0;
    const a22 = parseFloat(document.getElementById('a22').value) || 0;
    const a23 = parseFloat(document.getElementById('a23').value) || 0;
    const a31 = parseFloat(document.getElementById('a31').value) || 0;
    const a32 = parseFloat(document.getElementById('a32').value) || 0;
    const a33 = parseFloat(document.getElementById('a33').value) || 0;
  
    // Get values from Matrix B
    const b11 = parseFloat(document.getElementById('b11').value) || 0;
    const b12 = parseFloat(document.getElementById('b12').value) || 0;
    const b13 = parseFloat(document.getElementById('b13').value) || 0;
    const b21 = parseFloat(document.getElementById('b21').value) || 0;
    const b22 = parseFloat(document.getElementById('b22').value) || 0;
    const b23 = parseFloat(document.getElementById('b23').value) || 0;
    const b31 = parseFloat(document.getElementById('b31').value) || 0;
    const b32 = parseFloat(document.getElementById('b32').value) || 0;
    const b33 = parseFloat(document.getElementById('b33').value) || 0;
  
    // Perform addition
    const r11 = a11 + b11;
    const r12 = a12 + b12;
    const r13 = a13 + b13;
    const r21 = a21 + b21;
    const r22 = a22 + b22;
    const r23 = a23 + b23;
    const r31 = a31 + b31;
    const r32 = a32 + b32;
    const r33 = a33 + b33;
  
    // Display result
    displayResult(r11, r12, r13, r21, r22, r23, r31, r32, r33);
  }
  
  function subtractMatrices() {
    // Get values from Matrix A
    const a11 = parseFloat(document.getElementById('a11').value) || 0;
    const a12 = parseFloat(document.getElementById('a12').value) || 0;
    const a13 = parseFloat(document.getElementById('a13').value) || 0;
    const a21 = parseFloat(document.getElementById('a21').value) || 0;
    const a22 = parseFloat(document.getElementById('a22').value) || 0;
    const a23 = parseFloat(document.getElementById('a23').value) || 0;
    const a31 = parseFloat(document.getElementById('a31').value) || 0;
    const a32 = parseFloat(document.getElementById('a32').value) || 0;
    const a33 = parseFloat(document.getElementById('a33').value) || 0;
  
    // Get values from Matrix B
    const b11 = parseFloat(document.getElementById('b11').value) || 0;
    const b12 = parseFloat(document.getElementById('b12').value) || 0;
    const b13 = parseFloat(document.getElementById('b13').value) || 0;
    const b21 = parseFloat(document.getElementById('b21').value) || 0;
    const b22 = parseFloat(document.getElementById('b22').value) || 0;
    const b23 = parseFloat(document.getElementById('b23').value) || 0;
    const b31 = parseFloat(document.getElementById('b31').value) || 0;
    const b32 = parseFloat(document.getElementById('b32').value) || 0;
    const b33 = parseFloat(document.getElementById('b33').value) || 0;
  
    // Perform subtraction
    const r11 = a11 - b11;
    const r12 = a12 - b12;
    const r13 = a13 - b13;
    const r21 = a21 - b21;
    const r22 = a22 - b22;
    const r23 = a23 - b23;
    const r31 = a31 - b31;
    const r32 = a32 - b32;
    const r33 = a33 - b33;
  
    // Display result
    displayResult(r11, r12, r13, r21, r22, r23, r31, r32, r33);
  }
  
  function displayResult(r11, r12, r13, r21, r22, r23, r31, r32, r33) {
    document.getElementById('result').innerHTML =`
      <p>${r11} ${r12} ${r13}</p>
      <p>${r21} ${r22} ${r23}</p>
      <p>${r31} ${r32} ${r33}</p>
    `;
  }
  