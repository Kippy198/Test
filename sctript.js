document.querySelector(".dropbtn").addEventListener('click',function(){
const dropdowncontent = document.querySelector('.dropdown-content');
if(dropdowncontent.style.display === "block"){
    dropdowncontent.style.display = "none";
}
else{
    dropdowncontent.style.display = "block";
}
});