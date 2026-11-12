function calcola(operazione) {
  const n1 = parseFloat(document.getElementById('num1').value) || 0;
  const n2 = parseFloat(document.getElementById('num2').value) || 0;
  
  const res = operazione === '+' ? n1 + n2 : n1 - n2;
  
  document.getElementById('risultato').textContent = res;
}