//if/else
let prodi = 'IF'
if (prodi == 'SI'){
    console.log('Sistem Informasi');
}else if (prodi == 'IF'){
    console.log('Informatika');
}else{
    console.log('No Prodi')
}
//switch
switch(prodi){
    case 1 :
        console.log ('Sistem Informasi');
        break;
    case 2 :
        console.log('Informatika');
        break;
    default:
        console.log('No Prodi');
        break;
}