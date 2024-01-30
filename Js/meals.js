import { details } from "./details.js";
import { ui } from "./ui.js";

export class meals{
constructor(){
this.getMeals(``)
this.ui=new ui()
this.details=new details()
$('.item5').removeClass('d-none')
$('.img-logo').click((e)=>{
    this.getMeals('')
    $('.item5').removeClass('d-none')
})
}
async getMeals(meal){
    const mealApi=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
    const respones=await mealApi.json()
    
    this.ui.displayMeals(respones.meals.slice(0,20))
    this.getMealId()
}
getMealId(){
    $('.item5').addClass('d-none')
    document.querySelectorAll('.cards').forEach(card => {
        card.addEventListener('click',(e)=>{
            const id=card.dataset.id
            this.details.getDetailes(id)
        })
    });
}
}