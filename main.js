    //   $(document).ready(function () {
    //     $(".click").click(function(){
    //         $('.popup-box').css({
    //             'opacity': '1' , 'user-select': 'auto'
    //         });
    //     });

    //     $('.btn1').click(function(){
    //         $('.popup-box').css({
    //             'opacity': '0' , 'user-select': 'none'
    //         });
    //     })

    //     $('.btn2').click(function(){
    //         $('.popup-box').css({
    //             'opacity': '0' , 'user-select': 'none'
    //         });
    //         alert("FILE SUCCESSFULLY DELETED");
    //     })

    //   });


    function showhide(){
        let popup = document.getElementById("popup");
        popup.style.opacity = '1';
        
    }
    
    
    function popuphide(){
        let button1 = document.getElementById("btn1");
        popup.style.opacity = "0";
        popup.style.userselect = "auto";
    }
    

    function deletepopup(){
        let button2 = document.getElementById("btn2");

        let confirmoption = confirm("ARE YOU SURE BECAUSE THE FILE IS NOT RESTORE!");

        if(confirmoption == true){
            popup.style.opacity = "0";
        }
        else{
            popup.style.opacity = "1";
        }
    }