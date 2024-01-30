import { ui } from "./ui.js";

export class details{
    constructor(){
    this.ui=new ui()
    }
async  getDetailes(id){
    $('.item5').removeClass('d-none')
        const detaileApi=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const respones=await detaileApi.json();
        $('#mealPage').addClass('d-none  ')
        $('#detailesPage').removeClass('d-none')
        $('#searchPage').addClass('d-none')
        this.ui.displayDetails(respones.meals[0])
      
    }
}