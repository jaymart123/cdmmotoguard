var tab_lists = document.querySelectorAll(".tab_list ul il");
var tab_items = document.querySelectorAll(".tab_item");

tab_lists.forEach(function(list){
    list.addEventListener("click", function(){
        var tab_data = list.getAttribute("data-tc");

        console.log(tab_data); 

        tab_lists.forEach(function(list){
        list.classList.remove("active");
        });
        list.classList.add("active");

        tab_items.forEach(function(item){
            var tab_class = item.getAttribute("class").split("");
            console.log(tag);
            if(tab_class.includes(tab_data)){
                item.style.display = "block";
            }
            else{
                item.style.display = "none";
            }
            
        });
    })
})