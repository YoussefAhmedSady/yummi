export class nav {
    constructor(){
        $('#bars').click(()=> { 
            if($("nav").css("left")== "0px"){
                this.closeNav()
            }else{
               this.openNav()
            }
         })
    }
    openNav(){
        $('nav').animate({left:'0px'},500)
        $('#bars').html('<i class="fa-solid fa-xmark fa-3x"></i>')
        for (let i = 0; i < 5; i++) {
        $("nav ul li").eq(i).animate({
            top: 0
        }, (i + 5) * 100)
    }
    }
    closeNav(){
        let box=$('.item2').outerWidth()
        $('nav').animate({left:-box},100)
        $('#bars').html('<i class="fa-solid fa-bars fa-3x"></i>')
        $("nav ul li").animate({
            top: "350px"
        }, 200)
    }
}