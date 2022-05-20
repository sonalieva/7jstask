let input = document.querySelector('input');
console.log(input.value);
input.addEventListener('change',function(e){
    console.log(e.target.files[0].size/1024)
    let reader = new FileReader();
    reader.onload = function(e){
        console.log(reader.result)
    }
    reader.readAsDataURL(this.files[0])
})