window.onload = function(){
    var submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', function(){
        var imgfile = document.getElementById('imgfile').files[0];
        console.log('ie aa');
        var img = document.createElement("img");
        img.classList.add("obj");
        img.file = imgfile;
        document.getElementById('container').appendChild(img); // Assuming that "preview" is the div output where the content will be displayed.
        
        var reader = new FileReader();
        reader.onload = (function(aImg) { return function(e) { 
            aImg.src = e.target.result; 
            aImg.onload = function(){
                console.log(aImg.width);
                console.log(aImg.height);
    
            };
            
            //document.getElementById('container').style = 'display:none';
        }; })(img);
        reader.readAsDataURL(imgfile);
    });
};