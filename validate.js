tempercheck();
const form = document.getElementById('form');
const catname = document.getElementById('catName');
const catage = document.getElementById('catAge');
const sdiet = document.getElementById('Sdiet');
const dter = document.getElementById('dTer');
const owner = document.getElementById('owner');
const dtphone = document.getElementById('dtphone');
const cphone = document.getElementById('cphone');
const email = document.getElementById('email');
const eContactName = document.getElementById('eContactName');
const ephone = document.getElementById('ephone');

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
let validateInputs = () => {
    var count=1;
    const catnameValue = catname.value.trim();
    const catAgeValue = catage.value.trim();
    const sdietValue = sdiet.value.trim();
    const dterValue = dter.value.trim();
    const onerValue = owner.value.trim();
    const dtphoneValue = dtphone.value.trim();
    const cphoneValue= cphone.value.trim();
    const emailValue = email.value.trim();
    const econtactValue = eContactName.value.trim();
    const ephoneValue = ephone.value.trim();
    var mail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailValue.match(mail) || emailValue===''){
        setSuccess(email);
        count++;
    }else{
        setError(email,'invalid');
    }
    var phon = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    if(dtphoneValue.match(phon) || dtphoneValue===''){
        setSuccess(dtphone);
        count++;
    }else{
        setError(dtphone,'invalid');
    }
    if(ephoneValue.match(phon)){
        setSuccess(ephone);
        count++;
    }else{
        setError(ephone,'invalid');
    }
    if(cphoneValue.match(phon)){
        setSuccess(cphone);
        count++;
    }else{
        setError(cphone,'invalid');
    }
    if (econtactValue===''){
        setError(eContactName,'required');
        
    }
    else{
        setSuccess(eContactName);
       count++;
    }   
    
    if (onerValue===''){
        setError(owner,'required');
    }
    else{
        setSuccess(owner);
        count++;
    }
    if (dterValue===''){
        setError(dter,'required');
    }
    else{
        setSuccess(dter);
        count++;
    }
    if(catnameValue === '') {
        setError(catname, 'catname is required');
        
    } else {
        setSuccess(catname);
        count++;
    }
    if(catAgeValue === '') {
        setError(catage, 'cat Age is required');
    }
    else if(isNaN(catAgeValue)==false){
        setSuccess(catage);   
        count++;   
    }
    else {
        setError(catage, 'cat Age should be a number');

    }
    if(sdietValue===""){
        setError(sdiet,'required');
        
    }
    else{
        setSuccess(sdiet);
        count++;
    }
    isChecked();
    timecheck();
    console.log(count+'this is count');
    if(count<=8){
        return false;
    }
    else{
        return true;
    }
    
};
function myfunc() {
    if (validateInputs()==false) {
        return false;
    }
    else{
        return true;
    }
}
function dietcheck() {
    var dietcheck =document.getElementById('diet');
    var sdiet = document.getElementById('specialDiet');
    if(dietcheck.checked==true){
        sdiet.style.display="block";        
    }
    else{
        sdiet.style.display="none";
    }
}
function timecheck() {
    var timeArrive = document.getElementById('timeArrive').value;
    var timeLeave = document.getElementById('timeLeave').value;
    if(timeArrive>timeLeave || timeArrive===timeLeave){
        document.getElementById("timeA").style.color="red";
 error1 = "invalid time";
 document.getElementById('timeA').innerText=error1;
    }
    else{
        document.getElementById("timeA").style.display="none";
    }
}
function isChecked(){
 var mon = document.getElementById('mon').checked;
 var tue = document.getElementById('tue').checked;
 var wed = document.getElementById('wed').checked;
 var thu = document.getElementById('thu').checked;
 var fri = document.getElementById('fri').checked;
 
 if(mon==false && tue == false && wed==false && thu==false && fri==false){
 document.getElementById("check").style.color="red";
 error1 = "atleast one should be required";
 document.getElementById('check').innerText=error1;
 return false;
 }
 else{
document.getElementById("check").style.display="none";

 return true;
 }
 }
 function tempercheck() {
     var tem1 = document.getElementById('temp1');
     var tem2 = document.getElementById('temp2');
     var tem3 = document.getElementById('temp3');
     temp1.checked=true;
    
     
 }
 function tempercheck1() {
     var tem1 = document.getElementById('temp1');
    var tem2 = document.getElementById('temp2');
     var tem3 = document.getElementById('temp3');
     var tem4 = document.getElementById('temp4');
     var x = document.getElementById('temper');
     
    
     if(!tem4.isChecked){
        x.style.display="block"; 
     }
     else{
        x.style.display="none";
     }
 }
 function tempercheck2() {
     var tem1 = document.getElementById('temp1');
    var tem2 = document.getElementById('temp2');
     var tem3 = document.getElementById('temp3');
     var tem4 = document.getElementById('temp4');
     var x = document.getElementById('temper');
     
    
     if(!tem2.isChecked){
        x.style.display="none";   
     }
     else{
        x.style.display="none";
     }
 }
 function tempercheck3() {
     var tem1 = document.getElementById('temp1');
    var tem2 = document.getElementById('temp2');
     var tem3 = document.getElementById('temp3');
     var tem4 = document.getElementById('temp4');
     var x = document.getElementById('temper');
     
    
     if(!tem2.isChecked){
        x.style.display="none";   
     }
     else{
        x.style.display="none";
     }
 }
 function tempercheck4() {
     var tem1 = document.getElementById('temp1');
    var tem2 = document.getElementById('temp2');
     var tem3 = document.getElementById('temp3');
     var tem4 = document.getElementById('temp4');
     var x = document.getElementById('temper');
     
    
     if(!tem1.isChecked){
        x.style.display="none";   
     }
     else{
        x.style.display="none";
     }
 }