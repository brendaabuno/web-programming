//identifikasi variable
const tbody=document.querySelector('tbody');
const form =document.querySelector('form');
const studentinfo = {
  nim:document.querySelector('#nim'),
  name:document.querySelector('#name'),
  faculty:document.querySelector('#faculty'),
  prodi:document.querySelector('#prodi')
}

form.addEventListener('submit',forminput);
document.querySelector('.searchbar').addEventListener('keyup',function(){
  var searchvalue = this.value.toLowerCase();
  var data =tbody.getElementsByTagName('tr')
  for (var i = 0; i < data.length; i++) {
    const nilai = data[i].getElementsByTagName('td')[1];
    if (nilai.textContent.toLowerCase().includes(searchvalue)>0) {
      data[i].style.display = ''
    }else{
      data[i].style.display = 'none'
    }
  }
}) 

function forminput(e){
  e.preventDefault();
  const rows =[
   document.createElement('tr'),
   document.createElement('td'),
   document.createElement('td'),
   document.createElement('td'),
   document.createElement('td'),
   document.createElement('button')
 ];

 
 rows[1].textContent=studentinfo.nim.value;
 rows[2].textContent=studentinfo.name.value;
 rows[3].textContent=studentinfo.faculty.value;
 rows[4].textContent=studentinfo.prodi.value;
 rows[5].className='btn bg-lg btn-dark'
 rows[5].textContent='Delete'
 rows[5].addEventListener('click',function(){
   const row = this.parentNode.parentNode;
   row.parentNode.removeChild(row);
 })

 rows[0].appendChild(rows[1]);
 rows[0].appendChild(rows[2]);
 rows[0].appendChild(rows[3]);
 rows[0].appendChild(rows[4]);
 rows[0].appendChild(rows[5]);

 studentinfo.nim.value = ''
 studentinfo.name.value = ''
 studentinfo.faculty.value = ''
 studentinfo.prodi.value = ''

 tbody.appendChild(rows[0]);
}